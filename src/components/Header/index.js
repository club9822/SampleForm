import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Image,
  Platform,
  Keyboard,
} from 'react-native';

import {
  width,
  height,
  STATUS_BAR_HEIGHT_IOS,
} from '../../utils/windowDimensions';
import commonStyle from '../../styles/commonStyle';
import CardView from 'react-native-cardview';
function fn() {}

const ICON_WIDTH = width * 0.045;
const ICON_HEIGHT = height * 0.03;

/**
 * Common Header
 *
 *  @param {string } renderLeftType
 *
 *  @param {string}  renderLeft
 *
 *  @param {string} leftColor
 *
 *  @param {func} leftFn
 *
 *  @param {string} renderCenterType
 *
 *  @param {string} renderCenter
 *
 *  @param {func} centerFn
 *
 *  @param {string} centerColor
 *
 *  @param {string} renderRightType
 *
 *  @param {string} renderRight
 *
 *  @param {string} rightColor
 *
 *  @param {func} rightFn
 *
 *  @param {object} containerStyle
 *
 *
 *
 *
 */

// for creating a header with left /center / right components
const Header = ({
  renderLeftType = null,
  renderLeft = null,
  leftColor = '#fff',
  leftFn = fn,
  renderCenterType = null,
  renderCenter = null,
  centerColor = '#fff',
  centerFn = fn,
  centerWidth = '100%',
  renderRightType = null,
  renderRight = null,
  rightColor = '#fff',
  rightFn = fn,
  containerStyle = {},
  backgroundColor = 'transparent',
  scrollY = new Animated.Value(height * 0.04),
  showCenterAfterScroll = false,
}) => (
  <CardView
    style={[
      styles.container,
      {
        height: height * 0.07 + STATUS_BAR_HEIGHT_IOS,
        // + getStatusBarHeight()
      },
      containerStyle,
    ]}
    cardElevation={height*0.01}
    cardMaxElevation={height*0.01}
    cornerRadius={0}>
    {Platform.OS == 'ios' ? (
      <View
        style={{
          width,
          height: STATUS_BAR_HEIGHT_IOS,
          position: 'absolute',
          top: 0,
          backgroundColor: backgroundColor,
        }}
      />
    ) : null}

    <View
      style={[
        commonStyle.row,
        {
          padding: 0,
          margin: 0,
          paddingHorizontal: width * 0.05,
          position: 'relative',
        },
      ]}>
      <TouchableWithoutFeedback
        onPress={function() {
          Keyboard.dismiss();
          leftFn();
        }}
        hitSlop={{
          top: 30,
          bottom: 30,
          left: 30,
          right: 30,
        }}>
        <Animated.View
          style={[
            commonStyle.flex,
            {
              opacity: 1,
              // backgroundColor:'red'
            },
          ]}>
          {renderLeftType === 'Text' ? (
            <Text
              style={[
                commonStyle.textStyle,
                {
                  textAlign: 'left',
                  alignSelf: 'flex-start',
                  color: leftColor,
                },
                styles.font,
              ]}>
              {renderLeft}
            </Text>
          ) : renderLeftType == 'Icon' ? (
            <Icon name={renderLeft} style={styles.iconStyle} color={leftColor||'#fff'} size={width*0.08} />
          ) : null}
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={centerFn}>
        <Animated.View
          style={[
            commonStyle.flex,
            {
              flex: 2,
              opacity: showCenterAfterScroll
                ? scrollY.interpolate({
                    inputRange: [0, height * 0.1],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  })
                : 1,
            },
          ]}>
          {renderCenterType == 'Text' ? (
            <Text
              style={[
                commonStyle.textStyle,
                {
                  textAlign: 'center',
                  alignSelf: 'center',
                  overflow: 'hidden',
                  width: centerWidth,
                  color: centerColor,
                },
                styles.font,
              ]}
              numberOfLines={1}>
              {renderCenter}
            </Text>
          ) : renderCenterType == 'Icon' ? (
            <Icon name={renderCenter} size={width * 0.08} color={centerColor} />
          ) : null}
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={rightFn}>
        <Animated.View style={[commonStyle.flex, {}]}>
          {renderRightType == 'Text' ? (
            <Text
              style={[
                commonStyle.textStyle,
                {
                  textAlign: 'right',
                  alignSelf: 'flex-end',
                  color: rightColor,
                },
                styles.font,
              ]}>
              {renderRight}
            </Text>
          ) : renderRightType == 'Icon' ? (
            <Icon
              style={{alignSelf: 'flex-end'}}
              name={renderRight}
              size={width * 0.08}
              color={rightColor||'#fff'}
            />
          ) : renderRightType == 'Custom' ? (
            renderRight()
          ) : null}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  </CardView>
);
export default Header;
const styles = StyleSheet.create({
  container: {
    width,
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor:'#fff'
  },
  btn: {
    width: width * 0.1,
    height: height * 0.1,
    justifyContent: 'center',
  },
  font: {
    fontSize: width * 0.04,
  },
  iconStyle: {

    alignSelf: 'flex-start',
    marginLeft: width * 0.02,
  },
});
