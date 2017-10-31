import { StackNavigator } from 'react-navigation';
import XcartCategories from '../containers/XcartCategories';
import Subcategories from './Subcategories';
import Products from './Products';

export default ScreenNavigator = StackNavigator({
  Categories: {
    screen: XcartCategories
  },
  Subcategories: {
    screen: Subcategories
  },
  Products: {
    screen: Products
  }
});