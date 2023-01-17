import { styled } from 'stitches.config';

type Props = {
  width?: string,
  height?: string,
  color?: string,
  radius?: string,
  rotate?: number,
  css?: any,
}

const Puzzle = ({
  height = '10px',
  width = '10px',
  color = 'green',
  radius = '5px',
  rotate = 0,
  css,
}: Props) => {
  const Items = styled('span', {
    width,
    height,
    backgroundColor: color,
    display: 'flex',
    position: 'absolute',
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    transform: `rotate(${rotate}deg)`,
    '&:after, &:before': {
      content: '',
      position: 'absolute',

      backgroundColor: 'transparent',
      right: `calc(-${radius} * 2)`,
      bottom: '0px',
      height: radius,
      width: `calc(${radius} * 2)`,
    },
    '&:before': {
      left: `calc(-${radius} * 2)`,
      borderBottomRightRadius: radius,
      boxShadow: `${radius} 0 0 0 ${color}`,
    },
    '&:after': {
      right: `calc(-${radius} * 2)`,
      boxShadow: `-${radius} 0 0 0 ${color}`,
      borderBottomLeftRadius: radius,
    },
    ...css,
  });

  return (
    <Items />
  );
};

export default Puzzle;
