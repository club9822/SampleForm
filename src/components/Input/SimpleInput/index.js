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
  TextInput,
} from 'react-native';

import {
  width,
  height,
  isIphoneX,
} from '../../../utils/windowDimensions';
import commonStyle from '../../../styles/commonStyle';

class SimpleInput extends React.PureComponent {
  render() {
    return (
      <View style={[styles.container, this.props.container || {}]}>
        <TextInput
          ref="input"
          secureTextEntry={this.props.secureTextEntry || false}
          style={[
            styles.textInput,
            {
              textAlign: this.props.textAlign || 'right',
              fontSize: this.props.fontSize || width * 0.032,
            },
          ]}
          placeholder={this.props.placeholder || ''}
          placeholderTextColor="#a1a1a1"
          keyboardType={this.props.keyboardType || 'default'}
          selectionColor="#989898"
          value={this.props.value || ''}
          onChangeText={this.props.onChangeText}
          underlineColorAndroid={'transparent'}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
      </View>
    );
  }
}
export default SimpleInput;
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: height * 0.07,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: width * 0.0025,
    borderColor: '#dcd9df',
    borderRadius: width * 0.02,
    marginVertical:height*0.006
  },
  textInput: {
    ...commonStyle.textStyle,
    width:'100%',height:'100%',
    textAlign: 'right',

    paddingHorizontal:width*0.02,
    minHeight:
      height *
      Platform.select({
        ios: isIphoneX ? 0.065 : 0.07,
        android: 0.07,
      }),

    textAlignVertical: 'center',
  },
});
