import React from 'react'
import { Img } from '../assets/images'

export default function SitterItem({ item, handlePetSitter }) {

  return (
    <div key={item.id} className="item">
      <div className="item-imgdiv">
        <img className="item-img" src={Img[1]} alt={item.petsitter.name}></img>
      </div>
      <div className="item-infodiv" onClick={() => handlePetSitter(item)}>
        <div className="item-name">{item.petsitter.name}</div>
        <div className="item-age">{item.petsitter.age}세</div>
        <div className="item-location">{item.petsitter.location}</div>
        <div className="item-license">{item.petsitter.license}</div>
        <div className="item-content">{item.petsitter.content}</div>
      </div>


      {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button> */}
    </div>
  )
}
