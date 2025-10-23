"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-gray-900",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-blue-600 group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }