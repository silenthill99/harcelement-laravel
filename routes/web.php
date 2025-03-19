<?php

use App\Http\Controllers\ProfileController;
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

Route::get("/contacts", function () {
    return Inertia::render('Contacts');
})->name("contacts");

Route::get('/clips', function() {
    return Inertia::render('Quelques clips');
})->name("clips");

Route::get("/courts_metrages", function () {
   return Inertia::render('Courts métrages');
})->name("courts_metrages");

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
});

require __DIR__.'/auth.php';
