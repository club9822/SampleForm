import React, {Component} from 'react';
import {
  StyleSheet,
  Animated,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
const {width, height} = Dimensions.get('window');
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
import commonStyles from '../../../styles/commonStyle';
import CardView from 'react-native-cardview';
export default class PickerInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        label: this.props.label || '',
      value: '',
      showModal: false,
    };
    this.anim3 = new Animated.Value(0);
  }
  nothing = () => {};
  renderItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => {
        this.animation(0);
        this.setState({...item, showModal: false});
        this.props.onItemPress(item);
      }}>
      <View style={[styles.item, {flexDirection: 'row'}]}>
        <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'right',
              color: '#666666',
              alignSelf: 'flex-end',
              fontFamily: 'IRANSansMobile(FaNum)',
            }}>
            {item.label}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}>
          <Icon name="circle-medium" size={width * 0.1} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  animation = toValue => {
    Animated.timing(this.anim3, {
      toValue: toValue,
      useNativeDriver: true, //useNativeDriver true not working for width and height
      duration: toValue == 1 ? 500 : 400,
    }).start();
  };

  render() {
    return (
      <View style={[this.props.containerStyle]}>
        <Modal
          disableAnimation={true}
          onSwipeComplete={() => {
            this.setState({showModal: !this.state.showModal});
            this.animation(0);
          }}
          useNativeDriver={true}
          // // animationInTiming={0}
          // // animationOutTiming={0}   //  in related with anim + anim2 timing
          onBackButtonPress={() => {
            this.setState({showModal: !this.state.showModal});
            this.animation(0);
          }}
          onBackdropPress={() => {
            this.setState({showModal: !this.state.showModal});
            this.animation(0);
          }}
          isVisible={this.state.showModal || false}
          backdropOpacity={0.1}
          hideModalContentWhileAnimating={true}
          backdropColor="#000"
          // visible={this.props.isVisible || false}
        >
          <View
            style={{
              alignSelf: 'center',
              borderRadius: width * 0.02,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.9,

              paddingHorizontal: width * 0.01,
            }}>
            <FlatList
              data={this.props.data || []}
              extraData={this.props}
              renderItem={this.renderItem}
              keyExtractor={(item, i) => 'item___' + i}
              contentContainerStyle={{paddingVertical: height * 0.05}}
            />
          </View>
        </Modal>

        <TouchableWithoutFeedback
          onPress={() => {
            this.animation(1);
            this.setState({showModal: !this.state.showModal});
          }}>
          <CardView
            style={[{
              width: width*0.255,
              height: height * 0.065,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingRight: width * 0.025,
              marginHorizontal: width * 0.01,
              backgroundColor: '#fff',
            },this.props.inputBoxContainer||{}]}
            cardElevation={height * 0.004}
            cardMaxElevation={height * 0.004}
            cornerRadius={height * 0.015}>
            <View style={{flex: 5, justifyContent: 'center'}}>
              <Text
                style={[
                  commonStyles.textStyle,
                  {
                    textAlign: 'right',
                    alignSelf: 'flex-end',
                    color: '#666666',
                    fontSize: width * 0.03,
                  },
                ]}>
                {this.state.label}
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <AnimatedIcon
                style={{
                  transform: [
                    {
                      rotate: this.anim3.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                  alignSelf: 'center',
                }}
                size={width * 0.05}
                color="#737373"
                name="chevron-down"
              />
            </View>
          </CardView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {},
  item: {
    width: width * 0.7,
    alignSelf: 'center',
    height: height * 0.06,

    justifyContent: 'center',
  },
});
