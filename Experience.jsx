import React from 'react';

import './Experience.css';

import{HiBadgeCheck} from 'react-icons/hi';


const Experience = () => {
    return ( 
        <section id='experience'> 
        <h5> Acompanhe algumas das</h5>
        <h2> Minhas experiências </h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3> Desenvolvimento Frontend</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>HTML</h4>
                        <small className='text-light'>Avançado</small>
                    </article>
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediário</small>
                    </article>
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Intermediário</small>
                    </article>
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>React</h4>
                        <small className='text-light'>Intermediário</small>
                    </article>
                </div>

                {/* FIM DO FRONTED */}

            </div>
            <div className="experience__backend">
            <h3> Desenvolvimento Backend</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>MySQL</h4>
                        <small className='text-light'>Intermediário</small>
                    </article>
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>Delphi</h4>
                        <small className='text-light'>Intermediário</small>
                    </article>
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>PHP</h4>
                        <small className='text-light'> Intermediário</small>
                    </article>
                    <article className='experience__details'>
                        <HiBadgeCheck className='experience__details-icon'/>
                        <h4>Node JS</h4>
                        <small className='text-light'>Intermediário</small>
                    </article>
                </div>

            </div>
        </div>
        </section>
     );
}
 
export default Experience;