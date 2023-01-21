import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis ea tempora exercitationem recusandae incidunt consequuntur sunt eligendi quibusdam esse a veniam nam autem repellendus nemo illum vero reprehenderit ipsa earum voluptate fugiat fuga? Consequatur.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About