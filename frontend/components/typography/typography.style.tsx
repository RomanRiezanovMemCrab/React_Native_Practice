import {StyleSheet} from 'react-native';

import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
  },
  p: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  small: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  h1: {
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
  },
  h2: {
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
  },
  h3: {
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
  },
  h4: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
  },
  h5: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  h6: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  descriptor: {
    fontSize: 15,
    fontFamily: 'Montserrat-Redular',
  },
  placeholder: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.white,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  bold: {
    fontWeight: '600',
  },
  regular: {
    fontWeight: '400',
  },
  baseColor: {
    color: COLORS.white,
  },
  secondaryColor: {
    color: COLORS.black,
  },
} as const);
