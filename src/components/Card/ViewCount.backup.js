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

export default class ViewCount extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewCount: this.props.viewCount
    };
  }
  //   UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  // if(this.props.viewCount !== nextProps.viewCount ||this.state.viewCount !==nextState.viewCount)
  //   }
  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any
  ): boolean {
    if (
      this.props.viewCount !== nextProps.viewCount ||
      this.state.viewCount !== nextState.viewCount
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { rightItemColor } = this.props;
     if(this.props.index==5){
       alert(this.props.viewCount)
     }
    return (
      <Text
        style={[
          commonStyle.textStyle,
          {
            fontSize: moderateScale(11),
            width: scale(60),
            overflow: "hidden",
            textAlign: "left",
            color: rightItemColor
          }
        ]}
        numberOfLines={1}
      >
        {this.props.viewCount}
      </Text>
    );
  }
}
