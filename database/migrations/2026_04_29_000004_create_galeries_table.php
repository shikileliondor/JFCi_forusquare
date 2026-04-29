<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('galeries', function (Blueprint $table): void {
            $table->id();
            $table->string('titre');
            $table->string('slug')->unique();
            $table->enum('type', ['photo', 'video']);
            $table->string('fichier');
            $table->string('image_miniature')->nullable();
            $table->text('description')->nullable();
            $table->year('annee')->nullable();
            $table->enum('statut', ['brouillon', 'publie', 'archive'])->default('brouillon');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('galeries');
    }
};
