import React from 'react';
import { useRef } from 'react';

import './Contacts.css';
import emailjs from 'emailjs-com';


import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9dpmvlm', 'template_ghj1qvg', form.current, 'DSzuxKYt0ZG0asjaU')

        e.target.reset();
      };
    

    return (  
        <section id='contact'>
            <h5> Entre em Contato </h5>
            <h2> Comigo </h2>

            <div className="container contact__container"> 
            <div className="contact__options">
                <article className="contact__option">
                    <HiOutlineMail className='contact__option-icon'/>
                    <h4>E-mail</h4>
                    <h5>lucas_souza.s11@hotmail.com</h5>
                    <a href="mailto:lucasdesouzasilva112@gmail.com" target="_blank">Me envie um e-mail</a>
                </article>
                <article className="contact__option">
                    <AiOutlineWhatsApp className='contact__option-icon'/>
                    <h4>Whatsapp</h4>
                    <h5>(34) 99246-****</h5>
                    <a href="https://api.whatsapp.com/send?phone=5534992461158" target="_blank">Me envie uma mensagem</a>
                </article>
                <article className="contact__option">
                    <FaLinkedin className='contact__option-icon'/>
                    <h4>Linkedin</h4>
                    <h5>Lucas de Souza</h5>
                    <a href="https://www.linkedin.com/in/lucas-de-souza-silva-227185211/" target="_blank">Me envie uma mensagem</a>
                </article>

            </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='nome' placeholder='Escreva seu Nome Completo' required/>
                    <input type="email" name='email' placeholder='Escreva seu E-mail' required />
                    <textarea name="message" rows="7" placeholder='Digite sua mensagem aqui' required></textarea>
                    <button type='submit'className='btn btn-primary'> Enviar Mensagem </button>
                </form>
            </div>

        </section>
    );
}
 
export default Contacts;