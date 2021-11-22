// Code MovieReviews Here
import React from 'react'

function MovieReviews({headline, byline, link, summary_short}) {
  
  MovieReviews.defaultProps = {
    reviews: []
  }

  const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(review)}</div>;
  
  return (
    <div className="review" key={ headline }>

      <header>
        <a className="review-link" href={ link.url }>{ headline }</a>
        <br/>
        <span className="author">{ byline }</span>
        <div>{ summary_short }</div>
      </header>

    </div>
  )
}

export default MovieReviews;