import {View} from 'react-native';
import {styles} from './user-info.styles';
import {P} from '../typography/typography';
import {useMemo} from 'react';
import AvatarIcon from '../../assets/icons/avatar-icon.svg';
import {COLORS} from '../../theme/theme';

type AvatarProps = {
  size?: 'small' | 'medium' | 'large';
  firstName?: string;
  lastName?: string;
  description?: string;
};

export function UserInfo({
  size = 'medium',
  firstName,
  lastName,
  description,
}: AvatarProps) {
  const avatarIconSize = useMemo(() => {
    switch (size) {
      case 'small':
        return 24;
      case 'medium':
        return 40;
      case 'large':
        return 80;
      default:
        return 80;
    }
  }, [size]);

  return (
    <View style={styles.container}>
      <AvatarIcon
        width={avatarIconSize}
        height={avatarIconSize}
        fill={COLORS.white}
      />
      <P>
        {firstName} {lastName}
      </P>
      <P type="small">{description}</P>
    </View>
  );
}
