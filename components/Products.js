import React from 'react';
import { ScrollView, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default class Products extends React.Component {
  static navigationOptions = {
    title: 'Products screen',
  };
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Products view</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
