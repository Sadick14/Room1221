'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { handleChat } from '@/lib/actions';
import type { Language, Message } from '@/lib/definitions';
import { Mic, Send, Settings, Sparkles } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const ChatSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});

const languages: { value: Language; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'tw', label: 'Twi' },
  { value: 'ee', label: 'Ewe' },
  { value: 'ga', label: 'Ga' },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      sender: 'bot',
      text: "Hello! I'm Aura, your confidential health companion. How can I help you today? You can ask me about sexual health, relationships, or anything else on your mind.",
    },
  ]);
  const [isPending, startTransition] = useTransition();
  const [language, setLanguage] = useState<Language>('en');
  const [chatbotName, setChatbotName] = useState('Aura');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ChatSchema>>({
    resolver: zodResolver(ChatSchema),
    defaultValues: { message: '' },
  });

  const onSubmit = (values: z.infer<typeof ChatSchema>) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: values.message,
    };
    setMessages((prev) => [...prev, userMessage]);
    form.reset();

    startTransition(async () => {
      const formData = new FormData();
      formData.append('message', values.message);
      formData.append('language', language);
      const result = await handleChat(formData);

      if (result.success) {
        const botMessage: Message = {
          id: crypto.randomUUID(),
          sender: 'bot',
          text: result.response,
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.response,
        });
        setMessages((prev) => prev.slice(0, -1)); // remove user message on error
      }
    });
  };
  
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className="flex h-full max-h-[calc(100svh-4rem)] flex-col md:max-h-[calc(100svh-1rem)]">
      <header className="flex items-center justify-between border-b p-4">
        <h1 className="text-lg font-headline font-semibold">
          Chat with {chatbotName}
        </h1>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Personalize your chat experience.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="chatbot-name">Chatbot Name</Label>
                  <Input
                    id="chatbot-name"
                    value={chatbotName}
                    onChange={(e) => setChatbotName(e.target.value)}
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="language">Language</Label>
                  <Select
                    value={language}
                    onValueChange={(value) => setLanguage(value as Language)}
                  >
                    <SelectTrigger className="col-span-2 h-8">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </header>

      <ScrollArea className="flex-1" ref={scrollAreaRef}>
        <div className="space-y-6 p-4 md:p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3',
                message.sender === 'user' && 'flex-row-reverse'
              )}
            >
              <Avatar className="h-8 w-8 shrink-0">
                 {message.sender === 'bot' ? (
                  <>
                  <AvatarImage src="/placeholder.svg" alt={chatbotName} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Sparkles className="size-5 fill-current"/>
                  </AvatarFallback>
                  </>
                 ) : (
                  <AvatarFallback>U</AvatarFallback>
                 )}
              </Avatar>
              <div
                className={cn(
                  'max-w-[75%] rounded-lg p-3 text-sm shadow-sm',
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card'
                )}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          ))}
          {isPending && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                    <Sparkles className="size-5 fill-current"/>
                </AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] rounded-lg bg-card p-3 shadow-sm">
                <Skeleton className="h-4 w-10" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Type your message..." {...field} autoComplete="off"/>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="absolute right-10 top-1/2 -translate-y-1/2 h-8 w-8"
                        disabled
                      >
                        <Mic className="h-4 w-4" />
                        <span className="sr-only">Use voice</span>
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isPending}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
