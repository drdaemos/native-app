import React from 'react';
import { ScrollView, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default class Subcategories extends React.Component {
  static navigationOptions = {
    title: 'Subcategories screen',
  };
  constructor(props) {
    super(props)
  }
  render() {
    const { categoryId } = this.props
    return (
      <ScrollView style={styles.container}>
        <Text>SubCategories view</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
