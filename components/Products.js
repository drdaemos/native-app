import React from 'react';
import { ScrollView, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

export default class Products extends React.Component {
  static navigationOptions = {
    title: 'Products screen',
  };
  constructor(props) {
    super(props)
    this.props.redux.actions.updateProducts();
  }  
  getNavigationParams() {
    return typeof (this.props.navigation.state.params) !== 'undefined'
      ? this.props.navigation.state.params
      : null;
  }
  renderProducts(products) {
    return products
      ? products.map((item) => {
        return (<ProductItem name={item.product_name} key={item.product_id} productId={item.product_id} categoryId={this.getNavigationParams().categoryId} navigation={this.props.navigation} />);
      })
      : null;
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderProducts(this.props.redux.state.products)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
