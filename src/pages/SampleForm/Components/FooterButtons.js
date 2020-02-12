import React, {Component, useEffect, useState, useReducer} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,TouchableOpacity
} from 'react-native';
import {width, height, isIphoneX} from '../../../utils/windowDimensions';

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */

// @flow
type Props = {
};
function FooterButtons(props:Props){
  return (
    <View style={{width:'100%',minHeight:'10%',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity

        onPress={() => {
          alert('00');
        }}>

        <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>ثبت نام</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FooterButtons;
