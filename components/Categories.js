import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Categories screen',
  };
  constructor(props) {
    super(props)
    if (!this.props.redux.state.categories) {
      this.props.redux.actions.updateCategories();      
    }
  }
  getCategories() {
    return this.getNavigationParams() && this.getNavigationParams().filtered
      ? this.getNavigationParams().filtered
      : this.props.redux.state.categories;
  }
  getNavigationParams() {
    return typeof (this.props.navigation.state.params) !== 'undefined'
      ? this.props.navigation.state.params
      : null;
  }
  renderCategories(categories) {
    return categories
      ? categories.map((item) => {
        return (<CategoryItem name={item.name} key={item.id} categoryId={item.id} subcategories={item.subcategories} productsCount={item.products} navigation={this.props.navigation} />);
      })
      : null;
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderCategories(this.getCategories())}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
