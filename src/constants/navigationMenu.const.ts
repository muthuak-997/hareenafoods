import { cva } from "class-variance-authority";

export const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50"
)