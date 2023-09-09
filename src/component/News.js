// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc71f3dff74248bcacb7924e14a4dd5f
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

  constructor(){
    super();
    console.log("This is a constructor component.");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews(pagenum = 1){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc71f3dff74248bcacb7924e14a4dd5f&page=${pagenum}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
    });
    console.log(this.state);
  }

  async componentDidMount(){
    this.updateNews();
  }

  handleNextClick = async() =>{
    this.setState({page: this.state.page + 1});
    this.updateNews(this.state.page + 1);
  }

  handlePreviousClick = async() =>{
    this.setState({page: this.state.page - 1});
    this.updateNews(this.state.page - 1);
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>RiyalNews - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
          </div>
          })}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button disabled={this.state.page<=1} className="btn btn-primary me-md-2" type="button" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" type="button" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        </div>
    )
  }
}

export default News