import { StackNavigator } from 'react-navigation';
import XcartCategories from '../containers/XcartCategories';
import XcartProducts from '../containers/XcartProducts';
import Products from './Products';

export default ScreenNavigator = StackNavigator({
  Categories: {
    screen: XcartCategories
  },
  Products: {
    screen: XcartProducts
  }
});