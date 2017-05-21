import React from 'react';
import Icon from 'antd/lib/icon';
import { Link,withRouter } from 'react-router-dom';

class Gps extends React.Component {
  handleClick(){
    this.props.history.goBack()
  }
  render(){
    return(
      <div className='gps-wrap'>
        <div className='gps-header' style={{}}>
          <a onClick={this.handleClick.bind(this)} style={{float:'left',color:'#fff'}}><Icon type="left" style={{fontSize:'30px'}}/></a>
          <h2 style={{textAlign:'center'}}>选择城市</h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Gps);
