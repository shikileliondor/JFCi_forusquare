import { Link } from '@inertiajs/react';
import type { CSSProperties } from 'react';

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

const styles: Record<string, CSSProperties> = {
    page: {
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #ededef 0%, #d8d8da 100%)',
        padding: 'clamp(8px, 1.4vw, 26px)',
    },
    frame: {
        width: 'min(1500px, 98%)',
        borderRadius: '0',
        background: '#f8f8f8',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 22px 64px rgba(18, 18, 18, 0.12)',
        padding: '20px clamp(14px, 2vw, 30px) 30px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
            'radial-gradient(circle at 14% 22%, rgba(188, 188, 188, 0.16), transparent 30%), radial-gradient(circle at 84% 84%, rgba(188, 188, 188, 0.14), transparent 26%), linear-gradient(140deg, rgba(220, 220, 220, 0.15) 8%, transparent 30%), linear-gradient(36deg, rgba(220, 220, 220, 0.15) 8%, transparent 38%)',
    },
};

export default function LookbackHero() {
    return (
        <section style={styles.page}>
            <div style={styles.frame}>
                {/* <img
                    aria-hidden="true"
                    src="/images/flam.png"
                    alt=""
                    style={{
                        position: 'absolute',
                        left: '-12px',
                        bottom: '-10px',
                        width: 'clamp(180px, 18vw, 350px)',
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />
                <img
                    aria-hidden="true"
                    src="/images/flamme .png"
                    alt=""
                    style={{
                        position: 'absolute',
                        right: '-18px',
                        bottom: '-42px',
                        width: 'clamp(120px, 11vw, 220px)',
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                /> */}

                <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', fontFamily: '"IBM Plex Mono", monospace', fontSize: 'clamp(10px, 1vw, 16px)', marginBottom: '14px', position: 'relative', zIndex: 2 }}>
                    <Link
                        href="/"
                        style={{
                            color: '#2f2f2f',
                            textDecoration: 'none',
                            border: '1px solid rgba(47, 47, 47, 0.35)',
                            padding: '7px 16px',
                            borderRadius: '999px',
                            background: 'rgba(255, 255, 255, 0.75)',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/convention-2026"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            border: '1px solid #ef1f33',
                            padding: '7px 16px',
                            borderRadius: '999px',
                            background: '#ef1f33',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        Convention 2026
                    </Link>
                </nav>

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
  <h1
    style={{
        margin: '-10px 0 0',
        textTransform: 'uppercase',
        fontFamily: 'Anton, Impact, sans-serif',
        color: '#060606',
        fontSize: 'clamp(18px, 3vw, 54px)',
        lineHeight: 0.88,
        letterSpacing: '-0.01em',
        textAlign: 'center',
    }}
>
    <span style={{ display: 'block', marginBottom: '6px' }}>
        JEUNESSE FOURSQUARE
    </span>

    <span
        style={{
            display: 'block',
            color: '#ff1f37',
            fontSize: 'clamp(20px, 3.2vw, 58px)',
            letterSpacing: '0.01em',
        }}
    >
        COTE D&apos;IVOIRE
    </span>
</h1>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <span style={{ width: 'clamp(80px, 16vw, 290px)', height: '2px', background: 'rgba(15, 15, 15, 0.65)' }} />
                        {['✝', '🕊', '♜', '♛'].map((icon, index) => (
                            <span key={`${icon}-${index}`} style={{ width: 'clamp(26px, 2.2vw, 42px)', height: 'clamp(26px, 2.2vw, 42px)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: index === 0 ? '#0e0e0e' : index === 1 ? '#ef1f33' : index === 2 ? '#1998ED' : '#F0BD14', color: '#fff', fontSize: 'clamp(16px, 1.3vw, 24px)' }}>{icon}</span>
                        ))}
                        <span style={{ width: 'clamp(80px, 16vw, 290px)', height: '2px', background: 'rgba(15, 15, 15, 0.65)' }} />
                    </div>

                </div>
<div
    style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '14px',
        alignItems: 'start',
        position: 'relative',
        zIndex: 3,
        marginTop: '8px',
    }}
>
    {heroCards.map((card) => (
        <article
            key={card.label}
            style={{
                display: 'grid',
                gridTemplateRows: '260px auto auto',
                justifyItems: 'center',
                alignItems: 'start',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '260px',
                    overflow: 'hidden',
                    background: '#ddd',
                    clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                }}
            >
                <img
                    src={card.src}
                    alt={card.alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                    }}
                />
            </div>

            <div
                style={{
                    width: '68%',
                    marginTop: '8px',
                    padding: '5px 10px',
                    background: card.accent,
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 'clamp(10px, 0.85vw, 16px)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    textAlign: 'center',
                    transform: 'skewX(-12deg)',
                    boxSizing: 'border-box',
                }}
            >
                <span
                    style={{
                        display: 'block',
                        transform: 'skewX(12deg)',
                    }}
                >
                    {card.label}
                </span>
            </div>

            <p
                style={{
                    margin: '8px 0 0',
                    fontFamily: '"Brush Script MT", "Segoe Script", cursive',
                    color: '#2a2a2a',
                    fontSize: 'clamp(13px, 1vw, 20px)',
                    lineHeight: 1,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                }}
            >
                {card.caption}
            </p>
        </article>
    ))}
</div>
            </div>
        </section>
    );
}
