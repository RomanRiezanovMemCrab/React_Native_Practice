import {StyleSheet} from 'react-native';

import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  text: {
    color: COLORS.title,
  },
  p: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.title,
  },
  small: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.paragraph,
  },
  h1: {
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.title,
  },
  h2: {
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.title,
  },
  h3: {
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.title,
  },
  h4: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.title,
  },
  h5: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.title,
  },
  h6: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.title,
  },
  descriptor: {
    fontSize: 15,
    fontFamily: 'Montserrat-Redular',
    color: COLORS.descriptor,
  },
  placeholder: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.placeholder,
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
    color: COLORS.title,
  },
  secondaryColor: {
    color: COLORS.white,
  },
} as const);
