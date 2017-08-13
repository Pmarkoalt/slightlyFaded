import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import AlbumList from './AlbumList'

function mapStateToProps(state){
  return{

  };
}

// function mapDispatchToProps(dispatch) {
// }

export default connect(mapStateToProps)(AlbumList);
