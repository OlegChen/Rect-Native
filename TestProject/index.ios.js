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
  View,
    Image,
} from 'react-native';



export default class TestProject extends Component {
  render() {
      let pic = {
          uri: 'http://i.imgur.com/UePbdph.jpg'
      };

      var movie = {

          title: "标题", year:"2015",};

    return (
        <View style={styles.container}>

            <Image
                source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                style={styles.thumbnail}
            />
            <Text>{movie.year}</Text>
            <Text>bbbbb</Text>

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
    thumbnail: {
        width: 100,
        height: 100,
    },
});



AppRegistry.registerComponent('TestProject', () => TestProject);
