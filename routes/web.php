<?php

use App\Http\Controllers\Front\ContactStoreController;
use App\Http\Controllers\ProjectIndexController;
use App\Http\Controllers\ProjectShowController;
use App\Http\Controllers\ServiceListController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => inertia('welcome'))->name('home');
Route::get('blog', fn() => inertia('blog'))->name('blog');
Route::get('projects', ProjectIndexController::class)->name('projects');
Route::get('projects/{slug}', ProjectShowController::class)->name('projects.show');
Route::get('about-us', fn() => inertia('about-us'))->name('abouts-us');
Route::get('contact', fn() => inertia('contact'))->name('contact');
Route::get('services', fn() => inertia('services'))->name('services');
Route::post('contact', ContactStoreController::class)->name('contact_store');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
