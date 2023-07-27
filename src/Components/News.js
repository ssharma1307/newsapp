import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import App from '../App';


const News=(props)=> {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    News.defaultProps = {
        country: 'ca',
        pageSize: 8, 
        category: 'general',
      }

      News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }
    const capitalizeFirstLetter= (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // document.title =`News Nerd-${this.capitalizeFirstLetter(props.category)} news`;
    const updateNews=async ()=>{ 
      props.setProgress(0);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setloading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setarticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setloading(false)
      props.setProgress(100);
    }
   useEffect(() => {
    updateNews();  
    // eslint-disable-next-line
  }, [])
   
    
    const fetchMoreData = async() => {
      
      
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setpage(page+1)
      let data = await fetch(url);
      let parsedData = await data.json();
      setarticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults)
       
     
    };


 
    return (
      <>
      
        <h1 className='text-center my-5' style={{marginTop:'90px'}}>Top {capitalizeFirstLetter(props.category)} Headline </h1>
        {loading && <Spin />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spin/>}>  
       
        <div className="container">
          <div className="row">
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.title:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
          </div>
        </div>
        </InfiniteScroll>

       </>
    )
  }
 


export default News
