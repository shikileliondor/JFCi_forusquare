<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('parametres_site', function (Blueprint $table): void {
            $table->id();
            $table->string('cle')->unique();
            $table->longText('valeur')->nullable();
            $table->string('groupe')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('parametres_site');
    }
};
