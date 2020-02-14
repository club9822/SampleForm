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
import commonStyle from "../../../../screens/Styles/commonStyle";

import Svg, { Line } from "react-native-svg";
import Placeholder, { Line as PLine, Media } from "rn-placeholder";

import { calculateElapsedTime } from "../../../../utils/calculateElapsedTime";
import { width, height } from "../../../../utils/windowDimensions"; 
 
import LeftCont from "./leftCont";

const COLOR = "#ffffff";

/**
 * Circle in News Item
 *
 *
 * @param {number} index required
 *
 */

class Circle extends React.PureComponent {
  static defaultProps = {
    circle: "0,0,0",
    index: 0,
    textIcon: ""
  };
  render() {
    const { circleColor, index, textIcon } = this.props;

    return (
      <View
        style={[
          styles.circle,
          {
            top: height * (index == 0 ? 0.06 : 0.015),
            backgroundColor: `rgba(${circleColor},0.1)`,
            transform: [
              {
                scale: index == 0 ? 2 : 1
              }
            ]
          }
        ]}
      >
        <View
          style={{
            backgroundColor: `rgba(${circleColor},1)`,
            borderRadius: scale(13),
            width: scale(26),
            height: scale(26),
            justifyContent: "center",
            alignItems: "center",
            borderColor: `rgba(${circleColor},0.4)`,
            borderWidth: scale(2)
          }}
        >
          {index == 0 ? (
            <Image
              source={textIcon}
              style={{
                width: scale(18),
                height: scale(18),
                resizeMode: "contain"
              }}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

/**
 * Right Container in News Item
 *
 * @param {object} item required
 * animated
 *
 * @param {number} index required
 *
 */

class RightCont extends React.Component {
  static defaultProps = {
    publishDate: "",
    created: "",
    isReady: true
  };

  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: calculateElapsedTime(
        this.props.publishDate ? this.props.publishDate : this.props.created
      )
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (
      this.props.publishDate != nextProps.publishDate ||
      this.props.created != nextProps.created
    ) {
      this.setState({
        elapsedTime: calculateElapsedTime(
          nextProps.publishDate ? nextProps.publishDate : nextProps.created
        )
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.publishDate != nextProps.publishDate ||
      this.props.created != nextProps.created ||
      this.props.text != nextProps.text||this.props.isReady!=nextProps.isReady
    ) {
      return true;
    }
    return false;
  }
  render() {
    const {
      organizationName,
      viewCount,
      index,
      isReady,
      rightItemColor
    } = this.props;
  
    return (
      <View
        style={[
          styles.details,
          {
            paddingBottom: height * 0.015
            // backgroundColor:'blue'
          }
        ]}
      >
        <Placeholder
          // isReady={true}
          isReady={isReady}
          animation="fade"
          whenReadyRender={() => {
            return (
              <React.Fragment>
                <Text
                  style={[
                    commonStyle.textStyle,
                    {
                      marginTop: height * (index == 0 ? 0.12 : 0.07),
                      overflow: "hidden",
                      textAlign: "center",
                      color: rightItemColor,
                      width: width * 0.2
                    }
                  ]}
                  numberOfLines={4}
                >
                  {organizationName}
                </Text>
                <View
                  style={[
                    commonStyle.row,
                    {
                      // minWidth: scale(100),
                      // width: scale(80),
                      marginTop: height * (index == 0 ? 0.01 : 0.005)
                      // marginLeft: scale(15)
                      // position: "absolute",
                      // bottom: height*0.08,
                      // right: 0
                    }
                  ]}
                >
                  <Image

                    // source={{uri: "visible_filled"}}
                    source={require("../../../../images/visible_filled.png")}
                    style={{
                      width: scale(15),
                      height: scale(15),
                      marginRight: scale(10),
                      resizeMode: "contain",marginTop:height*0.005
                    }}
                  />

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
                    {viewCount}
                  </Text>
                </View>
                <View style={[commonStyle.row, { marginTop: height * 0.008 }]}>
                  <Image
                    source={require("../../../../images/clock_filled.png")}
                    style={{
                      width: scale(14),
                      height: scale(14),
                      marginRight: scale(10),
                      resizeMode: "contain",marginTop:height*0.006
                    }}
                  />

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
                      }
                    ]}
                  >
                    {this.state.elapsedTime}
                  </Text>
                </View>
              </React.Fragment>
            );
          }}
        >
          <Media
            width={width * 0.6}
            style={{
              alignSelf: "flex-end",
              marginRight: width * 0.05,
              width: 70,
              height: 70,
              borderRadius: 5,
              marginTop: index == 0 ? 70 : 40
            }}
          />
        </Placeholder>
      </View>
    );
  }
}

/**
 * News Item in  NewsMain
 *
 *
 * @param {number} index required
 *
 * @param {number } newsLength required
 *
 *
 * @param  {func} onPress required
 *
 */

class CardType0 extends React.Component {
  static defaultProps = {
    item: {
      id: 0,
      title: "",
      text: "",
      organizationName: "",
      viewCount: 0,
      publishDate: "",
      created: ""
    },
    index: 0,
    newsLength: 0,
    circleColor: COLOR,
    titleColor: COLOR,
    descriptionColor: COLOR,
    rightItemColor: COLOR,
    textIcon: "",
    isReady: true
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.isReady != nextProps.isReady ||
      this.props.item.title != nextProps.item.title ||
      this.props.newsLength != nextProps.newsLength ||this.props.item.text!=nextProps.item.text
    ) {
    //   if(this.props.index==0){
    //   console.log('log::_______',this.props.isReady,nextProps.isReady,this.props.item.text,nextProps.item.text,this.props.newsLength,nextProps.newsLength)
      
    // }
    
    return true;
    }
    return false;
  }
  render() {
    const {
      item: { organizationName, viewCount, publishDate, created },
      index,
      newsLength,
      circleColor,
      titleColor,
      descriptionColor,
      rightItemColor,
      textIcon,
      isReady,
      componentId
    } = this.props; 
   
    return (
      <View
        style={[
          styles.rowContainer,
          {
            paddingTop: index == 0 ? height * 0.11 : 0,

            paddingBottom: index == newsLength - 1 ? 10 : 0,
            minHeight: height * 0.15
          }
        ]}
      >
         <LeftCont
          item={this.props.item}
          index={index}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          isReady={isReady}
          currentSection={this.props.currentSection}
          componentId={componentId}
        />

        <RightCont
          organizationName={organizationName}
          viewCount={viewCount}
          publishDate={publishDate}
          created={created}
          index={index}
          isReady={isReady}
          newsLength={newsLength}
          rightItemColor={rightItemColor}
        />

        <Circle index={index} circleColor={circleColor} textIcon={textIcon} />

         {index == newsLength - 1 ? null : (
          <Svg
            height={5}
            width={`${scale(195)}`}
            style={{
              position: "absolute",
              left: scale(20),
              bottom: 2
            }}
          >
            <Line
              x1="0"
              y1="1"
              x2={`${scale(195)}`}
              y2="1"
              stroke="#c4c4c4"
              // strokeWidth="2"
              strokeDasharray={`${scale(5)},${scale(5)}`}
              // strokeLinecap="butt"
            />
          </Svg>
        )} 
      </View>
    );
  }
}

export default CardType0;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: width,
    // backgroundColor:"#2E3032"
  },

  timeContainer: {
    width: scale(210)
  },
  circle: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),

    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    right: scale(97.5),
    justifyContent: "center",
    alignItems: "center"
  },

  details: {
    flexDirection: "column",
    borderColor: "rgba(255,255,255,0.4)",
    borderLeftWidth: scale(5),

    width: scale(115),
    marginRight: 0,

    alignItems: "center"
  }
});
