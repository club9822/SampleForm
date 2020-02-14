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
import Realm from "../../../config/Realm";
import { capitalize } from "../../../utils/helpers";
import { SCREENS } from "../../../constants/screens";

class ViewCount extends React.Component {
  static defaultProps = {
    schema: ""
  };
  constructor(props) {
    super(props);
    this.state = {
      viewCount: this.props.viewCount || "0"
    };

    this.getViewCount = this.getViewCount.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (
      this.props.viewCount !== nextProps.viewCount ||
      this.state.viewCount !== nextState.viewCount ||
      this.props.itemId !== nextProps.itemId
    ) {
      this.getViewCount();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.viewCount !== nextProps.viewCount ||
      this.state.viewCount !== nextState.viewCount
    ) {
      return true;
    }
    return false;
  }
  getViewCount() {
    const { schema, itemId, index } = this.props;
    if (this.props.componentId === SCREENS.cardlist_detail) {
      if (schema === "news") {
        this.props
          .commonApiRequestActions({
            type: "news/x/view-news/",
            payload: {
              schema: schema,
              schemaId: itemId
            },
            condition: {}
          })
          .then(viewCount => {
            //update ui if view count updated

            if (viewCount && this._mounted) {
              this.setState({
                viewCount: viewCount.toString()
              });
            }
          })
          .catch(err => {});
      } else {
        this.props
          .commonApiRequestActions({
            type: "view-xxx/",
            payload: {
              schema: schema,
              schemaId: itemId
            },
            condition: {}
          })
          .then(viewCount => {
            //update ui if view count updated

            if (viewCount && this._mounted) {
              this.setState({
                viewCount: viewCount.toString()
              });
            }
          })
          .catch(err => {});
      }
    } else if (
      this.props.componentId === SCREENS.cardlist_type0 &&
      schema === "sos"
    ) {
      // Realm().then(realm => {
      //   let viewCountObject = realm.objectForPrimaryKey(
      //     `${capitalize(schema)}ViewCount`,
      //     parseInt(itemId)
      //   );
      //   if (viewCountObject !== undefined && this._mounted) {
      //     this.setState({
      //       viewCount: viewCountObject.viewCount.toString()
      //     });
      //   }
      // });
    }
  }

  componentDidMount() {
    this._mounted = true;
    this.getViewCount();
  }
  componentWillUnMount() {
    this._mounted = false;
  }

  render() {
    const { rightItemColor, style } = this.props;
    // if(this.props.index==5){
    //   // alert(this.props.viewCount)
    // }
     if(__DEV__){
       console.log('------item',this.state,this.props)
     }
    return (
      <Text
        style={[
          commonStyle.textStyle,
          {
            fontSize: moderateScale(11),
            // width: scale(60),
            overflow: "hidden",
            textAlign: "left",
            color: rightItemColor
          },
          style
        ]}
        numberOfLines={1}
      >
        {this.state.viewCount}
      </Text>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

ViewCount.defaultProps = {
  schema: "",
  componentId: ""
};
export default connect(
  mapStateToProps,
  { commonApiRequestActions }
)(ViewCount);
