import React from 'react'
import shanshan from '../images/cs.jpg'



export default function Blurb({ title, children, img }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
          <img src={shanshan} alt="Tania" className="avatar" />
        </div>
      </div>
    </section>
  )
}