import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  headerStyle: ViewStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  headerStyle: {flexDirection: 'row'},
});

export default styles;
