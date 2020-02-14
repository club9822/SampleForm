import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleInput from '../../../../components/Input/SimpleInput';
import CalendarInput from '../../../../components/Input/CalendarInput';
import {height} from '../../../../utils/windowDimensions';
import SpinnerButton from '../../../../components/SpinnerButton';
import {connect} from 'react-redux';
import dispatchPayloadToReduxAction from '../../../../actions/dispatchPayloadToReduxAction';
import TextAreaInput from '../../../../components/Input/TextAreaInput';
import PickerInput from '../../../../components/Input/PicherInput';
import commonStyles from '../../../../styles/commonStyle';
class FormController extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      tel: '',
      meters: '',
      region_id: 0,
      city_id: 0,
      address: '',
      sub_category_id: 1,
      description: '',
      regions: [
        {id: '1', label: 'تهران', value: 0},
        {id: '1', label: 'تهران', value: 0},
        {id: '1', label: 'تهران', value: 0},
        {id: '1', label: 'تهران', value: 0},
        {id: '1', label: 'تهران', value: 0},
        {id: '1', label: 'تهران', value: 0},
        {id: '1', label: 'تهران', value: 0},
      ],
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    const validations = require('../../../../utils/validations').default;
    const {isSet, isNumber, maxNumber, minNumber} = validations;

    const {} = this.state;

    if (true) {
      /**
       *   navigate to second screen
       *   and  save items in redux
       */

      const PAGES = require('../../../../constants/PAGES').PAGES;

      const Navigation = require('react-native-navigation').Navigation;

      try {
        Navigation.push(this.props.componentId, {
          component: {
            id: PAGES.FROM_STEP_3,
            name: PAGES.FROM_STEP_3,
            options: {
              statusBar: {
                backgroundColor: '#4a91ff',
              },
            },
          },
        })
          .then(res => {
            const DISPATCH_FROM_PAYLOAD = require('../../../../types/actionTypes')
              .ACTION_TYPES.DISPATCH_FROM_PAYLOAD;

            this.props.dispatchPayloadToReduxAction({
              type: DISPATCH_FROM_PAYLOAD,
              payload: this.state,
            });

            if (__DEV__) {
              console.log(res);
            }
          })
          .catch(e => {
            if (__DEV__) {
              console.log(e);
            }
          });
      } catch (e) {
        if (__DEV__) {
          console.log(e);
        }
      }
    } else {
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle || {}]}>
        <SimpleInput
          placeholder={'شماره همراه'}
          onChangeText={value => {
            this.setState({mobile: value});
          }}
          value={this.state.mobile}
          keyboardType={'decimal-pad'}
        />
        <SimpleInput
          placeholder={'تلفن فروشگاه'}
          onChangeText={value => {
            this.setState({tel: value});
          }}
          value={this.state.tel}
          keyboardType={'decimal-pad'}
        />
        <SimpleInput
          placeholder={'متراژ فروشگاه'}
          onChangeText={value => {
            this.setState({meters: value});
          }}
          value={this.state.meters}
          keyboardType={'decimal-pad'}
        />
        <View
          style={[
            commonStyles.row,
            {width: '85%', marginVertical: height * 0.02, alignSelf: 'center'},
          ]}>
          <PickerInput
            label={'انتخاب محله'}
            data={this.state.regions}
            onItemPress={item => {}}
          />
          <PickerInput
            label={'انتخاب منطقه'}
            data={this.state.regions}
            onItemPress={item => {}}
          />
          <PickerInput
            label={'انتخاب شهر'}
            data={this.state.regions}
            onItemPress={item => {}}
          />
        </View>

        <TextAreaInput
          placeholder={'آدرس دقیق'}
          onChangeText={value => {
            this.setState({description: value});
          }}
          value={this.state.description}
          keyboardType={'default'}
        />

        <View
          style={[
            commonStyles.row,
            {width: '85%', marginVertical: height * 0.02, alignSelf: 'center'},
          ]}>
          <View style={{flex: 3}} />
          <PickerInput
            label={'نوع صنف'}
            data={this.state.regions}
            onItemPress={item => {}}
          />
        </View>
        <TextAreaInput
          placeholder={'توضیحات فروشگاه'}
          onChangeText={value => {
            this.setState({description: value});
          }}
          value={this.state.description}
          keyboardType={'default'}
          containerStyle={{
            height: height * 0.2,
          }}
        />
        <View
          style={[
            commonStyles.row,
            {width: '85%', marginVertical: height * 0.02, alignSelf: 'center'},
          ]}>
          <View style={{flex: 3}} />
          <PickerInput
            label={'درصد تخفیف'}
            data={this.state.regions}
            onItemPress={item => {}}
          />
        </View>
        <View
          style={[
            commonStyles.row,
            {width: '85%', marginVertical: height * 0.01, alignSelf: 'center'},
          ]}>
          <View style={{flex: 3}} />
          <PickerInput
            label={'وضعیت ملکی'}
            data={this.state.regions}
            onItemPress={item => {}}
          />
        </View>
        <View
          style={[
            commonStyles.row,
            {width: '85%', marginVertical: height * 0.01, alignSelf: 'center'},
          ]}>
          <View style={{flex: 3}} />
          <PickerInput
            label={'جواز کسب'}
            data={this.state.regions}
            onItemPress={item => {}}
          />
        </View>
        <SpinnerButton
          label={'مرحله بعد'}
          containerStyle={{
            marginTop: height * 0.1,
          }}
          onPress={this.onButtonPress}
        />
      </View>
    );
  }
}

export default connect(
  null,
  {dispatchPayloadToReduxAction},
)(FormController);
const styles = StyleSheet.create({
  container: {},
});
