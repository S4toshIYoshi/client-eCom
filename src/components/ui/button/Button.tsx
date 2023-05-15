import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'dark' | 'light'
	className?: string
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant = 'dark',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl font-semibold shadow px-10 py-2',
				{
					'text-secondary bg-primary': variant === 'dark',
					'text-primary bg-white': variant === 'light'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
