import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Blog from './Blog'

function mapStateToProps(state){
  return{

  };
}

// function mapDispatchToProps(dispatch) {
// }

export default connect(mapStateToProps)(Blog);
