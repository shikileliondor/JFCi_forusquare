import { Head, useForm } from '@inertiajs/react';

export default function Show({ inscription }: any) {
    const form = useForm({ statut_paiement: 'payee' });
    return <div className="p-6"><Head title="Détail inscription" /><h1 className="text-2xl font-bold mb-4">{inscription.code_inscription}</h1><p>{inscription.nom} {inscription.prenom}</p><p>{inscription.telephone}</p><p>{inscription.statut_paiement}</p>{inscription.statut_paiement === 'non_payee' && <button className="mt-4 rounded bg-green-700 px-4 py-2 text-white" onClick={() => form.patch(`/admin/inscriptions/${inscription.id}/paiement`)}>Marquer payée</button>}</div>;
}
