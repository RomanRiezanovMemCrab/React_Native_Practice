import React, {memo, useMemo} from 'react';
import {Text} from 'react-native';

import {styles} from './typography.style';

type Props = {
  children: React.ReactNode;
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'bold'
    | 'small'
    | 'placeholder'
    | 'descriptor'
    | 'button';
  weight?: 'regular' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: 'baseColor' | 'secondaryColor';
  numberOfLines?: number;
};

export const P = memo((props: Props) => {
  const {
    children,
    type = 'p',
    align = 'left',
    numberOfLines,
    color = 'baseColor',
    weight = 'regular',
  } = props;

  const textStyle = useMemo(
    () => [
      styles.text,
      styles[type],
      styles[align],
      styles[color],
      styles[weight],
    ],
    [align, color, type, weight],
  );

  return (
    <Text numberOfLines={numberOfLines} style={textStyle}>
      {children}
    </Text>
  );
});
