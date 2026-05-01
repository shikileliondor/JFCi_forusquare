import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ConventionModal from '@/components/ConventionModal';
import Header from '@/components/public/Header';
import LookbackHero from '@/components/public/LookbackHero';
import NotreVisionSection from '@/components/public/NotreVisionSection';
import PresidentMessageSection from '@/components/public/PresidentMessageSection';
import BackgroundComponents from '@/components/ui/background-components';
import TeamShowcase from '@/components/ui/team-showcase';

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
            <ConventionModal />
            <BackgroundComponents>
                <main>
                    <LookbackHero />
                    <NotreVisionSection />
                    <PresidentMessageSection />
                    <section className="bg-[#efede8] px-5 pb-16 sm:px-8 lg:px-16">
                        <div className="mx-auto w-full max-w-[1100px]">
                            <TeamShowcase />
                        </div>
                    </section>
                </main>
            </BackgroundComponents>
        </>
    );
}
