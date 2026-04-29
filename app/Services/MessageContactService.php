<?php

namespace App\Services;

use App\Models\MessageContact;

class MessageContactService
{
    public function enregistrer(array $donnees): MessageContact
    {
        return MessageContact::create($donnees);
    }

    public function changerStatut(MessageContact $messageContact, string $statut): MessageContact
    {
        $messageContact->update(['statut' => $statut]);

        return $messageContact->refresh();
    }

    public function supprimer(MessageContact $messageContact): bool
    {
        return (bool) $messageContact->delete();
    }
}
