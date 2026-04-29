<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('evenements', function (Blueprint $table): void {
            $table->id();
            $table->string('titre');
            $table->string('slug')->unique();
            $table->string('type')->nullable();
            $table->longText('description')->nullable();
            $table->string('image_couverture')->nullable();
            $table->string('lieu')->nullable();
            $table->string('ville')->nullable();
            $table->dateTime('date_debut')->nullable();
            $table->dateTime('date_fin')->nullable();
            $table->enum('statut', ['brouillon', 'publie', 'termine', 'annule'])->default('brouillon');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('evenements');
    }
};
