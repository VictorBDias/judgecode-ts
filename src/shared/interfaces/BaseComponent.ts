import { StyleProp, ViewStyle } from 'react-native';

export interface BaseComponent {
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
