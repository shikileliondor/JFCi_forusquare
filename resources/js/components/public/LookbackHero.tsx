import type { CSSProperties } from 'react';

interface HeroCard {
    accent: string;
    alt: string;
    caption: string;
    label: string;
    rotate: string;
    src: string;
}

const heroCards: HeroCard[] = [
    {
        src: '/images/image  (1).jpg',
        alt: 'Jeune homme adorant avec un micro',
        label: 'ADORER',
        caption: 'Un cœur pour Dieu',
        accent: '#F91D32',
        rotate: '-2.4deg',
    },
    {
        src: '/images/image  (4).jpg',
        alt: 'Jeunes servant avec enthousiasme',
        label: 'SERVIR',
        caption: 'Des mains pour aimer',
        accent: '#1592EE',
        rotate: '1.2deg',
    },
    {
        src: '/images/image  (5).jpg',
        alt: 'Jeunesse avec panneau et sourire',
        label: 'ÉQUIPER',
        caption: 'Des vies transformées',
        accent: '#F4B400',
        rotate: '-1.1deg',
    },
    {
        src: '/images/image 2 .jpg',
        alt: 'Amies connectées lors du rassemblement',
        label: 'CONNECTER',
        caption: 'Une génération unie',
        accent: '#8A2BE2',
        rotate: '1.4deg',
    },
    {
        src: '/images/image 7.jpg',
        alt: 'Groupe rayonnant en mission',
        label: 'IMPACTER',
        caption: 'Le monde pour Christ',
        accent: '#10B85D',
        rotate: '-1.8deg',
    },
];

const styles: Record<string, CSSProperties> = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #ececec 0%, #e2e2e2 100%)',
        padding: 'clamp(10px, 2vw, 28px)',
    },
    frame: {
        width: 'min(1900px, 100%)',
        backgroundColor: '#f7f7f7',
        borderRadius: '34px',
        boxShadow: '0 20px 70px rgba(0, 0, 0, 0.12)',
        border: '1px solid rgba(20, 20, 20, 0.08)',
        padding: '22px clamp(18px, 3vw, 34px) 26px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
            'radial-gradient(circle at 18% 20%, rgba(0, 0, 0, 0.05) 0, transparent 34%), radial-gradient(circle at 84% 75%, rgba(0, 0, 0, 0.04) 0, transparent 36%), repeating-linear-gradient(150deg, rgba(255, 255, 255, 0.7) 0, rgba(255, 255, 255, 0.7) 8px, transparent 8px, transparent 14px)',
    },
};

export default function LookbackHero() {
    return (
        <section style={styles.page}>
            <div style={styles.frame}>
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        left: '-54px',
                        top: '180px',
                        width: '280px',
                        height: '560px',
                        background: 'linear-gradient(180deg, #ffbf2f 0%, #ff6400 60%, #f10f2b 100%)',
                        clipPath: 'polygon(50% 0%, 72% 15%, 65% 44%, 89% 63%, 80% 100%, 44% 75%, 30% 100%, 11% 74%, 18% 49%, 7% 21%)',
                        opacity: 0.9,
                    }}
                />
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        right: '-18px',
                        bottom: '-110px',
                        width: '160px',
                        height: '390px',
                        background: 'linear-gradient(180deg, #ffb126 0%, #ff5500 55%, #f1112b 100%)',
                        clipPath: 'polygon(54% 0%, 70% 17%, 64% 42%, 86% 61%, 77% 100%, 41% 73%, 26% 100%, 8% 70%, 16% 45%, 7% 18%)',
                    }}
                />

                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: '"IBM Plex Mono", monospace', fontSize: 'clamp(10px, 1vw, 13px)', marginBottom: '16px' }}>
                    <span style={{ color: '#363636' }}>Foi · Prière · Consécration · Morel</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#363636' }}><span style={{ width: '11px', height: '11px', borderRadius: '2px', background: '#ef1f33' }} />Easy Way Out / Bi</span>
                </nav>

                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ margin: 0, textTransform: 'uppercase', fontFamily: 'Anton, Impact, sans-serif', color: '#090909', fontSize: 'clamp(52px, 9vw, 150px)', lineHeight: 0.9, letterSpacing: '-0.025em' }}>
                        Jeunesse®<br />Foursquare<br />
                        <span style={{ color: '#ff2138' }}>Cote d&apos;ivoire</span>
                    </h1>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', marginTop: '16px' }}>
                        <span style={{ width: 'clamp(90px, 16vw, 200px)', height: '2px', background: 'rgba(0, 0, 0, 0.7)' }} />
                        {['✝', '🕊', '⚱', '♛'].map((icon, index) => (
                            <span key={`${icon}-${index}`} style={{ width: '34px', height: '34px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: index === 0 ? '#111' : index === 1 ? '#ef1f33' : index === 2 ? '#1592EE' : '#f2b500', color: '#fff', fontSize: '20px' }}>{icon}</span>
                        ))}
                        <span style={{ width: 'clamp(90px, 16vw, 200px)', height: '2px', background: 'rgba(0, 0, 0, 0.7)' }} />
                    </div>
                    <p style={{ marginTop: '14px', marginBottom: '18px', fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.22em', fontSize: 'clamp(11px, 1.1vw, 21px)', color: '#161616' }}>FOI · UNITÉ · MISSION · IMPACT</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '14px', alignItems: 'end', position: 'relative', zIndex: 2 }}>
                    {heroCards.map((card) => (
                        <article key={card.label} style={{ transform: `rotate(${card.rotate})`, transformOrigin: 'bottom center' }}>
                            <div style={{ border: '7px solid #fff', boxShadow: '0 12px 35px rgba(0, 0, 0, 0.16)', background: '#ddd' }}>
                                <img src={card.src} alt={card.alt} style={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block' }} />
                            </div>
                            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', minWidth: '78%', padding: '9px 12px', background: card.accent, color: '#fff', fontWeight: 800, fontSize: 'clamp(17px, 1.5vw, 34px)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{card.label}</div>
                                <p style={{ margin: '8px 0 0', fontFamily: '"Brush Script MT", "Segoe Script", cursive', color: '#212121', fontSize: 'clamp(17px, 1.4vw, 31px)' }}>{card.caption}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
