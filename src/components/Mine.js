import React from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

class Mine extends React.Component {
  render(){
    return(
      <div className='mine-wrap'>
        <div className='mine-header'>
          <Button ghost style={{position:'absolute',top:'2vh',right:'4vw'}}><Icon type="calendar" />签到</Button>
          <img style={{width:'20vw'}} src={require('../img/chen_xx___u105.svg')} alt=''/><br/>
          <p style={{fontSize:'14px',marginBottom:'2vh'}}>13845678910</p>
          <Button ghost>我的名片</Button>
        </div>
      </div>
    )
  }
}

export default Mine;
