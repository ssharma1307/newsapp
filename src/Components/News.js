import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state={
            articles:[],
            loading: false,
            page:1,
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=fb304738285147ebad10678ed043ca99&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})

    }

  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines of today</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:""} description={element.description?element.title:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
            
            
        </div>
        <button type="button" class="btn btn-dark">Previous</button>
        <button type="button" class="btn btn-dark">Next</button>
      </div>
    )
  }
}

export default News
