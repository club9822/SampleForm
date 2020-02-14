/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Platform
} from 'react-native';

import {LargeList} from 'react-native-largelist-v3';
import CardType1 from './src/components/Card/CardType1/CardType1';
import axios from 'axios';
import {width, height, isIphoneX} from './src/utils/windowDimensions';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          header: 'sad',
          items: [{id: 0}],
        },
      ],
    };
  }

  componentDidMount(): void {
    axios({
      url: 'https://api.myghazvin.ir/api/v1/history/',
      params: {
        type: 'first-time',
      },
    })
      .then(res => {
        this.setState({data: [{header: '', items: res.data}]});
      })
      .catch(e => {
      });
  }

  render() {
    console.log(this.state);
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <LargeList
          style={styles.container}
          data={this.state.data}
          // heightForSection={() => 50}
          renderSection={() => null}
          heightForIndexPath={() =>   Platform.select({
              ios: isIphoneX ? height * 0.38 : height * 0.45,
              android: height * 0.45 +40,
          })}
          renderIndexPath={({section: section, row: row}) => {
            let item = this.state.data[section].items[row];
            return <CardType1 {...item} />;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
