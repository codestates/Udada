import React from 'react'
import { Img } from "../assets/images"

export default function SitterItem({ item , handlePetSitter}) {
  // console.log(item)
  if (item.petsitter) {
    return (
      <div key={item.id} className="item" onClick={() => handlePetSitter(item)}>
          <div className="item-imgdiv">
              <img className="item-img" src={Img[1]} alt={"등록되지 않았습니다."}></img>
          </div>
          <div className="item-infodiv">
              <div className="item-name">{item.petsitter.name}</div>
              <div className="item-age">{item.petsitter.age}세</div>
              <div className="item-location">{item.petsitter.location}</div>
              <div className="item-license">{item.petsitter.license? "보유" : "미보유"}</div>
              <div className="item-content">{item.petsitter.content}</div>
          </div>
  
  
        {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button> */}
      </div>
    )
  } else {
    return (
      <div key={item.id} className="item" onClick={() => handlePetSitter(item)}>
          <div className="item-imgdiv">
              <img className="item-img" src={Img[1]} alt={"등록되지 않았습니다."}></img>
          </div>
          <div className="item-infodiv">
              <div className="item-name">{item.name}</div>
              <div className="item-age">{item.age}세</div>
              <div className="item-location">{item.location}</div>
              <div className="item-license">{item.license? "보유" : "미보유"}</div>
              <div className="item-content">{item.content}</div>
          </div>
  
  
        {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button> */}
      </div>
    )  
  }
}
