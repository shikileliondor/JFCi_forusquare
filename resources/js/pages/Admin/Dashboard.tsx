import { Head } from '@inertiajs/react';

export default function Dashboard({ totalInscriptions, totalInscriptionsPayees }: { totalInscriptions: number; totalInscriptionsPayees: number }) {
    return <div className="p-6"><Head title="Dashboard admin" /><h1 className="text-2xl font-bold">Dashboard admin</h1><p>Total inscriptions: {totalInscriptions}</p><p>Payées: {totalInscriptionsPayees}</p></div>;
}
