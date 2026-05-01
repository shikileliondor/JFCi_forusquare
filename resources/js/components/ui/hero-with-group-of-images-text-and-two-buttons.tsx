import { MoveRight, PhoneCall } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function Hero() {
    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <div>
                            <Badge variant="outline">We&apos;re live!</Badge>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="max-w-lg text-left text-5xl tracking-tighter font-regular md:text-7xl">
                                This is the start of something!
                            </h1>
                            <p className="max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground">
                                Managing a small business today is already
                                tough. Avoid further complications by ditching
                                outdated, tedious trade methods. Our goal is to
                                streamline SMB trade, making it easier and
                                faster than ever.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Button size="lg" className="gap-4" variant="outline">
                                Jump on a call <PhoneCall className="h-4 w-4" />
                            </Button>
                            <Button size="lg" className="gap-4">
                                Sign up here <MoveRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                            alt="Team collaboration"
                            className="aspect-square w-full rounded-md object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                            alt="Business meeting"
                            className="row-span-2 h-full w-full rounded-md object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                            alt="Workshop session"
                            className="aspect-square w-full rounded-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Hero };
