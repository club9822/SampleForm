import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  BackHandler,KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import Header from '../../../components/Header';
import {height, width} from '../../../utils/windowDimensions';
import FormController from './Components/FormController';
class Step_2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }
  onBackPress=()=>{
    const Navigation=require('react-native-navigation').Navigation;
    Navigation.pop(this.props.componentId)
  }
  componentDidAppear() {}
  componentDidDisAppear() {}
  render() {
    return (
        <SafeAreaView style={{flex: 1,backgroundColor:'#ffffff'}}>
          <Header
              leftFn={this.onBackPress}
              renderLeft={'arrow-left'}
              leftColor={'#fff'}
              renderLeftType={'Icon'}
              renderCenterType={'Text'}
              renderCenter={'عنوان صفحه'}
              containerStyle={{
                backgroundColor:'#4a91ff',
                position:'relative',
              }}
          />
          <ScrollView  >
            <FormController
                containerStyle={{
                  marginTop:height*0.06
                }}
                componentId={this.props.componentId}
            />
          </ScrollView>
        </SafeAreaView>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(
    mapStateToProps,
    {},
)(Step_2);
