import React from 'react';
import Icon from 'antd/lib/icon';
import { NavLink,withRouter } from 'react-router-dom'; //withRouter 获取父级的属性

class Header extends React.Component {
  render(){
    return(
      <header>
        <NavLink to='/gps' style={{color:'white'}}>武汉<Icon type="environment" style={{fontSize:'24px'}}/></NavLink>
        <img src={require('../img/header/u75.svg')} style={{height:'40px',padding:'5px'}} alt=''/>
        <a href='#'><img src={require('../img/header/u576.png')} style={{height:'40px',padding:'5px'}} alt=''/></a>
      </header>
    )
  }
}

export default withRouter(Header);
