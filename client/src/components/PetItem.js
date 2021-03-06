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
        <span className="item-line">γ£</span>
        <span className="item-age">{item.petuser.petAge}μ΄</span>
        <div className="item-location">π  {item.petuser.location}μ μ΄μμ</div>
        <div className="item-howBig">λ°λ €λλ¬Όμ ν¬κΈ°λ μ΄λ€κ°μ? : {item.petuser.howBig}</div>
        <div className="item-careType">{item.petuser.careType}μ΄ νμν΄μ</div>
        <hr />
        <div className="item-content">μ£Όμμ¬ν­μ΄ μλμ? : {item.petuser.content}</div>
      </div>


      {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>μ₯λ°κ΅¬λ λ΄κΈ°</button> */}
    </div>
  )
}
