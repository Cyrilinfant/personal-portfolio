import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const[toggleState , settoggleState]=useState(1);

  const toogleTab =(index) =>{
    settoggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={()=> toogleTab(1)}>

            

            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__Button qualification__active button--flex" : "qualification__button  button--flex"}  onClick={()=> toogleTab(2)}>

          

            <i className="uil uil-book-alt qualification__icon"></i>
             Additional  Course
          </div>
        </div>
        <div className="qualification__sections">
          <div className={toggleState ===1 ? "qualification__content qualification__content-active" : "qualification__content "}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.com C.S</h3>
                <span className="qualification__subtitle">Loyola College-Chennai</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018-2021
                </div>
                

                

              </div>
            </div>

            
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Besant Technologies-Chennai</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023-2024
                </div>

                

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification
