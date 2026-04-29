<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('messages_contacts', function (Blueprint $table): void {
            $table->id();
            $table->string('nom');
            $table->string('email')->nullable();
            $table->string('telephone')->nullable();
            $table->string('sujet')->nullable();
            $table->text('message');
            $table->enum('statut', ['non_lu', 'lu', 'archive'])->default('non_lu');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('messages_contacts');
    }
};
