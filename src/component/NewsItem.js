import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsurl, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageurl?imageurl:"https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0&h=180"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title.length >= 40 ? title+".." : title}</h5>
              <p className="card-text">{description.length >= 80 ? description+".." : description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
              <a href={newsurl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Read more..</a>
            </div>
        </div>
    </div>
    )
  }
}
//target in line 14 is used to open link in another tab and rel is used to eliminate the warning that comes up when using target alone.

export default NewsItem