import clsx from 'clsx';
import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
	base: 'font-body rounded-lg border',
	variants: {
		color: {
			primary: `text-neutral-lowest bg-neutral-highest border-neutral-highest 
      hover:text-brand-lowest hover:bg-brand-medium hover:border-brand-medium
      disabled:text-neutral-lowest disabled:bg-neutral-low disabled:border-neutral-low`,
			secondary: `text-neutral-higher bg-neutral-lower border-neutral-lower
      hover:text-brand-higher hover:bg-brand-lower hover:border-brand-lower
      disabled:text-neutral-lowest disabled:bg-neutral-low disabled:border-neutral-low`,
			tertiary: `text-neutral-higher bg-layout-elevation border-layout-border
      hover:text-neutral-higher hover:bg-layout-elevation hover:border-brand-medium
      disabled:text-neutral-low disabled:bg-layout-elevation disabled:border-neutral-low`,
			success: `text-success-high bg-success-lowest border-success-low
      hover:text-success-high hover:bg-success-lower hover:border-success-low
      disabled:text-success-low disabled:bg-success-lowest disabled:border-success-low`,
			warning: `text-warning-high bg-warning-lowest border-warning-low
      hover:text-warning-high hover:bg-warning-lower hover:border-warning-low
      disabled:text-warning-low disabled:bg-warning-lowest disabled:border-warning-low`,
			danger: `text-danger-high bg-danger-lowest border-danger-low
      hover:text-danger-high hover:bg-danger-lower hover:border-danger-low
      disabled:text-danger-low disabled:bg-danger-lowest disabled:border-danger-low`,
		},
		size: {
			small: 'px-3 py-1.5 text-xs',
			medium: 'px-4 py-2 text-sm',
			large: 'px-6 py-3 text-base',
			larger: 'px-8 py-4 text-lg',
		},
		ghost: {
			true: 'text-neutral-highest hover:text-brand-medium border-transparent bg-transparent hover:border-transparent hover:bg-transparent',
		},
	},

	defaultVariants: {
		size: 'medium',
		color: 'primary',
	},
});

type ButtonProps = VariantProps<typeof button> & {
	className?: string;
	disabled?: boolean;
	children: React.ReactNode;
};

export const Button = ({ children, className, disabled, color, size, ghost }: ButtonProps) => {
	const classes = clsx(
		className,
		button({
			color,
			size,
			ghost,
		})
	);
	return (
		<button className={classes} disabled={disabled}>
			{children}
		</button>
	);
};
