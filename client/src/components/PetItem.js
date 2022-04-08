import React from 'react'

export default function PetItem({ item }) {

  return (
    <div key={item.id} className="pet-item">
        <div className="item-imgdiv">
            <img className="pet-item-img" src={item.img} alt={item.name}></img>
        </div>
        <div className="item-petdiv">
            <span className="item-name">{item.name}</span>
            <span className="item-line">ㅣ</span>
            <span className="item-age">{item.petage}살</span>
            <div className="item-location">🏠 {item.location}에 살아요</div>
            <div className="item-howBig">반려동물의 크기는 어떤가요? : {item.howBig}</div>
            <div className="item-careType">{item.careType}이 필요해요</div>
            <hr/>
            <div className="item-content">주의사항이 있나요? : {item.content}</div>
        </div>


      {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button> */}
    </div>
  )
}
