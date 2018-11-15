import React, { Component } from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state =>{
  return {userInfo:state.userInfo}
}
export default connect(mapStateToProps)(class Index extends Component {
  componentDidMount = () => {
    console.log(this.props)
  }
  
  render() {
    return (
      <div>
        首也
      </div>
    )
  }
})
