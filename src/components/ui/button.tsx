import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
        outline: 'border-2 border-gray-200 bg-white hover:border-primary-500 hover:text-primary-500',
        ghost: 'hover:bg-gray-100',
        accent: 'bg-accent-500 text-white hover:bg-accent-600',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { loading?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, loading, children, disabled, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} disabled={disabled || loading} {...props}>
      {loading && <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>}
      {children}
    </button>
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }