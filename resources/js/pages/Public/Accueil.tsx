import { Head, Link } from '@inertiajs/react';

type Evenement = { id: number; titre: string; slug: string; date_debut: string | null };

export default function Accueil({ evenements }: { evenements: Evenement[] }) {
    return (
        <>
            <Head title="Accueil" />
            <div className="mx-auto max-w-5xl p-6 space-y-6">
                <h1 className="text-3xl font-bold">Jeunesse Foursquare Côte d'Ivoire</h1>
                <Link href="/evenements" className="text-blue-600">Voir les événements</Link>
                <ul className="space-y-2">
                    {evenements.map((evenement) => (
                        <li key={evenement.id}>
                            <Link href={`/evenements/${evenement.slug}`} className="underline">{evenement.titre}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
