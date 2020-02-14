import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleInput from '../../../../components/Input/SimpleInput';
import CalendarInput from '../../../../components/Input/CalendarInput';
import {height} from '../../../../utils/windowDimensions';
import SpinnerButton from '../../../../components/SpinnerButton';
import {connect} from 'react-redux';
import dispatchPayloadToReduxAction from '../../../../actions/dispatchPayloadToReduxAction';
class FormController extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name_shop: '',
      name_manager: '',
      id_national: '',
      identification_number: '',
      from: '',
      father_name: '',
      birth_date: '',

      // mobile: '',
      // tel: '',
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    const validations = require('../../../../utils/validations').default;
    const {isSet, isNumber, maxNumber, minNumber} = validations;

    const {
      name_shop,
      name_manager,
      id_national,
      identification_number,
      from,
      father_name,
      birth_date,
    } = this.state;

    if (
      (isSet(name_shop) &&
        isSet(name_manager) &&
        isSet(id_national) &&
        isSet(identification_number) &&
        isSet(from) &&
        isSet(father_name) &&
        isSet(birth_date)) ||
      true
    ) {
      /**
       *   navigate to second screen
       *   and  save items in redux
       */

      const PAGES = require('../../../../constants/PAGES').PAGES;

      const Navigation = require('react-native-navigation').Navigation;

      try {
        Navigation.push(this.props.componentId, {
          component: {
            id: PAGES.FROM_STEP_2,
            name: PAGES.FROM_STEP_2,
            options: {
              statusBar: {
                backgroundColor: '#4a91ff',
              },
            },
          },
        })
          .then(res => {
            const DISPATCH_FROM_STEP_1_PAYLOAD = require('../../../../types/actionTypes')
              .ACTION_TYPES.DISPATCH_FROM_STEP_1_PAYLOAD;

            this.props.dispatchPayloadToReduxAction({
              type: DISPATCH_FROM_STEP_1_PAYLOAD,
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
          placeholder={'نام صنف'}
          onChangeText={value => {
            this.setState({name_shop: value});
          }}
          value={this.state.name_shop}
          keyboardType={'default'}
        />
        <SimpleInput
          placeholder={'نام پذیرنده'}
          onChangeText={value => {
            this.setState({name_manager: value});
          }}
          value={this.state.name_manager}
          keyboardType={'default'}
        />
        <SimpleInput
          placeholder={'کد ملی'}
          onChangeText={value => {
            this.setState({id_national: value});
          }}
          value={this.state.id_national}
          keyboardType={'decimal-pad'}
        />
        <SimpleInput
          placeholder={'شماره شناسنامه'}
          onChangeText={value => {
            this.setState({identification_number: value});
          }}
          value={this.state.identification_number}
          keyboardType={'decimal-pad'}
        />
        <SimpleInput
          placeholder={'صادره از'}
          onChangeText={value => {
            this.setState({from: value});
          }}
          value={this.state.from}
          keyboardType={'default'}
        />
        <SimpleInput
          placeholder={'نام پدر'}
          onChangeText={value => {
            this.setState({father_name: value});
          }}
          value={this.state.father_name}
          keyboardType={'default'}
        />
        <CalendarInput
          label={'تاریخ تولد'}
          containerStyle={{
            marginTop: height * 0.02,
          }}
          onDaySelect={birth_date => {
            this.setState({birth_date});
          }}
        />

        <SpinnerButton
          label={'مرحله بعد'}
          containerStyle={{
            marginTop: height * 0.15,
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
