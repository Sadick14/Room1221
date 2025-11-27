'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChatInterface } from '@/components/chat-interface';
import { MessageSquare, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AnimatePresence, motion } from 'framer-motion';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
          <span className="sr-only">{isOpen ? 'Close chat' : 'Open chat'}</span>
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 z-50"
          >
            <Card className="w-[350px] h-[500px] shadow-2xl">
                <ChatInterface />
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
