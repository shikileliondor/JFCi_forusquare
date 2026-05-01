import { Link } from '@inertiajs/react';

interface HeroCard {
    accent: string;
    alt: string;
    caption: string;
    label: string;
    src: string;
}

const heroCards: HeroCard[] = [
    {
        src: '/images/image  (1).jpg',
        alt: 'Jeune homme adorant avec un micro',
        label: 'ADORER',
        caption: 'Un cœur pour Dieu',
        accent: '#F21E34',
    },
    {
        src: '/images/image  (4).jpg',
        alt: 'Jeunes servant avec enthousiasme',
        label: 'SERVIR',
        caption: 'Des mains pour aimer',
        accent: '#1998ED',
    },
    {
        src: '/images/image  (5).jpg',
        alt: 'Jeunesse avec panneau et sourire',
        label: 'ÉQUIPER',
        caption: 'Des vies transformées',
        accent: '#F0BD14',
    },
    {
        src: '/images/image 2 .jpg',
        alt: 'Amies connectées lors du rassemblement',
        label: 'CONNECTER',
        caption: 'Une génération unie',
        accent: '#9028D5',
    },
    {
        src: '/images/image 7.jpg',
        alt: 'Groupe rayonnant en mission',
        label: 'IMPACTER',
        caption: 'Le monde pour Christ',
        accent: '#18B95D',
    },
];

export default function LookbackHero() {
    return (
        <section className="w-full bg-gradient-to-b from-[#ededef] to-[#d8d8da] px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
            <div className="mx-auto w-full max-w-[1520px] border border-black/5 bg-[#f8f8f8] px-4 py-5 shadow-[0_22px_64px_rgba(18,18,18,0.12)] sm:px-6 lg:px-10 lg:py-8">
                <nav className="mb-4 flex items-center gap-4 overflow-x-auto pb-1 font-mono text-xs text-[#111] sm:gap-8 sm:text-sm lg:text-base">
                    <Link href="/" className="whitespace-nowrap font-medium hover:opacity-80">
                        Accueil
                    </Link>
                    <Link href="/convention-2026" className="whitespace-nowrap font-medium hover:opacity-80">
                        Convention 2026
                    </Link>
                    <span className="text-xl leading-none">⋮</span>
                </nav>

                <div className="text-center">
                    <h1 className="font-['Anton'] text-[2rem] leading-[0.9] tracking-tight text-[#060606] uppercase sm:text-[3.2rem] lg:text-[4.2rem]">
                        <span className="block">JEUNESSE FOURSQUARE</span>
                        <span className="mt-1 block text-[#ff1f37]">COTE D&apos;IVOIRE</span>
                    </h1>

                    <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="hidden h-[2px] w-20 bg-black/60 sm:block md:w-36 lg:w-64" />
                        {['✝', '🕊', '♜', '♛'].map((icon, index) => (
                            <span
                                key={`${icon}-${index}`}
                                className="inline-flex h-8 w-8 items-center justify-center text-base text-white sm:h-10 sm:w-10 sm:text-lg"
                                style={{
                                    backgroundColor:
                                        index === 0 ? '#0e0e0e' : index === 1 ? '#ef1f33' : index === 2 ? '#1998ED' : '#F0BD14',
                                }}
                            >
                                {icon}
                            </span>
                        ))}
                        <span className="hidden h-[2px] w-20 bg-black/60 sm:block md:w-36 lg:w-64" />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                    {heroCards.map((card) => (
                        <article key={card.label} className="grid justify-items-center">
                            <div className="h-[320px] w-full overflow-hidden bg-[#ddd] [clip-path:polygon(8%_0%,100%_0%,92%_100%,0%_100%)] sm:h-[300px] lg:h-[390px]">
                                <img
                                    src={card.src}
                                    alt={card.alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div
                                className="mt-2 w-[78%] -skew-x-12 px-3 py-2 text-center text-sm font-black tracking-wide text-white uppercase sm:text-base"
                                style={{ backgroundColor: card.accent }}
                            >
                                <span className="block skew-x-12">{card.label}</span>
                            </div>

                            <p className="mt-2 text-center font-['Brush_Script_MT','Segoe_Script',cursive] text-[1.35rem] text-[#2a2a2a]">
                                {card.caption}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
