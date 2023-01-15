import { IconeUser } from '@core/assets/svg/icones';

import { Avatars } from './style';

type Props = {
  color?: 'orange' | 'violet' | undefined
  radius?: 'sm' | 'xl' | undefined,
  size?: 'sm' | 'md' | 'xl' | undefined,
}

export default function Button({
  color = undefined,
  size = 'md',
  radius = 'sm',
}: Props) {
  return (
    <Avatars
      color={color}
      radius={radius}
      size={size}
    >
      <IconeUser />
    </Avatars>
  );
}
