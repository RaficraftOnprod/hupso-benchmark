import Stitches from '@stitches/react/types/stitches'
import { Buttons } from './style'

type Props = {
  variant?: 'primary' | 'violet' | undefined
  size?: 'sm' | 'xl' | undefined,
  disabled?: boolean,
  children: JSX.Element | string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  type?: "button" | "submit" | "reset",
  outlined?: boolean
  radius: 'sm' | 'xl' | undefined
}

export default function Button({
  disabled = false,
  children,
  onClick = () => { },
  onKeyUp = () => { },
  type = "button",
  variant = undefined,
  outlined = false,
  size = 'sm',
  radius = undefined

}: Props) {
  return (
    <Buttons
      type={type}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={disabled ? (event) => { event.preventDefault(); } : onClick}
      onKeyUp={disabled ? (event) => { event.preventDefault(); } : onKeyUp}
      variant={variant}
      outlined={outlined}
      size={size}
      radius={radius}
    >
      {children}
    </Buttons>
  )
}