import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Album from './Album'

function mapStateToProps(state){
  return{

  };
}

// function mapDispatchToProps(dispatch) {
// }

export default connect(mapStateToProps)(Album);
