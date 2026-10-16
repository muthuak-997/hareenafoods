import { cva } from "class-variance-authority";

export const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex w-max items-center justify-center text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50"
)