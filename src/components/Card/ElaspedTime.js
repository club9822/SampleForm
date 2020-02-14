import React from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";

import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import commonStyle from "../../../screens/Styles/commonStyle";
import { calculateElapsedTime } from "../../../utils/calculateElapsedTime";

export default class ElapsedTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: calculateElapsedTime(this.props.elapsedTime)
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (this.props.elapsedTime !== nextProps.elapsedTime) {
      this.setState({
        elapsedTime: calculateElapsedTime(nextProps.elapsedTime)
      });
    }
  }
  render() {
    const { rightItemColor, style } = this.props;
    return (
      <Text
        numberOfLines={1}
        style={[
          commonStyle.textStyle,
          {
            fontSize: 11,
            width: scale(60),
            overflow: "hidden",
            textAlign: "left",
            color: rightItemColor
          },
          style
        ]}
      >
        {this.state.elapsedTime}
      </Text>
    );
  }
}
