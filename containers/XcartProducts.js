import { connect } from 'react-redux'
import { updateProducts } from '../actions'
import Products from '../components/Products'
import XcartApi from '../services/XcartApi'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products ? state.products[ownProps.navigation.state.params.categoryId] : null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProducts: (offset = 0) => {
      XcartApi.getProducts(ownProps.navigation.state.params.categoryId, offset).then((data) => {
        dispatch(updateProducts(data, ownProps.navigation.state.params.categoryId))
      })
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        redux: { 
            state: stateProps, 
            actions: dispatchProps
        }
    };
};

export default XcartProducts = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Products)