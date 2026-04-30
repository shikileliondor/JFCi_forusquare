<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InscriptionEvenementController;
use App\Http\Controllers\Public\AccueilController;
use App\Http\Controllers\Public\EvenementPublicController;
use App\Http\Controllers\Public\InscriptionEvenementPublicController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

Route::get('/', [AccueilController::class, 'index'])->name('public.accueil');
Route::inertia('/a-propos', 'Public/APropos')->name('public.a-propos');
Route::get('/evenements', [EvenementPublicController::class, 'index'])->name('public.evenements.index');
Route::get('/evenements/{evenement:slug}/inscription', [InscriptionEvenementPublicController::class, 'create'])->name('public.evenements.inscription.create');
Route::post('/evenements/{evenement:slug}/inscription', [InscriptionEvenementPublicController::class, 'store'])->name('public.evenements.inscription.store');
Route::inertia('/contact', 'Public/Contact')->name('public.contact');

Route::prefix('admin')->middleware('auth')->name('admin.')->group(function (): void {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('/inscriptions', [InscriptionEvenementController::class, 'index'])->name('inscriptions.index');
    Route::get('/inscriptions/{inscription}', [InscriptionEvenementController::class, 'show'])->name('inscriptions.show');
    Route::patch('/inscriptions/{inscription}/paiement', [InscriptionEvenementController::class, 'updatePaiement'])->name('inscriptions.update-paiement');
});

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function (): void {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function (): void {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
});

require __DIR__.'/settings.php';
