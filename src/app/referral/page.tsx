'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { findReferrals } from '@/lib/actions';
import type { Recommendation } from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Building, Globe, HeartPulse, Loader2, Phone, Pin } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const referralSchema = z.object({
  needs: z.string().min(10, 'Please describe your needs in a bit more detail.'),
  location: z.string().min(3, 'Please enter a valid city or address.'),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Find Clinics
    </Button>
  );
}

export default function ReferralPage() {
  const [state, formAction] = useFormState(findReferrals, {
    success: false,
    recommendations: [],
    message: ''
  });

  const form = useForm<z.infer<typeof referralSchema>>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      needs: '',
      location: '',
    },
  });

  return (
    <div className="h-full flex flex-col">
       <header className="border-b p-4">
        <h1 className="text-lg font-headline font-semibold">
          Find a Clinic
        </h1>
      </header>

    <div className="container mx-auto p-4 md:p-6 lg:p-8 flex-1">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Safe Referral System</CardTitle>
          <CardDescription>
            Find verified youth-friendly clinics and pharmacies near you. Your search is confidential.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="needs">What services do you need?</Label>
              <Textarea
                id="needs"
                name="needs"
                placeholder="e.g., STI testing, contraception, counseling"
                className="min-h-[100px]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">What is your location?</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g., Accra"
                required
              />
            </div>
            {state.message && !state.success && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.recommendations && state.recommendations.length > 0 && (
        <div className="max-w-2xl mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
          <div className="space-y-4">
            {state.recommendations.map((rec, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Building />{rec.name}</span>
                    {rec.youthFriendly && <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Youth Friendly</Badge>}
                  </CardTitle>
                   <div className="flex items-center pt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < rec.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">({rec.rating})</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><Pin className="w-4 h-4"/> {rec.address}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Phone className="w-4 h-4"/> {rec.phone}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><HeartPulse className="w-4 h-4"/> {rec.services}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Globe className="w-4 h-4"/> {rec.distance} away</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
