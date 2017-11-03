import { StackNavigator } from 'react-navigation';
import XcartCategories from '../containers/XcartCategories';
import XcartProducts from '../containers/XcartProducts';
import Products from './Products';

export default ScreenNavigator = StackNavigator({
  Categories: {
    screen: XcartCategories,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params ? `${navigation.state.params.title}` : 'Categories',
    }),
  },
  Products: {
    screen: XcartProducts,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params ? `${navigation.state.params.title}` : 'Products',
    }),
  }
});