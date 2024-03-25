import React, { useEffect } from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import AboutUs from '../data/about-us.json';


export default function About() {
  useEffect(() => {
    document.title = `À propos - Kasa`;
  });

  return (
    
    <React.Fragment>
     <Navigation/>
      <main>
        <Banner />
        <section className="collapse">
          {AboutUs.map((about, index) => (
            <Collapse
              key={about.title + index}
              title={about.title}
              description={about.description}
            />
          ))}
        </section>
      </main>
    </React.Fragment>
  );
}
