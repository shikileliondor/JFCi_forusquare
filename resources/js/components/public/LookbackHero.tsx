import type { CSSProperties } from 'react';

const photoDimensions = [
    { width: 355, height: 515, alt: 'Surfer inside a breaking wave', offsetTop: 28 },
    { width: 355, height: 545, alt: 'Surfer cutting through a wave crest', offsetTop: 12 },
    { width: 380, height: 325, alt: 'Surfer waiting near the shore', offsetTop: 92 },
    { width: 330, height: 515, alt: 'Surfer gliding on an open face wave', offsetTop: 28 },
    { width: 355, height: 325, alt: 'Surfer diving under breaking surf', offsetTop: 76 },
] as const;

const styles: Record<string, CSSProperties> = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        overflow: 'hidden',
    },
    frame: {
        width: '1440px',
        minHeight: '860px',
        background: '#FFFFFF',
        color: '#1A1A1A',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
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

                <div
                    style={{
                        height: '360px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '24px',
                        padding: '24px 20px 0',
                        overflow: 'hidden',
                    }}
                >
                    {photoDimensions.map((dimension, index) => (
                        <img
                            key={dimension.alt}
                            src={`https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=${dimension.width * 3}&h=${dimension.height * 3}&q=80&crop=entropy&sat=-20&sig=${index + 1}`}
                            alt={dimension.alt}
                            style={{
                                width: `${dimension.width}px`,
                                minWidth: `${dimension.width}px`,
                                height: `${dimension.height}px`,
                                marginTop: `${dimension.offsetTop}px`,
                                borderRadius: '0',
                                objectFit: 'cover',
                            }}
                        />
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px 4px' }}>
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
                        margin: 'auto 20px 0',
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
