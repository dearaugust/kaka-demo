import React from 'react';
import { Carousel } from 'antd';
import Icon from 'antd/lib/icon';

import Swiper from 'swiper/dist/js/swiper.min.js';

class Home extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      slidesPerView : 2,
      spaceBetween : 5
    })
    var mySwiper1 = new Swiper('.swiper-container1', {
      direction: 'horizontal',
      loop: false,
      slidesPerView : 2.5,
      spaceBetween : 5
    })
  }
  render(){
    return(
      <div className='home-wrap' style={{width:'100vw'}}>
        <Carousel style={{overflow:'hidden'}}>
          <div className='banner-up'>
            <img src={require('../img/home/u584.jpg')} style={{width:'100%'}} alt=''/>
            <img className='banner-down' src={require('../img/home/u590.png')} alt=''/>
          </div>
          <div><img src={require('../img/home/u586.jpg')} style={{width:'100%'}} alt=''/></div>
          <div><img src={require('../img/home/u588.jpg')} style={{width:'100%'}} alt=''/></div>
        </Carousel>
        <div>
          <h4>— 最新任务 —</h4>
          <div style={{paddingLeft:'5px',paddingRight:'5px'}} className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <p>想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况...</p>
                <img src={require('../img/home/chen_xx___u105.svg')} alt='' style={{width:'8vw',float:'left',marginRight:'10px'}}/>
                <div>
                  <span>chen xx</span>&nbsp;<img src={require('../img/home/u110.svg')} alt=''/><br/>
                  <img src={require('../img/home/u116.svg')} alt=''/><span>上海浦东新区</span>
                </div>
              </div>
              <div className="swiper-slide">
                <img src={require('../img/home/u487.png')} alt=''/>
              </div>
              <div className="swiper-slide">
                <img src={require('../img/home/u487.png')} alt=''/>
              </div>
            </div>
          </div>
        </div>
        <div style={{paddingLeft:'5px',paddingRight:'5px'}} className='today'>
          <h4>— 今日推荐 —</h4>
          <div className="swiper-container1" style={{overflow:'hidden'}}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img style={{height:'15vh'}} src={require('../img/home/u539.jpg')} alt=''/>
              </div>
              <div className="swiper-slide">
                <img style={{height:'15vh'}} src={require('../img/home/u541.jpg')} alt=''/>
              </div>
              <div className="swiper-slide">
                <img style={{height:'15vh'}} src={require('../img/home/u543.jpg')} alt=''/>
              </div>
            </div>
          </div>
          <div>
            <p>所罗门-R-古根海美术馆(The-Solomon R.Guggenheim Museun)</p>
            <a href="#">古根海娒美术馆</a>
            <div>
              <a href='#'><Icon type="eye" />&nbsp;666</a>&nbsp;&nbsp;
              <a href='#'><Icon type="heart" style={{color:'red'}}/>&nbsp;666</a>&nbsp;&nbsp;
              <a href='#'><Icon type="message" />&nbsp;666</a>&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
