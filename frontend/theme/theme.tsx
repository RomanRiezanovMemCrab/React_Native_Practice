import {Dimensions, Platform} from 'react-native';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';
import {ROUTES} from '../navigation/navigator-config';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const SMALL_DEVICE = DEVICE_WIDTH < 380;
export const BIG_DEVICE = DEVICE_WIDTH > 380;
export const LARGE_DEVICE = DEVICE_WIDTH > 580;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const HIT_SLOP = {top: 10, bottom: 10, left: 10, right: 10};
export const EVENT_TROTTLE = 16;
export const KEYBOARD_BEHIVATOR = Platform.OS === 'ios' ? 'padding' : 'height';
export const AUTH_TOKEN_NAME = 'user_token';
export const IS_NOTCH = hasNotch() || hasDynamicIsland();
export const KEYBOARD_VERTICAL_OFFSET = IS_NOTCH
  ? (DEVICE_HEIGHT / 100) * 10.8
  : (DEVICE_HEIGHT / 100) * 9;
export const MAX_WIDTH_DEVICE = 414;
export const HORIZONTAL_SCROLL_PADDING = {paddingRight: 42};

export const tabIconNames = {
  [ROUTES.PROFILE]: 'user',
  [ROUTES.DETAILS]: 'info',
  [ROUTES.DRAWER]: 'star',
  [ROUTES.MODALS]: 'list',
};

export const COLORS = {
  // primary & accent
  primary: '#187E83',
  accentBlue: '#0F556E',
  accentYellow: '#F4C430',
  secondary: '#AB2325',
  // main colors
  white: '#fff',
  black: '#000',
  blue: '#2FC0FF',
  dark: '#0D0D0D',
  greenLight: '#21A453',
  // additional
  additional: '#AB2325',
  additionalRed: '#CB6928',
  additionalYellow: '#E9D7A5',
  // text colors
  title: '#09252E',
  paragraph: '#3A5158',
  descriptor: '#6E8A95',
  placeholder: '#6E8A95',
  // divider
  divider20: 'rgba(9, 37, 46, 0.2)',
  dividerStroke: 'rgba(9, 37, 46, 0.1)',
  // background
  whiteBG: 'rgba(255, 255, 255, 0.2)',
  blueBG: '#D6EAF1',
  greenBG: '#D7F1EE',
  listBG: '#D6F1EE',
  stroke: '#E6E9EA',
  // success
  successText: '#2F9461',
  successBorder: '#B8F1D2',
  successBG: '#EFFDF6',
  // error
  errorText: '#D44333',
  errorBorder: '#ECACA5',
  errorBG: '#FBEFEE',
  errorInput: '#F44336',
  // warning
  warningText: '#EF9D20',
  warningBorder: '#F5DD99',
  warningBG: '#FFECD0',
  // info
  infoText: '#1283B1',
  infoBorder: '#8DD1ED',
  infoBG: '#DFF6FF',
} as const;
