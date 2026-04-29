import type { CSSProperties } from 'react';
import { useState } from 'react';

const photoCards = [
    {
        src: '/images/image  (1).jpg',
        alt: 'Moment à la convention',
        label: 'INSPIRE',
        month: 'NOVEMBER',
        title: 'WU-NOPOLY IS OFFICIALLY OUT',
        description:
            'Le projet transforme un visuel fort en narration éditoriale. Ici, chaque image devient une porte d’entrée vers une lecture longue, claire et immersive.',
    },
    {
        src: '/images/image  (4).jpg',
        alt: 'Scène de groupe en salle',
        label: 'FEATURE',
        month: 'OCTOBER',
        title: 'COASTAL LINES IN MOTION',
        description:
            'Une direction artistique où les rythmes visuels racontent le mouvement. Le but est de donner une sensation de progression au scroll et au clic.',
    },
    {
        src: '/images/image  (5).jpg',
        alt: 'Intervenant sur scène',
        label: 'ARCHIVE',
        month: 'SEPTEMBER',
        title: 'FRAME STUDY: OCEAN ENERGY',
        description:
            'Un focus sur la composition: masse, contraste et respiration. La mise en page privilégie le contenu éditorial après la sélection de la carte.',
    },
    {
        src: '/images/imge14.jpg',
        alt: 'Discussion autour du projet',
        label: 'JOURNAL',
        month: 'AUGUST',
        title: 'SURF CULTURE IN DETAIL',
        description:
            'La carte agit comme un teaser. Le panneau “show” à droite permet de prolonger l’attention sans quitter le contexte de la galerie.',
    },
    {
        src: '/images/convention.jpg',
        alt: 'Photo d’ambiance convention',
        label: 'EXTRA',
        month: 'JULY',
        title: 'COMMUNITY STORIES',
        description:
            'Les nouvelles images viennent de votre dossier public/images et restent interactives sur desktop comme sur mobile.',
    },
] as const;

const styles: Record<string, CSSProperties> = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 0%, #ffffff 0%, #f6f6f6 42%, #eeeeee 100%)',
        padding: 'clamp(8px, 2vw, 28px)',
    },
    frame: {
        width: 'min(1440px, 100%)',
        minHeight: 'min(860px, calc(100vh - 16px))',
        background: '#F7F7F7',
        color: '#1A1A1A',
        borderRadius: '24px',
        boxShadow: '0 16px 60px rgba(17, 17, 17, 0.15)',
        overflow: 'hidden',
        border: '1px solid rgba(0, 0, 0, 0.08)',
    },
};

export default function LookbackHero() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <section style={styles.page}>
            <div style={styles.frame}>
                <nav
                    style={{
                        minHeight: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px clamp(12px, 3vw, 22px)',
                        gap: '8px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '6px',
                            alignItems: 'center',
                            fontFamily: '"IBM Plex Mono", monospace',
                            fontSize: 'clamp(10px, 1.8vw, 11px)',
                            flexWrap: 'wrap',
                        }}
                    >
                        <span style={{ color: '#333333' }}>Timeline</span>
                        <span style={{ color: '#999999' }}>·</span>
                        <span style={{ color: '#333333' }}>Surf</span>
                        <span style={{ color: '#999999' }}>·</span>
                        <span style={{ color: '#333333' }}>Index</span>
                        <span style={{ color: '#999999' }}>·</span>
                        <span style={{ color: '#333333' }}>About</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: '"IBM Plex Mono", monospace',
                            fontSize: '11px',
                            color: '#333333',
                        }}
                    >
                        <span style={{ width: '10px', height: '10px', background: '#D42B2B', borderRadius: '2px' }} />
                        <span>Easy Way Out / Bi</span>
                    </div>
                </nav>

                <div style={{ padding: '8px clamp(12px, 3vw, 22px) 0', textAlign: 'center' }}>
                    <h1
                        style={{
                            margin: 0,
                            fontFamily: 'Anton, sans-serif',
                            fontSize: 'clamp(36px, 8vw, 66px)',
                            lineHeight: '95%',
                            letterSpacing: '-0.01em',
                            color: '#111111',
                            textTransform: 'uppercase',
                            textWrap: 'balance',
                        }}
                    >
                        Better Off®<br />THE LOOKBACK<br />(BO®S/2026)
                    </h1>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: selectedIndex === null ? '1fr' : 'minmax(0, 1fr) minmax(320px, 40%)',
                        gap: '0',
                        alignItems: 'stretch',
                    }}
                >
                    <div
                        style={{
                            minHeight: 'clamp(320px, 48vw, 540px)',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                            gap: 'clamp(10px, 1.8vw, 20px)',
                            padding: '16px clamp(12px, 3vw, 22px) 24px',
                            alignItems: 'start',
                        }}
                    >
                        {photoCards.map((card, index) => (
                            <button
                                key={card.src}
                                type="button"
                                onClick={() => setSelectedIndex(index)}
                                style={{
                                    border: selectedIndex === index ? '2px solid #111111' : '1px solid rgba(0, 0, 0, 0.08)',
                                    padding: 0,
                                    background: '#F1F1F1',
                                    cursor: 'pointer',
                                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.14)',
                                    transform: selectedIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                                    transition: 'transform 220ms ease, box-shadow 220ms ease, border 220ms ease',
                                }}
                            >
                                <img
                                    src={card.src}
                                    alt={card.alt}
                                    style={{
                                        width: '100%',
                                        aspectRatio: '3 / 4',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </button>
                        ))}
                    </div>

                    {selectedIndex !== null ? (
                        <aside style={{ padding: '18px clamp(18px, 2vw, 30px)', background: '#F7F7F7', borderLeft: '1px solid rgba(0, 0, 0, 0.15)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                <button
                                    type="button"
                                    onClick={() => setSelectedIndex(null)}
                                    style={{ border: 'none', background: 'transparent', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    Close
                                </button>
                            </div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    background: '#E9E2F7',
                                    color: '#7D58C2',
                                    padding: '6px 12px',
                                    fontFamily: '"IBM Plex Mono", monospace',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    marginBottom: '14px',
                                }}
                            >
                                {photoCards[selectedIndex].label}
                            </span>
                            <p style={{ marginTop: 0, marginBottom: '12px', fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700, letterSpacing: '0.02em' }}>
                                ({photoCards[selectedIndex].month})
                            </p>
                            <h2 style={{ marginTop: 0, marginBottom: '18px', fontSize: 'clamp(30px, 3.5vw, 58px)', lineHeight: '95%', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                {photoCards[selectedIndex].title}
                            </h2>
                            <p style={{ margin: 0, fontSize: 'clamp(16px, 1.4vw, 20px)', lineHeight: 1.5, maxWidth: '46ch' }}>
                                {photoCards[selectedIndex].description}
                            </p>
                        </aside>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
