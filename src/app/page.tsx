import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Search, BookOpen } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'knowledge-1');

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-primary/10 flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center opacity-20"
          />
        )}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl text-primary">
              Welcome to Aura
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl">
              Your confidential companion for Sexual and Reproductive Health. Safe, anonymous, and always here for you.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/chat">
                  Chat with Aura <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/knowledge">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              Everything you need to take control of your sexual and reproductive health, all in one place.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Bot className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">AI Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get instant, confidential answers to your health questions from our AI companion.
                </p>
                <Button variant="link" asChild>
                  <Link href="/chat">Start Chatting <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Find a Clinic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Locate youth-friendly and verified clinics and pharmacies near you, safely and securely.
                </p>
                <Button variant="link" asChild>
                  <Link href="/referral">Find a Clinic <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore stories, bust myths, and get accurate information to make healthy choices.
                </p>
                 <Button variant="link" asChild>
                  <Link href="/knowledge">Explore Topics <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold font-headline">You're not alone</h2>
            <blockquote className="mt-4">
              <p className="text-lg text-foreground/80">"I was too scared to ask my parents about contraception. Aura helped me understand my options and find a clinic where I felt safe and respected. It changed everything for me."</p>
              <footer className="mt-4 text-sm text-muted-foreground">- Amara, 19</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
