import React from 'react';


function HomeContainer({ petUserInfo, petSitterInfo }) {
    //petUser의 review들만 모아둔 배열
    let petUserReviews = petUserInfo.map((el) => {
        return el.review;
    })

    let petSitterReviews = petSitterInfo.map((el) => {
        return el.review;
    })


    return (
        <div id="main-container">
            <div id="main-body">
                <div id="main-title">소개글</div>

                <div id="main-reviews">고객 만족 후기들...
                    {petUserReviews.map((review) => <div id="review-card">{review}</div>)}
                </div>
                <div id="main-reviews">시터 만족 후기들...
                    {petSitterReviews.map((review) => <div id="review-card">{review}</div>)}
                </div>
            </div>
        </div>
    );
}

export default HomeContainer;