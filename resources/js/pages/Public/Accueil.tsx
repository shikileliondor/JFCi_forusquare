import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Header from '@/components/public/Header';
import LeaderSupportSection from '@/components/public/LeaderSupportSection';
import LookbackHero from '@/components/public/LookbackHero';
import BackgroundComponents from '@/components/ui/background-components';

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
            <Head title="Accueil">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header isVisible={isHeaderVisible} />
            <BackgroundComponents>
                <main>
                    <LookbackHero />
                    <LeaderSupportSection />
                </main>
            </BackgroundComponents>
        </>
    );
}
