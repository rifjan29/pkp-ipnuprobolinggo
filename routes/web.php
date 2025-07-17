<?php

use App\Http\Controllers\BackofficeController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\Frontend\BlogController;
use App\Http\Controllers\Frontend\NewsController;
use App\Http\Controllers\Frontend\ProfileController as FrontendProfileController;
use App\Http\Controllers\Frontend\ProgramKerjaController;
use App\Http\Controllers\Frontend\SejarahController;
use App\Http\Controllers\Frontend\StafController;
use App\Http\Controllers\Frontend\WelcomeController;
use App\Http\Controllers\MasterData\KategoriController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[WelcomeController::class,'index'])->name('welcome.index');
Route::get('sejarah',[SejarahController::class,'index'])->name('sejarah.index');
Route::get('blog-section',[BlogController::class,'index'])->name('blog-section.index');
Route::get('news-section',[NewsController::class,'index'])->name('news-section.index');
Route::get('staf',[StafController::class,'index'])->name('staf.index');
Route::prefix('profile')->group(function () {
    Route::get('sejarah',[FrontendProfileController::class,'sejarah'])->name('sejarah.index');
    Route::get('visi-misi',[FrontendProfileController::class,'visiMisi'])->name('visi-misi.index');
    Route::get('makna-logo',[FrontendProfileController::class,'maknaLogo'])->name('makna-logo.index');

});
Route::prefix('program-kerja')->group(function () {
    Route::get('program-unggulan',[ProgramKerjaController::class,'programUnggulan'])->name('program-unggulan.index');
    Route::get('agenda-kegiatan',[ProgramKerjaController::class,'agendaKegiatan'])->name('agenda-kegiatan.index');
});
// BACKOFFICE
Route::middleware(['auth'])->group(function () {
    Route::prefix('backoffice')->group(function () {
        Route::get('/',[BackofficeController::class,'index'])->name('dashboard');
        Route::prefix('master-data')->group(function () {
            // kategori
            Route::resource('kategori', KategoriController::class);
        });
        // berita
        Route::resource('berita', BeritaController::class);
    });
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
