import React from 'react';
import { Modal } from 'antd';
import Icon from 'antd/lib/icon';

class Find extends React.Component {
  constructor(){
    super();
    this.state = {
      visible: false
    }
  }
  showModal = () => {
    this.setState({visible: true});
  }
  handleOk = (e) => {
    this.setState({visible: false});
  }
  handleCancel = (e) => {
    this.setState({visible: false});
  }
  handleClick(e){
    e.preventDefault()
  }
  render(){
    return(
      <div className='find-wrap'>
        <div className='clearfix' style={{fontSize:'12px'}}>
          <span>泡沫</span><img src={require('../img/find/u277.svg')} alt=''/>
          <a onClick={this.showModal}><Icon type="down" style={{fontSize:'18px',float:'right'}}/></a><br/>
          <span>安徽宏村秀里意境精品酒店</span><br/>
          <img src={require('../img/find/u280.svg')} alt='' style={{width:'100px',marginRight:'10px'}}/>
          <img src={require('../img/find/u280.svg')} alt='' style={{width:'100px',marginRight:'10px'}}/>
          <img src={require('../img/find/u280.svg')} alt='' style={{width:'100px',marginRight:'10px'}}/><br/>
          <span>58分钟前</span>&nbsp;
          <img src={require('../img/u116.svg')} alt=''/>
          <span>宏村秀里意境精品酒店</span>
          <div style={{float:'right',fontSize:'14px'}}>
            <a href='#' onClick={this.handleClick.bind(this)}><Icon type="eye" />&nbsp;666</a>&nbsp;&nbsp;
            <a href='#' onClick={this.handleClick.bind(this)}><Icon type="heart" style={{color:'red'}}/>&nbsp;666</a>&nbsp;&nbsp;
            <a href='#' onClick={this.handleClick.bind(this)}><Icon type="message" />&nbsp;666</a>&nbsp;&nbsp;
          </div>
        </div>
        <Modal visible={this.state.visible} footer={null}
        onCancel={this.handleCancel}>
          <div><img src={require('../img/find/find-1.png')} alt=''/><p>分享到</p></div>
          <div><img src={require('../img/find/find-2.png')} alt=''/><p>收藏</p></div>
          <div><img src={require('../img/find/find-3.png')} alt=''/><p>隐藏此动态</p></div>
          <div><img src={require('../img/find/find-4.png')} alt=''/><p>不看他的动态</p></div>
          <div><img src={require('../img/find/find-5.png')} alt=''/><p>举报</p></div>
        </Modal>
      </div>
    )
  }
}

export default Find;
