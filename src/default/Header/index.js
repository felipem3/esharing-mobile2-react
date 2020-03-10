import React, { Component } from 'react';
import { View,Text } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>eSharing</Text>
      </View>
    );
  }
}
