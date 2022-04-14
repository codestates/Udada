import React from 'react'
import { Img } from '../assets/images'

export default function PetItem({ item, handleUser }) {
  console.log(item)

  return (
    <div key={item.id} className="pet-item">
      <div className="item-imgdiv">
        <img className="pet-item-img" src={Img[0]} alt={item.petuser.name}></img>
      </div>
      <div className="item-petdiv" onClick={() => handleUser(item)}>
        <span className="item-name">{item.petuser.name}</span>
        <span className="item-line">ㅣ</span>
        <span className="item-age">{item.petuser.petAge}살</span>
        <div className="item-location">🏠 {item.petuser.location}에 살아요</div>
        <div className="item-howBig">반려동물의 크기는 어떤가요? : {item.petuser.howBig}</div>
        <div className="item-careType">{item.petuser.careType}이 필요해요</div>
        <hr />
        <div className="item-content">주의사항이 있나요? : {item.petuser.content}</div>
      </div>


      {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button> */}
    </div>
  )
}
