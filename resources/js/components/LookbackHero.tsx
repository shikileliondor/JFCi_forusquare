import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';

interface LookbackProps {
    photos: string[];
}

const photoDimensions = [
    { width: 110, height: 160, alt: 'Surfer inside a breaking wave' },
    { width: 120, height: 175, alt: 'Vintage monochrome collage artwork' },
    { width: 130, height: 150, alt: 'Nighttime storefront with lit interior' },
    { width: 115, height: 170, alt: 'People standing under a 99¢ sign' },
    { width: 100, height: 185, alt: 'Street scene with sculptural figures' },
] as const;

const styles: Record<string, CSSProperties> = {
    root: {
        width: '100%',
        minHeight: '100vh',
        background: '#E8E6E0',
        overflow: 'hidden',
        color: '#1A1A1A',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
    },
    titleBlock: {
        textAlign: 'center',
        padding: '8px 20px 0',
    },
    photoStrip: {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '8px',
        padding: '24px 20px 0',
        height: '240px',
        overflow: 'hidden',
    },
    footerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '16px 20px 4px',
    },
};

export default function LookbackHero({ photos }: LookbackProps) {
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const [cursorPercent, setCursorPercent] = useState<number>(48);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const updateCursorPosition = (clientX: number): void => {
        const timelineElement = timelineRef.current;

        if (!timelineElement) {
            return;
        }

        const { left, width } = timelineElement.getBoundingClientRect();
        const relativeX = clientX - left;
        const nextPercent = (relativeX / width) * 100;
        const constrainedPercent = Math.max(0, Math.min(100, nextPercent));
        setCursorPercent(constrainedPercent);
    };

    useEffect(() => {
        const onMouseMove = (event: MouseEvent): void => {
            if (!isDragging) {
                return;
            }

            updateCursorPosition(event.clientX);
        };

        const onMouseUp = (): void => {
            if (isDragging) {
                setIsDragging(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [isDragging]);

    return (
        <section style={styles.root}>
            <nav style={styles.nav}>
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', color: '#333333' }}>
                    Timeline <span style={{ color: '#999999' }}>·</span> Surf <span style={{ color: '#999999' }}>·</span> Index{' '}
                    <span style={{ color: '#999999' }}>·</span> About
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', background: '#D42B2B', borderRadius: '2px' }} />
                    <span style={{ fontSize: '11px', fontFamily: '"IBM Plex Mono", monospace', color: '#333333' }}>Easy Way Out / Bi</span>
                </div>
            </nav>

            <div style={styles.titleBlock}>
                <h1
                    style={{
                        fontFamily: 'Anton, sans-serif',
                        fontSize: 'clamp(40px, 6vw, 64px)',
                        lineHeight: 1,
                        color: '#1A1A1A',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                        margin: 0,
                    }}
                >
                    Better Off®<br />
                    THE LOOKBACK
                    <br />
                    (BO®S/2026)
                </h1>
            </div>

            <div style={styles.photoStrip}>
                {photoDimensions.map((dimension, index) => (
                    <div
                        key={`${dimension.alt}-${index}`}
                        style={{ width: `${dimension.width}px`, height: `${dimension.height}px`, borderRadius: '4px', overflow: 'hidden' }}
                    >
                        <img
                            src={photos[index] ?? ''}
                            alt={dimension.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>

            <div style={styles.footerRow}>
                <div>
                    <div
                        style={{
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#666666',
                            fontFamily: '"IBM Plex Mono", monospace',
                            marginBottom: '2px',
                        }}
                    >
                        WEBSITE
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 500, color: '#1A1A1A', fontFamily: '"IBM Plex Mono", monospace' }}>The Lookback</div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        type="button"
                        style={{
                            width: '30px',
                            height: '30px',
                            border: '1.5px solid #1A1A1A',
                            borderRadius: '50%',
                            background: 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ fontSize: '13px', transform: 'rotate(-45deg)', color: '#1A1A1A' }}>↗</span>
                    </button>
                    <button
                        type="button"
                        style={{
                            width: '30px',
                            height: '30px',
                            border: '1.5px solid #1A1A1A',
                            borderRadius: '50%',
                            background: 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1h8v12l-4-3-4 3V1z" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
                        </svg>
                    </button>
                </div>
            </div>

            <div ref={timelineRef} style={{ position: 'relative', margin: '0 20px', height: '28px' }}>
                <div style={{ position: 'absolute', top: '50%', width: '100%', height: '1px', background: '#AAAAAA', transform: 'translateY(-50%)' }} />

                <div style={{ position: 'absolute', left: 0, top: 'calc(50% - 4px)' }}>
                    <div style={{ width: '1px', height: '8px', background: '#666666' }} />
                    <div style={{ marginTop: '2px', fontSize: '9px', color: '#666666', fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.05em' }}>MARY</div>
                </div>

                <div style={{ position: 'absolute', left: '50%', top: 'calc(50% - 4px)', transform: 'translateX(-50%)' }}>
                    <div style={{ width: '1px', height: '8px', background: '#666666', margin: '0 auto' }} />
                    <div style={{ marginTop: '2px', fontSize: '9px', color: '#666666', fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.05em' }}>JANUARY</div>
                </div>

                <div style={{ position: 'absolute', right: 0, top: 'calc(50% - 4px)' }}>
                    <div style={{ width: '1px', height: '8px', background: '#666666', marginLeft: 'auto' }} />
                    <div style={{ marginTop: '2px', fontSize: '9px', color: '#666666', fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.05em' }}>DECEMBER</div>
                </div>

                <div
                    role="slider"
                    aria-label="Timeline cursor"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(cursorPercent)}
                    onMouseDown={(event) => {
                        setIsDragging(true);
                        updateCursorPosition(event.clientX);
                    }}
                    style={{
                        position: 'absolute',
                        top: 'calc(50% - 10px)',
                        left: `${cursorPercent}%`,
                        width: '1px',
                        height: '20px',
                        background: '#1A1A1A',
                        cursor: 'ew-resize',
                    }}
                />
            </div>
        </section>
    );
}
