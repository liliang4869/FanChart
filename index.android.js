/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FanChart from './src/FanChart'
export default class FanChartDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
       <FanChart style={{height:400,width:400}} O={{x:200,y:200,r:100}} DataList={[{data:0.2,color:'#998877'},{data:0.6,color:'#337233'}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FanChartDemo', () => FanChartDemo);
