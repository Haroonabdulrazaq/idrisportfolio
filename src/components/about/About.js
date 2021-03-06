import React from 'react';
import Testimony from "./Testimony";
import Contact from "./Contact";
import aboutData from './data';
import "./about.scss";


const About = () => {
  return (
    <div className="about-wrapper"  id="header-container">
      <header className="banner">
        <div className="banner-text">
          <h1>{aboutData.heading}</h1>
        </div>
      </header>
      <main className="main-parent">
        <div className="three-tier">
          <article className="tier image-desc">
            <div className="desc-img"></div>
            <div className="desc-text">
             {aboutData.dress}
            </div>
          </article>
          <article className="tier text-desc">
            <h2 className="tier-headings">
              About Jimoh Idris
            </h2>
            <div>
              {aboutData.about}
            </div>
          </article>
          <article className="tier capabilities">
            <div className="cap digital-capabilities">
              <h2 className="tier-heading" > Digital Capabilities </h2>
              {aboutData.digital.map((capability, index)=> {
                return (<div className="capability" key={index}>
                  <p>{capability}</p>
                </div>)
              })}
            </div>
            <div className="cap clients">
              <h2 className="tier-heading"> Clients and collaborators </h2>
              <div className="digital-capabilities">
                {aboutData.clients.map((client, index)=> {
                  return (<div className="capability" key={index}   >
                    <p>{client}</p>
                  </div>)
                })}
              </div>
            </div>
          </article>
        </div>
        <Testimony testimonies={aboutData.testimonies} />
        <Contact/>
      </main>
    </div>
  )
}

export default About;
