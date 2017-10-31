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
    this.props.updateCategories();
  }
  getCategories() {
    return this.props.categories 
      ? this.props.categories.map((item) => {
        return (<CategoryItem name={item.name} key={item.id} />);
      })
      : null;
  }
  render() {
    const { navigate } = this.props.navigation;
    const categories = this.getCategories();
    return (
      <ScrollView style={styles.container}>
        {categories}
        <Button
          onPress={() => navigate('Subcategories', { categoryId: 5 })}
          title="Toys subcategories"
        />
        <Button
          onPress={() => navigate('Products', { categoryId: 4 })}
          title="Apparel products"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
