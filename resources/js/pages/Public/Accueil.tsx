import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Header from '@/components/public/Header';
import LookbackHero from '@/components/public/LookbackHero';

export default function Accueil() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsHeaderVisible(window.scrollY > 16);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            <Head title="Accueil" />
            <Header isVisible={isHeaderVisible} />
            <main>
                <LookbackHero />
            </main>
        </>
    );
}
