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
  Modal,
  TouchableOpacity,
} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-general-calendars';
import {height, width} from '../../../utils/windowDimensions';
import commonStyles from '../../../styles/commonStyle';

class CalendarInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      date: this.props.placeholder || 'انتخاب تاریخ',
    };
  }

  render() {
    return (
      <View style={[styles.containerStyle, this.props.containerStyle || {}]}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({showCalendar: !this.state.showCalendar});
          }}>
          <View style={[commonStyles.row, {width: '80%', alignSelf: 'center'}]}>
            <View style={[styles.inputContainer, {}]}>
              <View style={[commonStyles.flex, {}]}>
                <Icon
                  name={'calendar-outline'}
                  size={width * 0.07}
                  color={'#4f959c'}
                  style={{
                    alignSelf: 'flex-start',
                  }}
                />
              </View>
              <View style={[commonStyles.flex, {flex: 2}]}>
                <Text
                  style={[
                    commonStyles.textStyle,
                    {alignSelf: 'flex-end', fontSize: width * 0.034},
                  ]}>
                  {this.state.date || ''}
                </Text>
              </View>
            </View>
            {this.props.label ? (
              <View style={[commonStyles.flex, {}]}>
                <Text
                  style={[
                    commonStyles.textStyle,
                    {alignSelf: 'flex-end', fontSize: width * 0.034},
                  ]}>
                  {this.props.label}
                </Text>
              </View>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
        <Modal
          visible={this.state.showCalendar}
          onDismiss={() => {
            this.setState({showCalendar: false});
          }}>
          <View style={[styles.modalContainer]}>
            <CalendarList
              type={'jalaali'}
              minDate={'1900-01-01'}
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              onVisibleMonthsChange={months => {
                console.log('now these months are visible', months);
              }}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={50}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
              onDayPress={(day, localeDay) => {
                const {year, month} = localeDay;
                const jalaaliDay = `${year}/${month}/${localeDay.day}`;
                this.setState({date: jalaaliDay, showCalendar: false});
                this.props.onDaySelect(jalaaliDay);
              }}
            />
            <TouchableOpacity
              style={[styles.modalCloseBtn]}
              onPress={() => {
                this.setState({showCalendar: false});
              }}>
              <Text style={[commonStyles.textStyle, {color: '#fff'}]}>
                بستن
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default CalendarInput;
const styles = StyleSheet.create({
  containerStyle: {},
  inputContainer: {
    ...commonStyles.row,

    height: height * 0.07,
    borderRadius: width * 0.02,
    borderColor: '#2ca19a',
    // backgroundColor: 'red',
    borderWidth: width * 0.003,
    borderStyle: 'dashed',
    paddingHorizontal: width * 0.05,
    flex: 2,
    alignSelf: 'flex-end',
  },
  modalContainer: {
    width,
    height,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: '#ebebeb',
    alignSelf: 'center',
  },
  modalCloseBtn: {
    width: width * 0.15,
    height: width * 0.15,
    position: 'absolute',
    bottom: height * 0.07,
    left: width * 0.07,
    backgroundColor: '#aa1929',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
