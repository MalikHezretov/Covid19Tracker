import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  itemStyle: TextStyle;
  textButtonStyle: TextStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 6,
  },
  itemStyle: {
    flexShrink: 1,
    fontSize: 12,
    marginRight: 12,
    width: 80,
    marginTop: 20,
  },
  textButtonStyle: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 6,
    marginTop: 12,
  },
});

export default styles;
