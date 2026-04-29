import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';

const photoDimensions = [
    {
        width: 355,
        height: 515,
        alt: 'Surfer inside a breaking wave',
        offsetTop: 20,
    },
    {
        width: 355,
        height: 545,
        alt: 'Surfer cutting through a wave crest',
        offsetTop: 10,
    },
    {
        width: 380,
        height: 325,
        alt: 'Surfer waiting near the shore',
        offsetTop: 72,
    },
    {
        width: 330,
        height: 515,
        alt: 'Surfer gliding on an open face wave',
        offsetTop: 18,
    },
    {
        width: 355,
        height: 325,
        alt: 'Surfer diving under breaking surf',
        offsetTop: 56,
    },
] as const;

const storyContent = [
    {
        label: 'INSPIRE',
        month: 'NOVEMBER',
        title: 'WU-NOPOLY IS OFFICIALLY OUT',
        description:
            'Le projet transforme un visuel fort en narration éditoriale. Ici, chaque image devient une porte d’entrée vers une lecture longue, claire et immersive.',
        source: '#',
    },
    {
        label: 'FEATURE',
        month: 'OCTOBER',
        title: 'COASTAL LINES IN MOTION',
        description:
            'Une direction artistique où les rythmes visuels racontent le mouvement. Le but est de donner une sensation de progression au scroll et au clic.',
        source: '#',
    },
    {
        label: 'ARCHIVE',
        month: 'SEPTEMBER',
        title: 'FRAME STUDY: OCEAN ENERGY',
        description:
            'Un focus sur la composition: masse, contraste et respiration. La mise en page privilégie le contenu éditorial après la sélection de la carte.',
        source: '#',
    },
    {
        label: 'JOURNAL',
        month: 'AUGUST',
        title: 'SURF CULTURE IN DETAIL',
        description:
            'La carte agit comme un teaser. Le panneau “show” à droite permet de prolonger l’attention sans quitter le contexte de la galerie.',
        source: '#',
    },
] as const;

const styles: Record<string, CSSProperties> = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
            'radial-gradient(circle at 50% 0%, #ffffff 0%, #f6f6f6 42%, #eeeeee 100%)',
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

    const visiblePhotos = useMemo(() => {
        return photoDimensions.filter((_, index) => index !== 2);
    }, []);

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
                        <span
                            style={{
                                width: '10px',
                                height: '10px',
                                background: '#D42B2B',
                                borderRadius: '2px',
                            }}
                        />
                        <span>Easy Way Out / Bi</span>
                    </div>
                </nav>

                <div
                    style={{
                        padding: '8px clamp(12px, 3vw, 22px) 0',
                        textAlign: 'center',
                    }}
                >
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
                        Jeunesse ®
                        <br />
                        Foursquare
                        <br />
                        Cote d'ivoire 
                    </h1>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            selectedIndex === null
                                ? '1fr'
                                : 'minmax(0, 1fr) minmax(350px, 42%)',
                        gap: '0',
                        alignItems: 'stretch',
                    }}
                >
                    <div
                        style={{
                            height: 'clamp(250px, 45vw, 400px)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'clamp(12px, 2.2vw, 24px)',
                            padding: '16px clamp(12px, 3vw, 22px) 0',
                            overflowX: 'auto',
                            overflowY: 'hidden',
                            scrollSnapType: 'x mandatory',
                            borderRight:
                                selectedIndex === null
                                    ? 'none'
                                    : '1px solid rgba(0, 0, 0, 0.15)',
                        }}
                    >
                        {visiblePhotos.map((dimension, index) => (
                            <button
                                key={dimension.alt}
                                type="button"
                                onClick={() => setSelectedIndex(index)}
                                style={{
                                    border: 'none',
                                    padding: 0,
                                    background: 'transparent',
                                    cursor: 'pointer',
                                }}
                            >
                                <img
                                    src={`/images/images .jpg=${dimension.width * 2}&h=${dimension.height * 2}&q=80&crop=entropy&sat=-20&sig=${index + 1}`}
                                    alt={dimension.alt}
                                    style={{
                                        width: `clamp(150px, ${Math.round(dimension.width / 3.2)}px + 10vw, ${dimension.width}px)`,
                                        minWidth: `clamp(150px, ${Math.round(dimension.width / 3.2)}px + 10vw, ${dimension.width}px)`,
                                        height: `clamp(190px, ${Math.round(dimension.height / 3.4)}px + 12vw, ${dimension.height}px)`,
                                        marginTop: `clamp(0px, ${Math.round(dimension.offsetTop / 2)}px, ${dimension.offsetTop}px)`,
                                        objectFit: 'cover',
                                        scrollSnapAlign: 'center',
                                        borderRadius: 0,
                                        boxShadow:
                                            selectedIndex === index
                                                ? '0 0 0 2px #111111'
                                                : '0 12px 30px rgba(0, 0, 0, 0.2)',
                                        transition:
                                            'transform 220ms ease, filter 220ms ease',
                                        filter: 'saturate(1.02) contrast(1.02)',
                                    }}
                                />
                            </button>
                        ))}
                    </div>

                    {selectedIndex !== null ? (
                        <aside
                            style={{
                                padding: '18px clamp(18px, 2vw, 30px)',
                                background: '#F7F7F7',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '24px',
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedIndex(null)}
                                    style={{
                                        border: 'none',
                                        background: 'transparent',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Close
                                </button>
                                <a
                                    href={storyContent[selectedIndex].source}
                                    style={{
                                        color: '#111111',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    }}
                                >
                                    Source ↗
                                </a>
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
                                {storyContent[selectedIndex].label}
                            </span>

                            <p
                                style={{
                                    marginTop: 0,
                                    marginBottom: '12px',
                                    fontFamily: '"IBM Plex Mono", monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                ({storyContent[selectedIndex].month})
                            </p>

                            <h2
                                style={{
                                    marginTop: 0,
                                    marginBottom: '18px',
                                    fontSize: 'clamp(38px, 4.4vw, 74px)',
                                    lineHeight: '95%',
                                    letterSpacing: '-0.02em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {storyContent[selectedIndex].title}
                            </h2>

                            <p
                                style={{
                                    margin: 0,
                                    fontSize: 'clamp(18px, 1.6vw, 24px)',
                                    lineHeight: 1.5,
                                    maxWidth: '46ch',
                                }}
                            >
                                {storyContent[selectedIndex].description}
                            </p>
                        </aside>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
