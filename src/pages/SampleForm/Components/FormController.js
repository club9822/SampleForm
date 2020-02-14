import React, {Component, useEffect, useState, useReducer} from 'react';
import {
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
} from 'react-native';
import {width, height, isIphoneX} from '../../../utils/windowDimensions';
import {SIGN_IN} from '../../../constants/forms';
//components
import {Fumi} from 'react-native-textinput-effects';
import {
  formReducer,
  initialState,
} from '../../../reducers/formReducer';
import {REDUCER_TYPES} from '../../../types/reducerTypes';
import SpinnerButton from '../../../components/SpinnerButton';
import {ACTION_TYPES} from '../../../types/actionTypes';
import {authActions} from '../../../actions/authActions';
/**
 *
 * @param {Object} props
 * @return {Object}
 * @constructor
 */
// @flow
type Props = {
  containerStyle?: object,
};
function FormController(props: Props) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const signInAxios = function() {
    const {username, password} = state;

    /**
     * sign action
     */
    authActions({
      type: ACTION_TYPES.SIGN_IN_ACTION,
      payload: {
        username,
        password,
      },
    })
      .then(function(res) {
        alert(res);
        // navigate or any thing
      })
      .catch(function(err) {
        alert(JSON.stringify(err));
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, props.containerStyle || {}]}>
        {SIGN_IN.map(function(item, index) {
          return (
            <Fumi
              key={'item__' + index}
              shake={false}
              label={item.label || ''}
              keyboardType={item.keyboardType || 'default'}
              onChangeText={function(value) {
                dispatch({
                  type: REDUCER_TYPES.SIGN_FORM,
                  payload: {
                    key: item.type,
                    value: value,
                  },
                });
              }}
              value={state[`${item.type}`]}
              iconName={item.icon || 'menu'}
            />
          );
        })}
        <SpinnerButton
          label={'ورود'}
          onPress={signInAxios}
          containerStyle={[styles.spinnerButton]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    height: height * 0.5,
    paddingVertical: height * 0.05,
    borderRadius: width * 0.04,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: height * 0.006,
      },
    }),

    backgroundColor: '#ffffff',
  },
  spinnerButton: {},
});

export default FormController;
