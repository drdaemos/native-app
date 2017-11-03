import React from 'react';
import { FlatList, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

export default class Products extends React.Component {
  static navigationOptions = {
    title: 'Products screen',
  };
  constructor(props) {
    super(props)
    this.state = { refreshing: false }
    this._onRefresh();
  }  
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  _keyExtractor(item, index) {
    return item.product_id
  }
  _renderItem(data) {
    return (
      <ProductItem 
        name={data.item.product_name} 
        productId={data.item.product_id} 
        categoryId={this.getNavigationParams().categoryId} 
        navigation={this.props.navigation} 
      />
    );
  }
  _getProducts() {
    return this.props.redux.state.products || [];
  }
  _onRefresh() {
    if (this._isMounted) {
      this.setState({ refreshing: true });
    }
    if (!this.state.refreshing && !this.hasAllProducts()) {
      this.props.redux.actions.updateProducts(this._getProducts().length)
        .then(() => {
          if (this._isMounted) {
            this.setState({ refreshing: false });
          }
        });    
    }
  }
  hasAllProducts() {
    return this._getProducts().length >= this.getOverallCount();
  }
  getOverallCount() {
    return this.getNavigationParams().count || 0;
  }
  getNavigationParams() {
    return typeof (this.props.navigation.state.params) !== 'undefined'
      ? this.props.navigation.state.params
      : null;
  }
  render() {
    return (
      <FlatList 
        style={styles.container}
        data={this._getProducts()}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem.bind(this)}
        onEndReached={this._onRefresh.bind(this)}
        refreshing={this.state.refreshing}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
