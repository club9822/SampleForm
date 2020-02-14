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

class TextAreaInput extends React.PureComponent {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle || {}]}>
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
          textAlignVertical={'top'}
          autoCapitalize={'none'}
          multiline={true}
        />
        <View style={{
          width:width*0.2,height:height*0.015,transform:[{rotate:'45deg'}],
          borderColor:'#b3b0b6',borderWidth:height*0.003,
          position:'absolute',
          bottom:0,left:-width*0.075
        }} >
          <View style={{
            width:width*0.2,height:height*0.003,transform:[{rotate:'0deg'}],
            backgroundColor:'#b3b0b6',
            position:'absolute',
            bottom:height*0.003,left:0
          }} />
        </View>
      </View>
    );
  }
}
export default TextAreaInput;
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: height * 0.15,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: width * 0.0025,
    borderColor: '#dcd9df',
    borderRadius: width * 0.02,
    marginVertical:height*0.006,
    overflow:'hidden'
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
