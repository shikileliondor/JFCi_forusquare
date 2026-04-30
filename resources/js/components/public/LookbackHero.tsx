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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #ededef 0%, #d8d8da 100%)',
        padding: 'clamp(8px, 1.4vw, 26px)',
    },
    frame: {
        width: 'min(1800px, 100%)',
        borderRadius: '32px',
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
                <div aria-hidden="true" style={{ position: 'absolute', left: '22px', top: '270px', width: '320px', height: '820px', background: 'linear-gradient(180deg, #ffbc25 0%, #ff7800 46%, #ef142e 100%)', clipPath: 'polygon(48% 0%, 76% 14%, 69% 40%, 92% 63%, 82% 100%, 48% 78%, 34% 100%, 12% 72%, 18% 42%, 8% 14%)', opacity: 0.96, zIndex: 0 }} />
                <div aria-hidden="true" style={{ position: 'absolute', right: '14px', bottom: '-112px', width: '150px', height: '480px', background: 'linear-gradient(180deg, #ffb520 0%, #ff6700 45%, #ec1630 100%)', clipPath: 'polygon(48% 0%, 74% 17%, 66% 42%, 88% 62%, 78% 100%, 44% 76%, 30% 100%, 8% 70%, 14% 45%, 8% 17%)', zIndex: 0 }} />

                <nav style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center', fontFamily: '"IBM Plex Mono", monospace', fontSize: 'clamp(9px, 0.9vw, 22px)', marginBottom: '12px', position: 'relative', zIndex: 2 }}>
                    <span style={{ color: '#2f2f2f' }}>Foi · Prière · Consécration · Morel</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2f2f2f' }}><span style={{ width: '11px', height: '11px', borderRadius: '2px', background: '#ef1f33' }} />Easy Way Out / Bi</span>
                </nav>

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                   <h1 style={{ margin: 0, textTransform: 'uppercase', fontFamily: 'Anton, Impact, sans-serif', color: '#060606', fontSize: 'clamp(26px, 5vw, 96px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
    Jeunesse®<br />Foursquare<br />
    <span style={{ color: '#ff1f37' }}>Cote d&apos;ivoire</span>
</h1>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <span style={{ width: 'clamp(80px, 16vw, 290px)', height: '2px', background: 'rgba(15, 15, 15, 0.65)' }} />
                        {['✝', '🕊', '♜', '♛'].map((icon, index) => (
                            <span key={`${icon}-${index}`} style={{ width: 'clamp(26px, 2.2vw, 42px)', height: 'clamp(26px, 2.2vw, 42px)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: index === 0 ? '#0e0e0e' : index === 1 ? '#ef1f33' : index === 2 ? '#1998ED' : '#F0BD14', color: '#fff', fontSize: 'clamp(16px, 1.3vw, 24px)' }}>{icon}</span>
                        ))}
                        <span style={{ width: 'clamp(80px, 16vw, 290px)', height: '2px', background: 'rgba(15, 15, 15, 0.65)' }} />
                    </div>

                    <p style={{ marginTop: '14px', marginBottom: '20px', fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.22em', fontSize: 'clamp(10px, 1.1vw, 26px)', color: '#181818' }}>FOI • UNITÉ • MISSION • IMPACT</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '8px', alignItems: 'start', position: 'relative', zIndex: 3 }}>
                    {heroCards.map((card, index) => (
                        <article key={card.label}>
                            <div
                                style={{
                                    border: '6px solid #fff',
                                    boxShadow: '0 9px 30px rgba(0, 0, 0, 0.2)',
                                    background: '#ddd',
                                    transform: `skewX(${index % 2 === 0 ? '-6deg' : '-4deg'})`,
                                    transformOrigin: 'bottom center',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={card.src}
                                    alt={card.alt}
                                    style={{
                                        width: '120%',
                                        marginLeft: '-10%',
                                        height: 'clamp(240px, 29vw, 430px)',
                                        objectFit: 'cover',
                                        display: 'block',
                                        transform: `skewX(${index % 2 === 0 ? '6deg' : '4deg'}) scale(1.04)`,
                                        transformOrigin: 'center center',
                                    }}
                                />
                            </div>
                            <div style={{ marginTop: '8px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', minWidth: '84%', padding: '8px 12px', background: card.accent, color: '#fff', fontWeight: 900, fontSize: 'clamp(15px, 1.5vw, 34px)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{card.label}</div>
                                <p style={{ margin: '8px 0 0', fontFamily: '"Brush Script MT", "Segoe Script", cursive', color: '#2a2a2a', fontSize: 'clamp(16px, 1.35vw, 30px)' }}>{card.caption}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
