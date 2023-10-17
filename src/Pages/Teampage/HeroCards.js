import React from 'react'
import '../../Assets/css/Teampage.css'
import Final from '../../Assets/json/Final.json'
import Third from '../../Assets/json/Third.json'
import Second from '../../Assets/json/Second.json'
import First from '../../Assets/json/First.json'
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const HeroCards = (props) => {
    let Heros = Final;
    let Rank = "Batch 2023";

    const year = props.year;
    if (year === 2) {
        Heros = Second;
        Rank = "Batch 2025";
    } else if (year === 1) {
        Heros = First;
        Rank = "Batch 2026";
    } else if (year === 0) {
        Heros = Final;
        Rank = "Batch 2023"
    } else if (year === 3) {
        Heros = Third;
        Rank = "Batch 2024"
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