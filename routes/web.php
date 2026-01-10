<?php

use App\Http\Controllers\PostController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectShowController;
use App\Http\Controllers\ProjectIndexController;
use App\Http\Controllers\Front\ContactStoreController;

Route::get('/', HomeController::class)->name('home');
Route::get('projects', ProjectIndexController::class)->name('projects');
Route::get('projects/{project:slug}', ProjectShowController::class)->name('projects.show');
Route::get('about-us', fn() => inertia('about-us'))->name('abouts-us');
Route::get('contact', fn() => inertia('contact'))->name('contact');
Route::get('services', fn() => inertia('services'))->name('services');
Route::post('contact', ContactStoreController::class)->name('contact_store');

Route::prefix('blog')
    ->name('blog.')
    ->group(function () {
        Route::get('', [PostController::class, 'index'])->name('index');
        Route::get('{post:slug}', [PostController::class, 'show'])->name('show');
    });


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
