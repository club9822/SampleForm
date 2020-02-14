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
import { height } from "../../../utils/windowDimensions";

export default class CardIcon extends React.PureComponent {
  // shouldComponentUpdate(
  //   nextProps: Readonly<P>,
  //   nextState: Readonly<S>,
  //   nextContext: any
  // ): boolean {
  //   return false;
  // }

  render() {
    return (
      <Image
        // source={{uri: "visible_filled"}}
        source={this.props.source}
        style={[
          {
            width: scale(15),
            height: scale(15),
            marginRight: scale(10),
            resizeMode: "contain",
            marginTop: height * 0.005
          },
          this.props.style
        ]}
      />
    );
  }
}
