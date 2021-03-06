import { connect } from 'react-redux'
import { updateCategories } from '../actions'
import Categories from '../components/Categories'
import XcartApi from '../services/XcartApi'

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCategories: () => {
      XcartApi.getCategories().then((data) => {
        dispatch(updateCategories(data))
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

export default XcartCategories = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Categories)