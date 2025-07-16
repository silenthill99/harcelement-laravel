<?php

use App\Http\Controllers\ClipController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VideoController;
use App\Models\Message;
use App\Models\Video;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

Route::get("/contacts", function () {
    return Inertia::render('Contacts');
})->name("contacts");

Route::get('/clips', [ClipController::class, "index"])->name("clips");

Route::get("/courts_metrages", [VideoController::class, 'index'])->name("videos.index");

Route::get("/bonus", function () {
    return Inertia::render('Bonus');
})->name("bonus");

Route::get("/quelques_films", function () {
    return Inertia::render('Quelques films');
})->name("films");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post("/contacts", function (Request $request) {
    $message = Message::create([
        "subject" => $request->subject,
        "email" => $request->email,
        "message" => $request->message
    ]);
    return Inertia::render('Contacts');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get("/add", [VideoController::class, 'create'])
    ->name('videos.create')->middleware(['auth', 'verified']);
Route::post("/add", [VideoController::class, "store"])->name('videos.store');

Route::get("/update/{id}", [VideoController::class, "edit"])->name('videos.edit');
Route::post("/update/{id}", [VideoController::class, "update"])->name('videos.update');

require __DIR__.'/auth.php';
