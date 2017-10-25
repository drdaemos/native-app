import React from 'react';
import { View } from 'react-native';

export default class Categories extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { categoryId } = this.props
    return (
      <View style={styles.container}>
        <Text> {categoryId} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    border: "1px solid"
  },
});
