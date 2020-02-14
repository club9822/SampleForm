import React, {Component} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

//components
import FormController from './Components/FormController';
import FooterButtons from './Components/FooterButtons';
import {height} from '../../utils/windowDimensions';
// @flow
type Props = {};
function SampleForm(props: Props) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <StatusBar backgroundColor={'#12a19f'} barStyle={'dark'} />
      <FormController containerStyle={{marginTop: height * 0.1}} />
      <FooterButtons />
    </SafeAreaView>
  );
}

export default SampleForm;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
