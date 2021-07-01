import { FaPhone, FaEnvelope } from "react-icons/fa"

const Contacts = () => {
    return (
        <>
        
            <section className="contacts">
            <h1>Contact Me</h1>
        <ul >
            <li><a href="tel:04155133516"><FaPhone style={{marginRight: 5}} />{" "}(415)513-3516</a></li>
    <li><a href="mailto:jadeyuzhong@gmail.com"><FaEnvelope style={{marginRight: 5}} />{" "}jadeyuzhong@gmail.com</a></li>
        </ul>
            </section>
        </>
    )
}

export default Contacts
