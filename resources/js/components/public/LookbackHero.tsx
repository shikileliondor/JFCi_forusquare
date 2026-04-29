import type { CSSProperties } from 'react';

const collagePhotos = [
    {
        alt: 'Legacy surfing moment in a deep wave',
        src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=580&h=740&q=80',
        width: 150,
        height: 210,
        top: 215,
        left: 32,
        delay: '0.08s',
    },
    {
        alt: 'Editorial vertical image of a rider crossing the line-up',
        src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=760&h=1080&q=80',
        width: 260,
        height: 360,
        top: 48,
        left: 176,
        delay: '0.18s',
    },
    {
        alt: 'Medium frame showing a tinted ocean scene',
        src: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=680&h=530&q=80',
        width: 232,
        height: 186,
        top: 164,
        left: 462,
        delay: '0.28s',
    },
    {
        alt: 'Small documentary picture from the archive',
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=520&h=680&q=80',
        width: 138,
        height: 194,
        top: 282,
        left: 724,
        delay: '0.38s',
    },
    {
        alt: 'Large premium image balancing the right side',
        src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=980&h=780&q=80',
        width: 334,
        height: 252,
        top: 118,
        left: 884,
        delay: '0.48s',
    },
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
                            fontSize: 'clamp(72px, 10vw, 132px)',
                            lineHeight: '88%',
                            letterSpacing: '-0.02em',
                            color: '#0F1A2B',
                            textTransform: 'uppercase',
                            position: 'relative',
                            zIndex: 4,
                            transform: 'translateY(58px)',
                        }}
                    >
                        JFCI
                        <br />
                        25 ANS D’HISTOIRE
                        <br />
                        (2000–2025)
                    </h1>
                </div>

                <div
                    style={{
                        position: 'relative',
                        height: '470px',
                        marginTop: '-12px',
                        padding: '0 20px',
                    }}
                >
                    {collagePhotos.map((photo) => (
                        <img
                            key={photo.alt}
                            src={photo.src}
                            alt={photo.alt}
                            style={{
                                position: 'absolute',
                                width: `${photo.width}px`,
                                height: `${photo.height}px`,
                                top: `${photo.top}px`,
                                left: `${photo.left}px`,
                                borderRadius: '6px',
                                objectFit: 'cover',
                                boxShadow: '0 14px 30px rgba(15, 26, 43, 0.08)',
                                animation: `collageEnter 620ms cubic-bezier(0.22, 1, 0.36, 1) both`,
                                animationDelay: photo.delay,
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
                <style>
                    {`@keyframes collageEnter {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }`}
                </style>
            </div>
        </section>
    );
}
