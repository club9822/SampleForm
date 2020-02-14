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
import Placeholder, { Line as PLine, Media } from "rn-placeholder";

import { width, height } from "../../../../utils/windowDimensions";
import HTMLView from "react-native-htmlview";
import { htmlContentStylesheet, LINE_HEIGHT } from "../../../../styles/index";
import { commonApiRequestActions } from "../../../../actions/actions";
import { SCREENS } from "../../../../constants/screens";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { FONT } from "../../../../constants/all";
import commonStyles from "../../../../screens/Styles/commonStyle";

/**
 * Left Container in News Item
 *
 *
 * @param {number} index required
 *
 * @param {boolean} isReady required
 *
 * @param  {func} onPress required
 *
 */

class LeftCont extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.item.text
      // text: `${this.props.item.text
      //   .replace(/<\s*(p+).*?>/g, "<$1>")
      //   .replace(/<(\/)?p>/g, "")}`
    };
    this.renderNode = this.renderNode.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  renderNode(node, index, siblings, parent, defaultRenderer) {
    // console.log(node)
    if (node.name == "img") {
      return null;
    }
    // if (node.name == "text") {

    //   return(<Text style={[commonStyles.textStyle,{
    //     color:'#BCBCBC'
    //   }]}>
    //     {node.data}

    //   </Text>)
    // }
  }

  onPress() {
    const { title, id } = this.props.item;
    if (title && title != "") {
      Navigation.push(this.props.componentId, {
        component: {
          id: SCREENS.cardlist_detail,
          name: SCREENS.cardlist_detail,
          options: {
            layout: {
              backgroundColor: "transparent"
            },
            sideMenu: {
              left: {
                enabled: false,
                visible: false
              }
            },
            statusBar: {
              backgroundColor: this.props.currentSection.sectionStyle
                .backgroundColor,
              style: "light"
            }
          },
          passProps: {
            navigationProps: {
              currentItem: this.props.item,
              currentSection: this.props.currentSection,
              updateView:this.props.updateView,
              index: this.props.index
            }
          }
        }
      });


    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.isReady != nextProps.isReady ||
      this.props.item.text != nextProps.item.text || this.props.item.title != nextProps.item.title || this.state.text != nextState.text
    ) {
      return true;
    }
    return false;
  }
  render() {
    const {
      item: { title },
      index,
      isReady,
      titleColor,
      descriptionColor
    } = this.props;

    // if(index==0){

    //   console.log('log:: left component')

    // }

    return (
      <Placeholder
        isReady={isReady}
        animation="fade"
        whenReadyRender={() => {
          return (<TouchableWithoutFeedback
              onLongPress={this.onPress}
              onPress={this.onPress}
            >
              <View
                style={[
                  {
                    width: scale(235),
                    alignItems: "flex-end",
                    paddingLeft: scale(20),
                    paddingRight: scale(20),
                    paddingTop: height * (index == 0 ? 0.08 : 0.015),
                    marginBottom: height * 0.01
                  }
                ]}
              >
                <Text
                  numberOfLines={2}
                  style={{
                    color: titleColor,
                    overflow: "hidden",
                    fontSize: 14,
                    textAlign: Platform.select({
                      ios: "justify",
                      android: "right"
                    }),
                    writingDirection:"rtl",alignSelf:"flex-end",
                    paddingRight: scale(5),
                    marginBottom: height * 0.01,
                    fontFamily: FONT.B_YEKAN
                  }}
                >
                  {title}
                </Text>

                <HTMLView
                  value={this.props.item.text}
                  nodeComponentProps={{ numberOfLines: 4 }}
                  addLineBreaks={false}
                  rootComponentProps={{
                    numberOfLines: 4,
                    maxHeight: LINE_HEIGHT * 4,
                    overflow: "hidden"
                    // color:'#BCBCBC',backgroundColor:'transparent'
                  }}
                  renderNode={this.renderNode}
                  stylesheet={htmlContentStylesheet}
                />



                 <View style={{
                    width: scale(45),
                    height: verticalScale(35),
                    alignSelf: "flex-start",
                    marginTop: height * 0.01
                  }}
                >
                  <Text
                    style={{
                      color: "#B2B2B2",
                      fontSize: 12,
                      alignSelf: "flex-start",
                      fontFamily: FONT.B_YEKAN
                      // textAlign: "left",
                    }}
                  >
                    ادامه خبر
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      >
        <PLine
          width="70%"
          style={{
            marginRight: width * 0.1,
            marginTop: 50,
            height: 15,
            alignSelf: "flex-end"
          }}
        />
        <PLine
          width="70%"
          style={{
            marginRight: width * 0.1,
            height: 15,
            marginTop: 5,
            alignSelf: "flex-end"
          }}
        />
        <PLine
          width="45%"
          style={{
            marginRight: width * 0.1,
            height: 15,
            marginBottom: 50,
            alignSelf: "flex-end"
          }}
        />
      </Placeholder>
    );
  }
}

export default connect(
  null,
  { commonApiRequestActions }
)(LeftCont);
