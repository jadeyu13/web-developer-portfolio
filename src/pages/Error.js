import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
        <section className="error" style={{display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        flexDirection: "column"}}>
        <h1>Error 404. Page Not Found</h1>



        <Link to="/" style={{backgroundColor: "rgba(1, 84, 69, 0.67)",
    padding: 10, color: "white"}}> Homepage </Link>
        </section>
            
        </>
    )
}

export default Error
