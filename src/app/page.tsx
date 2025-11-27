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
              Your Company Name
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl">
              Your compelling company tagline goes here.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#">
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
            <h2 className="text-3xl font-bold font-headline">Our Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              Discover the powerful features that make our product unique.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Bot className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Feature One</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Description of the first amazing feature of your product.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Feature Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Description of the second amazing feature of your product.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Feature Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Description of the third amazing feature of your product.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold font-headline">What Our Customers Say</h2>
            <blockquote className="mt-4">
              <p className="text-lg text-foreground/80">"This product is a game-changer. It has transformed our workflow and saved us countless hours. Highly recommended!"</p>
              <footer className="mt-4 text-sm text-muted-foreground">- Happy Customer</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
