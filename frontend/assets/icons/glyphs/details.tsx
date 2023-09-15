import Svg, {G, Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../../../theme/theme';

function DetailsIcon({
  width = 24,
  height = 24,
  fill = COLORS.black,
  ...props
}: SvgProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" {...props}>
      <G fill="none" fill-rule="evenodd">
        <G fill={fill} transform="translate(64.000000, 64.000000)">
          <Path d="M384,64 L384,384 L64,384 L64,64 L384,64 Z M341.333333,106.666667 L106.666667,106.666667 L106.666667,341.333333 L341.333333,341.333333 L341.333333,106.666667 Z M320,1.42108547e-14 L320,42.6666667 L42.666,42.666 L42.6666667,320 L1.42108547e-14,320 L1.42108547e-14,1.42108547e-14 L320,1.42108547e-14 Z M298.666667,234.666667 L298.666667,277.333333 L149.333333,277.333333 L149.333333,234.666667 L298.666667,234.666667 Z M298.666667,149.333333 L298.666667,192 L149.333333,192 L149.333333,149.333333 L298.666667,149.333333 Z"></Path>
        </G>
      </G>
    </Svg>
  );
}

export default DetailsIcon;
