"use client";

import { cn } from "@/lib/utils";

export function BotIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-bot", className)}
      {...props}
    >
      <path d="M12 8V4H8V8H4v4h4v4h4v4h4v-4h4V12h-4z" />
      <path d="M8 12h8" />
      <rect width="4" height="2" x="10" y="2" />
      <circle cx="7" cy="15" r="1" />
      <circle cx="17" cy="15" r="1" />
    </svg>
  );
}
