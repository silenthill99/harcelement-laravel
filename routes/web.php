<?php

use App\Http\Controllers\ClipController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VideoController;
use App\Mail\MessageSendMail;
use App\Models\Message;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("accueil");

Route::get("/forum", function() {
    return Inertia::render('Forum');
})->name("forum");

Route::get("/contacts", [MessageController::class, "create"])->name("contacts");

Route::post("/contacts", [MessageController::class, "store"])->name("contacts.store");

Route::resource('/clips', ClipController::class)->only('create')->middleware(["auth", "can:add-video"]);
Route::resource('/clips', ClipController::class)->except('create');

//Route::resource('/clips', ClipController::class);

//Route::get('/clips', [ClipController::class, "index"])->name("clips");

Route::get('/__mw', fn () => 'ok')->middleware(['auth', 'can:add-video']);

Route::get("/bonus", function () {
    return Inertia::render('Bonus');
})->name("bonus");

Route::get("/quelques_films", function () {
    return Inertia::render('Quelques films');
})->name("films");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource("videos", VideoController::class);
});

//Route::get("/add", [VideoController::class, 'create'])
//    ->name('videos.create')->middleware(['auth', 'verified', 'can:add-video']);
//Route::post("/add", [VideoController::class, "store"])->middleware(['auth', 'verified'])->name('videos.store');
//
//Route::get("/update/{id}", [VideoController::class, "edit"])->middleware(['auth', 'verified'])->name('videos.edit');
//Route::post("/update/{id}", [VideoController::class, "update"])->middleware(['auth', 'verified'])->name('videos.update');



//Route::get("/test", function () {
//    return new MessageSendMail();
//})->name("mail.message-send-mail");

Route::get("/test", function () {
    $msg = new Message();
    return new MessageSendMail($msg);
});

require __DIR__.'/auth.php';
