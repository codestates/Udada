import React from 'react'

export default function SitterItem({ item }) {

  return (
    <div key={item.id} className="item">
        <div className="item-imgdiv">
            <img className="item-img" src={item.img} alt={item.name}></img>
        </div>
        <div className="item-infodiv">
            <div className="item-name">{item.name}</div>
            <div className="item-age">{item.age}세</div>
            <div className="item-location">{item.location}</div>
            <div className="item-license">{item.license}</div>
            <div className="item-content">{item.content}</div>
        </div>


      {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button> */}
    </div>
  )
}
