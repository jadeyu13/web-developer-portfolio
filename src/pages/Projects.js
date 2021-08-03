import { useState } from "react";
import { projects } from '../data/projects'
import { FaGithub } from "react-icons/fa";

const Projects = () => {
// eslint-disable-next-line
  const [cards, setCards] = useState(projects)
    return (
        <>
          <section className="projects">
            <h1> Projects Page</h1>
            <div className="cards">

              {cards.map(({id, title, desc,image}) => (
              <article key={id}>
              <img src={image} alt={title} />
                <h4>{title}</h4>
                  <p>{desc}</p>
                  <ul>
                  <li><a className="github" href="https://github.com/jadeyu13/todo-list-app" target="_blank" rel="noopenner noreferrer">
                    <FaGithub style={{marginRight: 5}} />Code</a></li>
                  
                  </ul>
              </article>
              ))}

            
              </div> 
          </section>
        </>
    )
}

export default Projects
