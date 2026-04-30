const supportLinks = [
    {
        label: 'Get Leader + Church Support',
        href: '#',
    },
    {
        label: 'Connect with Foursquare Ministries',
        href: '#',
    },
] as const;

export default function LeaderSupportSection() {
    return (
        <section
            style={{
                width: '100%',
                background: '#efefef',
                padding: 'clamp(36px, 6vw, 92px) clamp(16px, 6vw, 80px)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: 'min(1280px, 100%)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(24px, 4vw, 64px)',
                    alignItems: 'center',
                }}
            >
                <div>
                    <h2
                        style={{
                            margin: 0,
                            fontSize: 'clamp(36px, 6vw, 68px)',
                            lineHeight: 1,
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            maxWidth: '12ch',
                        }}
                    >
                        Are you a Foursquare leader? Find what you need!
                    </h2>

                    <p
                        style={{
                            marginTop: 'clamp(20px, 3vw, 34px)',
                            marginBottom: 'clamp(24px, 3vw, 38px)',
                            fontSize: 'clamp(19px, 1.8vw, 36px)',
                            lineHeight: 1.4,
                            maxWidth: '39ch',
                        }}
                    >
                        Whether you are serving in a local church or in a unique location around the world, the Foursquare One Team, including your local district office, is here to help with everything from credentialing to retirement.
                    </p>

                    <div style={{ display: 'grid', gap: '16px', maxWidth: '520px' }}>
                        {supportLinks.map((supportLink) => (
                            <a
                                key={supportLink.label}
                                href={supportLink.href}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '20px',
                                    textDecoration: 'none',
                                    color: '#121212',
                                    borderBottom: '1px solid rgba(40, 27, 74, 0.45)',
                                    paddingBottom: '14px',
                                    fontWeight: 700,
                                    fontSize: 'clamp(16px, 1.6vw, 28px)',
                                }}
                            >
                                <span>{supportLink.label}</span>
                                <span style={{ color: '#7a5ac3', fontSize: '1.5em', lineHeight: 1 }} aria-hidden="true">
                                    →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <div style={{ justifySelf: 'center', width: 'min(560px, 100%)' }}>
                    <img
                        src="/images/jeunefilles.jpg"
                        alt="Leaders speaking on stage"
                        style={{
                            width: '100%',
                            aspectRatio: '4 / 5',
                            objectFit: 'cover',
                            display: 'block',
                            boxShadow: '0 22px 45px rgba(15, 15, 15, 0.22)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
