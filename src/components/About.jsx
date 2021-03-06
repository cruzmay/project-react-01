import React from 'react';
import '../styles/components/About.styl';

const About = ({ avatar, name, profession, phone, email, website, address }) => {
    return (
        <>
            <img className="About-image" src={avatar} alt={name} />
            <h1 className='About-title'>{name}</h1>
            <article className='About-item'>
                <p className='item'>{profession}</p>
            </article>
            <article className='About-item'>
                <p className='item'>{phone}</p>
                <p className='item'>{email}</p>
                <p className='item'>{website}</p>
            </article>
            <article className='About-item'>
                <p className='item'>{address}</p>
            </article>
        </>
    )
}
export default About;