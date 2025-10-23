// src/components/ui/textarea.tsx

import * as React from "react"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={
        "flex min-h-20 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:ring-offset-gray-900 dark:placeholder:text-gray-400 " +
        (className || '')
      }
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }