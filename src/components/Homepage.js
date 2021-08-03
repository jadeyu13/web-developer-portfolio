import {FaLinkedin, FaGithub} from  "react-icons/fa";

const Homepage = () => {
    return (
        <>
        <section className="homepage">
        <div className="overlay">
            <h1>Jade Yu</h1>
            <p>Front-end Web Developer</p>

            <ul>
            <li>
                <a href="https://www.linkedin.com/in/jade-yu-a1b312217/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li>
                <a href="" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </li>
            </ul>

        </div>
        </section>
            
        </>
    )
}

export default Homepage
