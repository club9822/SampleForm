import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  Image,
  View,
  Text,
  Platform,
} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';

import {isIphoneX, width, height} from '../../../utils/windowDimensions';

const RADIUS = scale(25);

// const defaultImageCacheManager = ImageCacheManager();

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: Platform.select({
      ios: isIphoneX ? height * 0.38 : height * 0.45,
      android: height * 0.45,
    }),
    alignSelf: 'center',
  },
});

/**
 *
 * Card type 1 Component
 *
 *
 * @param {string} title
 * @param {string} introImage
 * @param {int} viewCount
 * @param {date} publishDate  //
 * @param {date} created
 * @param {date} modified
 *
 *
 */
export default class CardType1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      elapsedTime: '',

      tryToShowImage: true,
      placeholderImage: true,
      viewCount: '0',
    };
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.onPress = this.onPress.bind(this);
    this.getViewCount = this.getViewCount.bind(this);
  }

  onError(err) {}
  onLoad(e) {}

  onPress() {
    /**
     *
     * if there is not title , dont navigate to detales screen
     *
     */

    const {
      title,
      componentId,
      updateView,
      index,
      updateViewCardListType1,
    } = this.props;

    if (title != '') {
    }
  }

  getViewCount(id) {}
  componentDidMount() {
    this._mounted = true;
    // this.getViewCount(this.props.id)
  }

  componentWillUnmount() {
    this._mounted = false;
  }
  render() {
    const {title} = this.props;
    const {elapsedTime} = this.state;
    let isReady = true;
    // if(this.props.index==0||this.props.index==1){
    //   // console.log('rennder',this.props.index)
    // }

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View
          style={[
            styles.card,
            {
              // borderRadius: RADIUS,
              marginTop: 20,
              marginBottom: 20,
              // backgroundColor: 'rgba(0,0,0,0.4)',
              overflow: 'hidden',
            },
          ]}>
          <View
            style={[
              styles.card,
              {
                overflow: 'hidden',
                borderRadius: RADIUS,
              },
            ]}>
            <View
              style={[
                styles.card,
                {
                  transform: [{scale: 1.4}],
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // overflow:'hidden',
                  // borderRadius: RADIUS,
                  // backgroundColor: 'rgba(0,0,0,0.4)',
                  // marginTop: this.state.placeholderImage ? -height * 0.04 : 0
                },
              ]}>
              <Image
                // borderRadius={RADIUS}
                style={[styles.card, {}]}
                // borderRadius={5}
                source={{uri: this.props.introImage}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
