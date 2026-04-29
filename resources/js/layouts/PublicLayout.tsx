import Footer from '@/components/public/Footer';
import Header from '@/components/public/Header';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#071A3D]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
