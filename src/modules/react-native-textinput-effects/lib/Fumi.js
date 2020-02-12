import React from "react";
import PropTypes from "prop-types";
import {
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  I18nManager,
  StyleSheet,
  Text
} from "react-native";

import BaseInput from "./BaseInput";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const PADDING = verticalScale(20);
const HEIGTH_SCALE = verticalScale(65);
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";

export default class Fumi extends BaseInput {
  static propTypes = {
    /*
     * This is the icon component you are importing from react-native-vector-icons.
     * import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
     * iconClass={FontAwesomeIcon}
     */
    iconClass: PropTypes.func,
    /*
     * Passed to react-native-vector-icons library as name prop
     */
    iconName: PropTypes.string,
    /*
     * Passed to react-native-vector-icons library as color prop.
     * Also used as textInput color.
     */
    iconColor: PropTypes.string,
    /*
     * Passed to react-native-vector-icons library as size prop.
     */
    iconSize: PropTypes.number,

    passiveIconColor: PropTypes.string,
    height: PropTypes.number
  };

  static defaultProps = {
    height: verticalScale(65),
    iconColor: "#3F5CA6",
    iconSize: scale(24),
    passiveIconColor: "#a3a3a3",
    animationDuration: 300
  };
  refHandler = ref => (this.iconRef = ref);
  _margin_dir = ({ value }) => {
    // if(I18nManager.isRTL)return {marginLeft:value,paddingLeft: 0}
    return { marginRight: value };
  };
  _direction = ({ value }) => {
    // if(I18nManager.isRTL)return {left:value}
    return { right: value };
  };

  renderExtra = () => {
    const TEXT = () => {
      switch (this.props.label) {
        case "شماره شبا":
          return (
            <Text style={[styles.label,{ fontSize: moderateScale(12), color: "#858585" }]}>
              IR
            </Text>
          );
        case "موجودی اولیه":
          return (
            <Text style={[styles.label,{ fontSize: moderateScale(11), color: "#858585" }]}>
              ریال
            </Text>
          );
        default:
          return null;
      }
    };

    return (
      <View
        style={{
          left: 1,
          position: "absolute",
          bottom: verticalScale(10)
        }}
      >
        <TEXT />
      </View>
    );
  };

  render() {
    const {
      iconColor,
      iconSize,
      passiveIconColor,
      iconName,
      label,
      style: containerStyle,
      inputStyle,
      // height: inputHeight,
      labelStyle
    } = this.props;
    const inputHeight = HEIGTH_SCALE;
    const { focusedAnim, value } = this.state;
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    const ANIM_PATH = PADDING + inputHeight;
    const NEGATIVE_ANIM_PATH = ANIM_PATH * -1;

    return (
      <Animatable.View
        ref={this.refHandler}
        style={[styles.container, containerStyle]}
        onLayout={this._onLayout}
      >
        <TouchableWithoutFeedback onPress={this.focus}>
          <AnimatedIcon
            name={iconName}
            color={iconColor}
            size={iconSize}
            style={{
              position: "absolute",
              ...this._direction({ value: PADDING }),

              top: focusedAnim.interpolate({
                inputRange: [0, 0.5, 0.51, 0.7, 1],
                outputRange: [
                  verticalScale(15),
                  ANIM_PATH,
                  NEGATIVE_ANIM_PATH,
                  NEGATIVE_ANIM_PATH,
                  verticalScale(15)
                ]
              }),
              color: focusedAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [
                  this.props.shake ? "red" : passiveIconColor,
                  iconColor,
                  this.props.shake ? "red" : iconColor
                ]
              }),
              height: verticalScale(30),
              minHeight: verticalScale(30),
              maxHeight: verticalScale(30),
              // backgroundColor:'red',
              justifyContent: "center",
              alignItems: "center"
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={[
            styles.separator,
            {
              height: inputHeight,
              ...this._direction({ value: scale(50) })
            }
          ]}
        />
        <TouchableWithoutFeedback onPress={this.focus}>
          <Animated.View
            style={{
              position: "absolute",
              ...this._direction({ value: scale(65) }),
              height: inputHeight,
              top: focusedAnim.interpolate({
                inputRange: [0, 0.5, 0.51, 0.7, 1],
                outputRange: [
                  verticalScale(17.5),
                  ANIM_PATH,
                  NEGATIVE_ANIM_PATH,
                  NEGATIVE_ANIM_PATH,
                  0
                ]
              })
            }}
          >
            <Animated.Text
              style={[
                styles.label,
                {
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 0.7, 0.71, 1],
                    outputRange: [
                      moderateScale(12),
                      moderateScale(12),
                      moderateScale(11),
                      moderateScale(11)
                    ]
                  }),
                  color: focusedAnim.interpolate({
                    inputRange: [0, 0.7],
                    outputRange: ["#949494", "#a3a3a3"]
                  })
                  // backgroundColor:'#C6F0B6'
                }
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        {/* <ScrollView
       showsVerticalScrollIndicator={false}
       scrollEnabled={false}   >  */}

        <TextInput
          ref="input"
          {...this.props}
          style={[
            styles.textInput,
            {
              ...this._margin_dir({
                value: scale(this.props.textAlign == "left" ? 50 : 62.5)
              }),

              marginLeft:
                this.props.textAlign == "left"
                  ? scale(this.props.label == "شماره شبا" ? 12 : 20)
                  : 0,
              color: "#737373"
            },
            inputStyle,
            { fontSize: moderateScale(12) }
          ]}
          selectionColor="#989898"
          // value={this.renderValue(value)}
          value={value}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          onChange={this._onChange}
          underlineColorAndroid={"transparent"}
        />

        {/* </ScrollView>   */}
        {this.renderExtra()}
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingTop: 0,
    height: HEIGTH_SCALE,
    width: scale(240),
    backgroundColor: "#fff",
    alignSelf: "center",
    marginVertical: verticalScale(2.5)
  },
  label: {
    fontFamily: "IRANSansMobile(FaNum)",
    textAlignVertical: "center",
    height: verticalScale(30),
    minHeight: verticalScale(30),
    maxHeight: verticalScale(30)
  },
  textInput: {
    backgroundColor: "transparent",
    fontFamily: "IRANSansMobile(FaNum)",
    color: "#737373",
    textAlign: "right",
    height: verticalScale(50),
    minHeight: verticalScale(50),
    maxHeight: verticalScale(50),
    textAlignVertical: "center",
    marginTop: verticalScale(20)
  },
  separator: {
    position: "absolute",
    width: 1.7,
    backgroundColor: "#f0f0f0"
  }
});
