import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface ValueCard {
    accent: string;
    icon: string;
    label: string;
    src: string;
    subtitle: string;
}

const valueCards: ValueCard[] = [
    {
        src: '/images/image  (1).jpg',
        label: 'ADORER',
        subtitle: 'Un cœur pour Dieu',
        accent: '#ef1f33',
        icon: '✚',
    },
    {
        src: '/images/image  (4).jpg',
        label: 'SERVIR',
        subtitle: 'Des mains pour aimer',
        accent: '#1998ED',
        icon: '🕊',
    },
    {
        src: '/images/image  (5).jpg',
        label: 'ÉQUIPER',
        subtitle: 'Des vies transformées',
        accent: '#F0BD14',
        icon: '♜',
    },
    {
        src: '/images/image 2 .jpg',
        label: 'CONNECTER',
        subtitle: 'Une génération unie',
        accent: '#9028D5',
        icon: '♛',
    },
];

export default function LookbackHero() {
    return (
        <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="mx-auto max-w-[1280px] rounded-[40px] bg-white px-6 py-6 shadow-[0_22px_60px_rgba(0,0,0,0.12)] lg:px-10 lg:py-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.45fr]">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="font-mono text-[11px] font-semibold tracking-[0.22em] text-[#b8811f] uppercase">
                                FOI • UNITÉ • MISSION • IMPACT
                            </p>
                            <h1 className="mt-5 font-['Anton'] text-[3rem] leading-[0.85] tracking-tight uppercase sm:text-[4.15rem]">
                                <span className="block text-[#0a0a0a]">JEUNESSE</span>
                                <span className="block text-[#0a0a0a]">FOURSQUARE</span>
                                <span className="block text-[#ef1f33]">COTE D&apos;IVOIRE</span>
                            </h1>

                            <div className="mt-5 h-[2px] w-14 bg-[#b8811f]" />
                            <p className="mt-5 max-w-md text-base text-[#2f2f2f]">
                                Une génération appelée à adorer, servir, se connecter et impacter le monde pour Christ.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/convention-2026"
                                className="inline-flex items-center gap-2 rounded-md bg-[#bf8b25] px-5 py-3 text-sm font-semibold text-white uppercase transition hover:opacity-90"
                            >
                                PARTICIPER À LA CONVENTION
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/a-propos"
                                className="inline-flex items-center gap-2 rounded-md border border-[#111] px-5 py-3 text-sm font-semibold text-[#111] uppercase transition hover:bg-black/5"
                            >
                                DÉCOUVRIR LE MOUVEMENT
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <nav className="mb-5 flex flex-wrap items-center gap-7 text-sm font-semibold text-[#111]">
                            <Link href="/" className="text-[#b8811f]">Accueil</Link>
                            <Link href="/convention-2026">Convention 2026</Link>
                            <Link href="/a-propos">À propos</Link>
                            <Link href="/programme">Programme</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>

                        <img
                            src="/images/image 7.jpg"
                            alt="Foule de jeunes en louange pendant le rassemblement"
                            className="h-[260px] w-full rounded-xl object-cover"
                        />

                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {valueCards.map((card) => (
                                <article key={card.label} className="relative overflow-hidden rounded-xl bg-black">
                                    <img src={card.src} alt={card.label} className="h-[138px] w-full object-cover opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />

                                    <div className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-white" style={{ backgroundColor: card.accent }}>
                                        {card.icon}
                                    </div>

                                    <div className="absolute bottom-3 left-3 right-3">
                                        <p className="text-[1.65rem] font-extrabold tracking-tight text-white">{card.label}</p>
                                        <p className="text-sm text-white/90">{card.subtitle}</p>
                                        <span className="mt-2 block h-[3px] w-10 rounded" style={{ backgroundColor: card.accent }} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
