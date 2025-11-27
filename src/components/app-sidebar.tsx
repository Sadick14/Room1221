'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Home,
  Hospital,
  LogOut,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/chat', label: 'Chat', icon: MessageSquare },
  { href: '/referral', label: 'Find a Clinic', icon: Hospital },
  { href: '/knowledge', label: 'Knowledge Base', icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();
  
  const panicExit = () => {
    if (typeof window !== 'undefined') {
        window.location.href = 'https://www.google.com';
    }
  }

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="shrink-0 bg-primary/10 text-primary hover:bg-primary/20" asChild>
            <Link href="/" aria-label="Home">
                <Sparkles className="size-5 fill-current" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <h2 className="text-base font-bold tracking-tight">Aura</h2>
            <p className="text-xs text-muted-foreground">Your SRH Companion</p>
          </div>
          {isMobile && <div className="ml-auto">
            <SidebarTrigger />
            </div>}
        </div>
      </SidebarHeader>
      <SidebarMenu className="flex-1 px-4">
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <SidebarMenuButton
                isActive={pathname === item.href}
                tooltip={{ children: item.label }}
              >
                <item.icon />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarFooter className="p-4">
        <Button variant="destructive" onClick={panicExit} className="w-full justify-start gap-2">
          <LogOut />
          <span className={cn('group-data-[collapsible=icon]:hidden')}>
            Panic Exit
          </span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
