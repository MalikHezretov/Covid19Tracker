import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  itemStyle: TextStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#c8e1ff',
    padding: 4,
    flexDirection: 'row',
  },
  itemStyle: {flexShrink: 1, fontSize: 12},
});

export default styles;
