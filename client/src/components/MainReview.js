import React from 'react'

export default function MainReview({ review }) {

    return (
        <div key={review.id} className="main-review">
            {/* <div classimg className="main-review-img" src={랜덤프로필이모지} alt={review.name}></img> */}
            <span span className="main-review-name" data-testid={review.id}> {review}</span >
        </div >
    )
}