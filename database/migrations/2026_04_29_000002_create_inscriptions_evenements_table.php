<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inscriptions_evenements', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('evenement_id')->constrained('evenements')->cascadeOnDelete();
            $table->string('nom');
            $table->string('prenom');
            $table->date('date_naissance')->nullable();
            $table->enum('sexe', ['homme', 'femme']);
            $table->boolean('est_chretien_foursquare')->default(false);
            $table->string('district')->nullable();
            $table->string('eglise_locale')->nullable();
            $table->string('email')->nullable();
            $table->string('telephone');
            $table->string('code_inscription')->unique();
            $table->dateTime('date_inscription')->useCurrent();
            $table->enum('statut_paiement', ['non_payee', 'payee'])->default('non_payee');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inscriptions_evenements');
    }
};
