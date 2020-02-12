import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {DotIndicator} from 'react-native-indicators';

import {width, height, isIphoneX} from '../../utils/windowDimensions';

/**
 * Spinner Button
 *
 *
 * @param {String} label required
 *
 *@param {Boolean} showBigButtonSpinner required
 *
 * @param {Function} onPress required
 *
 * @param {Object} containerStyle optional
 *
 *
 *
 */

class SpinnerButton extends React.PureComponent {
  static defaultProps = {
    showSpinner: false,
    fontStyle: {},
    containerStyle: {},
    label: '',
    onPress: () => {},
    disabled: false,
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.cont, this.props.containerStyle || {}]}
        activeOpacity={this.props.activeOpacity || 0.6}
        disabled={this.props.disabled || false}>
        <View style={styles.flex}>
          {this.props.showSpinner == false ? (
            <Text
              style={[
                {
                  fontFamily:'IRANSansMobile(FaNum)',
                  textAlign: 'center',
                  fontSize: moderateScale(14),
                  color: '#01111A',
                },
                this.props.fontStyle,
              ]}>
              {this.props.label}
            </Text>
          ) : (
            <DotIndicator color={'#ffffff'} count={4} size={scale(5)} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default SpinnerButton;

const styles = StyleSheet.create({
  cont: {
    marginVertical: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02cdfc',
    width: '80%',
    height: Platform.select({
      ios: isIphoneX ? verticalScale(40) : verticalScale(48),
      android: verticalScale(48),
    }),
    borderRadius: scale(15),
    alignSelf: 'center',
    borderColor: '#665EFF',
    borderWidth: 0.1,
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
