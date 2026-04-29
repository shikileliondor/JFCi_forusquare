import type { CSSProperties } from 'react';

const photoDimensions = [
    { width: 110, height: 160, alt: 'Surfer inside a breaking wave' },
    { width: 120, height: 175, alt: 'Surfer cutting through a wave crest' },
    { width: 130, height: 150, alt: 'Surfer waiting near the shore' },
    { width: 115, height: 170, alt: 'Surfer gliding on an open face wave' },
    { width: 100, height: 185, alt: 'Surfer diving under breaking surf' },
] as const;

const styles: Record<string, CSSProperties> = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#E8E6E0',
    },
    frame: {
        width: '1440px',
        height: '900px',
        background: '#E8E6E0',
        color: '#1A1A1A',
        overflow: 'hidden',
    },
};

const buttonStyle: CSSProperties = {
    width: '30px',
    height: '30px',
    border: '1.5px solid #1A1A1A',
    borderRadius: '50%',
    background: 'transparent',
    color: '#1A1A1A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 160ms ease, color 160ms ease',
};

export default function LookbackHero() {
    return (
        <section style={styles.page}>
            <div style={styles.frame}>
                <nav
                    style={{
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 20px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '6px',
                            alignItems: 'center',
                            fontFamily: '"IBM Plex Mono", monospace',
                            fontSize: '11px',
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

                <div style={{ padding: '8px 20px 0', textAlign: 'center' }}>
                    <h1
                        style={{
                            margin: 0,
                            fontFamily: 'Anton, sans-serif',
                            fontSize: '64px',
                            lineHeight: '100%',
                            letterSpacing: '-0.01em',
                            color: '#1A1A1A',
                            textTransform: 'uppercase',
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
                        height: '240px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '8px',
                        padding: '24px 20px 0',
                    }}
                >
                    {photoDimensions.map((dimension, index) => (
                        <img
                            key={dimension.alt}
                            src={`https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=${dimension.width * 3}&h=${dimension.height * 3}&q=80&crop=entropy&sat=-20&sig=${index + 1}`}
                            alt={dimension.alt}
                            style={{
                                width: `${dimension.width}px`,
                                height: `${dimension.height}px`,
                                borderRadius: '4px',
                                objectFit: 'cover',
                            }}
                        />
                    ))}
                </div>

                <div
                    style={{
                        height: '64px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        padding: '16px 20px 4px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2px',
                            fontFamily: '"IBM Plex Mono", monospace',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '10px',
                                color: '#666666',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            WEBSITE
                        </span>
                        <span
                            style={{
                                fontSize: '20px',
                                fontWeight: 500,
                                color: '#1A1A1A',
                            }}
                        >
                            The Lookback
                        </span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            type="button"
                            style={buttonStyle}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.background =
                                    '#1A1A1A';
                                event.currentTarget.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.background =
                                    'transparent';
                                event.currentTarget.style.color = '#1A1A1A';
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '13px',
                                    transform: 'rotate(-45deg)',
                                }}
                            >
                                ↗
                            </span>
                        </button>
                        <button
                            type="button"
                            style={buttonStyle}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.background =
                                    '#1A1A1A';
                                event.currentTarget.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.background =
                                    'transparent';
                                event.currentTarget.style.color = '#1A1A1A';
                            }}
                        >
                            <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 1h8v12l-4-3-4 3V1z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    style={{
                        margin: '16px 20px 0',
                        height: '28px',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            width: '100%',
                            height: '1px',
                            transform: 'translateY(-50%)',
                            background: '#AAAAAA',
                        }}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-4px)',
                        }}
                    >
                        <div
                            style={{
                                width: '1px',
                                height: '8px',
                                background: '#666666',
                            }}
                        />
                        <div
                            style={{
                                marginTop: '2px',
                                fontFamily: '"IBM Plex Mono", monospace',
                                fontSize: '9px',
                                color: '#666666',
                            }}
                        >
                            MARY
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -4px)',
                        }}
                    >
                        <div
                            style={{
                                width: '1px',
                                height: '8px',
                                background: '#666666',
                                margin: '0 auto',
                            }}
                        />
                        <div
                            style={{
                                marginTop: '2px',
                                fontFamily: '"IBM Plex Mono", monospace',
                                fontSize: '9px',
                                color: '#666666',
                            }}
                        >
                            JANUARY
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-4px)',
                        }}
                    >
                        <div
                            style={{
                                width: '1px',
                                height: '8px',
                                background: '#666666',
                                marginLeft: 'auto',
                            }}
                        />
                        <div
                            style={{
                                marginTop: '2px',
                                fontFamily: '"IBM Plex Mono", monospace',
                                fontSize: '9px',
                                color: '#666666',
                            }}
                        >
                            DECEMBER
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            left: '48%',
                            top: '50%',
                            transform: 'translateY(-10px)',
                            width: '1px',
                            height: '20px',
                            background: '#1A1A1A',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
