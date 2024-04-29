import React from 'react'
import '../../Assets/css/Teampage.css'
import head from '../../Assets/json/head.json'
import managing from '../../Assets/json/managing.json'
import executive from '../../Assets/json/executive.json'
import associate from '../../Assets/json/associate.json'
import volunteer from '../../Assets/json/volunteer.json'
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const HeroCards = (props) => {
    let Heros = head;
    let Rank = "Heads";

    const year = props.year;
    if (year === 0) {
        Heros = head;
        Rank = "Head";
    } else if (year === 1) {
        Heros = managing;
        Rank = "Managing";
    } else if (year === 2) {
        Heros = executive;
        Rank = "Executive"
    } else if (year === 3) {
        Heros = associate;
        Rank = "Associate"
    } else {
        Heros = volunteer;
        Rank = "Volunteer";
    }

    return (
        <div className="containert">

            {
                Heros && Heros.map((hero, id) => {
                    return (
                        <>
                            <div className="card" key={id}>
                                <img src={hero.background} alt={hero.name} />
                                <div className="card-content">
                                    <h2>
                                        {hero.name}
                                    </h2>
                                    <div className="tag">
                                        <hr className='text_divider' /> 
                                        <h3>{hero.designation}</h3>
                                    </div>
                                </div>

                                <div className='socialMediaIcons'>
                                                  
                                <div className='icon2'>{(hero.linkedin) ? <a href={hero.linkedin} rel="noreferrer" target="_blank"><AiOutlineLinkedin /></a> : <></>}</div>
                                
                                <div className='icon3'>{(hero.insta) ? <a href={hero.insta} rel="noreferrer" target="_blank"><AiOutlineInstagram /></a> : <></>}</div>
                                <div className='icon1'>{(hero.github) ? <a href={hero.github} rel="noreferrer" target="_blank"><BsGithub /></a> : <></>}</div> 
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default HeroCards