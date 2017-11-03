import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
  }
  _onClickHandler() {
    if (this.props.subcategories instanceof Array && this.props.subcategories.length > 0) {
      this.props.navigation.navigate('Categories', { categoryId: this.props.categoryId, title: this.props.name, filtered: this.props.subcategories })        
    } else {        
      this.props.navigation.navigate('Products', { categoryId: this.props.categoryId, title: this.props.name, count: this.props.productsCount })
    }
  }
  render() {
    return (
      <TouchableHighlight onPress={this._onClickHandler.bind(this)}>
        <View style={styles.container}>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    minHeight: 100,
    borderWidth: 1,
    borderStyle: 'solid'
  },
});
