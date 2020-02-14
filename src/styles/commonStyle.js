import {StyleSheet, Platform} from 'react-native';
import {heigth, width} from '../utils/windowDimensions';

/**
 *
 * General style to use
 *
 */
const styles = StyleSheet.create({
  textStyle: {
    fontSize: width * 0.038,
    writingDirection: 'rtl',
    fontFamily: 'IRANSansMobile(FaNum)',
    textAlign: Platform.OS === 'ios' ? 'justify' : 'right',
    textAlignVertical: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
