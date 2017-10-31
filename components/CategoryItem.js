import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid'
  },
});
