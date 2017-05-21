import React from 'react';

class News extends React.Component {
  render(){
    var myDate=new Date();
    let today = myDate.toLocaleDateString() ;
    return(
      <div style={{padding:'5vw'}}>
        <div className='clearfix'>
          <img src={require('../img/news/u278.svg')} alt='' style={{float:'left',width:'8vw'}}/>
          <div style={{borderBottom:'1px solid #ccc',marginLeft:'15vw'}}>
            <span>初夏</span><br/>
            <span>在吗?</span>
            <span style={{float:'right'}}>{today}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default News;
