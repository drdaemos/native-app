import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.productId}</Text>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    borderWidth: 1,
    borderStyle: 'solid'
  },
});
