import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
     <div className='my-3'> 
            <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/07/25/1600x900/Instagram_1670246272938_1690255117611.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
        </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
