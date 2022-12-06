import './home.css'
import { Social } from '../../components/social'
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

export default function Home(){
    return(
        <div className="home-container">
            <h1>Sujeito Programador</h1>
            <span>Veja meus links 👇 </span>
         <main className="links">
            <section className="link-area">
                <a href="#">
                    <p className="link-text">Canal no Youtube</p>
                </a>
            </section>

            <section className="link-area">
                <a href="#">
                    <p className="link-text">Grupo privado no telegram</p>
                </a>
            </section>

            <section className="link-area">
                <a href="#">
                    <p className="link-text">Treinamento Fabrica de Aplicativos</p>
                </a>
            </section>
            <footer>
                <Social url="https://facebook.com/sujeitoprogramador">
                    <FaFacebook size={35} color="#FFF" />
                </Social>

                <Social url="https://youtube.com/c/sujeitoprogramador">
                    <FaYoutube size={35} color="#FFF" />
                </Social>

                <Social url="https://instagram.com/sujeitoprogramador">
                    <FaInstagram size={35} color="#FFF" />
                </Social>
            </footer>
         </main>
        </div>
    )
}