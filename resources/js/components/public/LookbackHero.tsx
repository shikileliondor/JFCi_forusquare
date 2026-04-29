import type { CSSProperties } from 'react';

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
                        Better Off®
                        <br />
                        THE LOOKBACK
                        <br />
                        (BO®S/2026)
                    </h1>
                </div>

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
                    }}
                >
                    {photoDimensions.map((dimension, index) => (
                        <img
                            key={dimension.alt}
                            src={`https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=${dimension.width * 2}&h=${dimension.height * 2}&q=80&crop=entropy&sat=-20&sig=${index + 1}`}
                            alt={dimension.alt}
                            style={{
                                width: `clamp(150px, ${Math.round(dimension.width / 3.2)}px + 10vw, ${dimension.width}px)`,
                                minWidth: `clamp(150px, ${Math.round(dimension.width / 3.2)}px + 10vw, ${dimension.width}px)`,
                                height: `clamp(190px, ${Math.round(dimension.height / 3.4)}px + 12vw, ${dimension.height}px)`,
                                marginTop: `clamp(0px, ${Math.round(dimension.offsetTop / 2)}px, ${dimension.offsetTop}px)`,
                                objectFit: 'cover',
                                scrollSnapAlign: 'center',
                                borderRadius: '16px',
                                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                                transition:
                                    'transform 220ms ease, filter 220ms ease',
                                filter: 'saturate(1.02) contrast(1.02)',
                            }}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.transform =
                                    'translateY(-6px) scale(1.015)';
                                event.currentTarget.style.filter =
                                    'saturate(1.12) contrast(1.05)';
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.transform = 'none';
                                event.currentTarget.style.filter =
                                    'saturate(1.02) contrast(1.02)';
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
