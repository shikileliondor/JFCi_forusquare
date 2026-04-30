import type { PropsWithChildren } from 'react';

export default function DemoBackground({ children }: PropsWithChildren) {
    return (
        <div className="relative min-h-screen w-full bg-[#fafafa] text-gray-900">
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10">{children}</div>
        </div>
    );
}
