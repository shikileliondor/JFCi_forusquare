<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessageContact extends Model
{
    use HasFactory;

    protected $table = 'messages_contacts';

    protected $fillable = [
        'nom',
        'email',
        'telephone',
        'sujet',
        'message',
        'statut',
    ];
}
