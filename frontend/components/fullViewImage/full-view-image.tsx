import {ImageBackground} from 'react-native';
import {styles} from './full-view-image.style';
import {ReactNode} from 'react';

interface FullScreenImageProps {
  children: ReactNode;
}

export const FullScreenImage = ({children}: FullScreenImageProps) => {
  return (
    <ImageBackground
      source={require('../../assets/img/mountains.jpg')}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};
