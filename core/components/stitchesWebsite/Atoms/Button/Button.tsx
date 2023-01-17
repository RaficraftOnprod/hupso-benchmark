import { Buttons } from './style';

type Props = {
  children: JSX.Element | string,
  disabled?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  outlined?: boolean
  radius?: 'sm' | 'xl' | undefined
  size?: 'sm' | 'xl' | undefined,
  type?: 'button' | 'submit' | 'reset',
  color?: 'orange' | 'violet' | 'green' | undefined
}

export default function Button({
  children,
  disabled = false,
  onClick = (e) => { console.warn(e); },
  onKeyUp = (e) => { console.warn(e); },
  outlined = false,
  radius = undefined,
  size = 'sm',
  type = 'button',
  color = undefined,
}: Props) {
  return (
    <Buttons
      type={type}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={disabled ? (event) => { event.preventDefault(); } : onClick}
      onKeyUp={disabled ? (event) => { event.preventDefault(); } : onKeyUp}
      color={color}
      outlined={outlined}
      size={size}
      radius={radius}
    >
      {children}
    </Buttons>
  );
}
