import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stories = [
  {
    id: 'story1',
    title: 'Amara\'s Journey to Confidence',
    content:
      "Amara was nervous about asking for contraception. She used Aura to learn about her options and found a youth-friendly clinic nearby. The app helped her prepare questions for the doctor. At the clinic, she was treated with respect and got the information she needed. Amara felt empowered and in control of her health.",
    imageId: 'knowledge-1',
  },
  {
    id: 'story2',
    title: 'Kofi Stands Up to Peer Pressure',
    content:
      "Kofi's friends were pressuring him to have unprotected sex. He felt confused and anxious. He chatted with Aura anonymously and learned about the importance of consent and protection. Armed with knowledge, Kofi confidently told his friends he would only have sex when he felt ready and would always use protection. His real friends respected his decision.",
    imageId: 'knowledge-2',
  },
];

const myths = [
  {
    id: 'myth1',
    myth: 'You can\'t get pregnant the first time you have sex.',
    fact:
      'This is false. It is possible to get pregnant any time you have unprotected vaginal intercourse, including the very first time.',
  },
  {
    id: 'myth2',
    myth: 'Douching after sex can prevent pregnancy.',
    fact:
      'This is a dangerous myth. Douching is not an effective method of birth control and can increase the risk of infections. Sperm can reach the uterus within minutes, long before douching can wash them out.',
  },
  {
    id: 'myth3',
    myth: 'You can tell if someone has an STI just by looking at them.',
    fact:
      'This is false. Many STIs, like Chlamydia and HIV, often have no visible symptoms, especially in the early stages. The only way to know for sure is to get tested.',
  },
];

export default function KnowledgePage() {
  const storyImage = PlaceHolderImages.find(img => img.id === 'knowledge-1');
  const mythImage = PlaceHolderImages.find(img => img.id === 'knowledge-3');

  return (
    <div className="h-full flex flex-col">
      <header className="border-b p-4">
        <h1 className="text-lg font-headline font-semibold">
          Knowledge Base
        </h1>
      </header>
      <div className="container mx-auto p-4 md:p-6 lg:p-8 flex-1">
        <div className="grid gap-12">
          <section>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Story Mode</h2>
                <p className="text-muted-foreground mb-6">
                  Read stories from other young people. You are not alone.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  {stories.map((story) => (
                    <AccordionItem key={story.id} value={story.id}>
                      <AccordionTrigger>{story.title}</AccordionTrigger>
                      <AccordionContent>{story.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              {storyImage && (
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                        src={storyImage.imageUrl}
                        alt={storyImage.description}
                        data-ai-hint={storyImage.imageHint}
                        fill
                        className="object-cover"
                    />
                  </div>
              )}
            </div>
          </section>

          <section>
             <div className="text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">Myth Busters</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's separate fact from fiction. Get accurate information to make healthy choices.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myths.map((item) => (
                <Card key={item.id} className="flex flex-col">
                  <CardHeader>
                    <CardDescription>Myth</CardDescription>
                    <CardTitle>{item.myth}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-primary font-semibold">Fact:</p>
                    <p className="text-sm">{item.fact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
