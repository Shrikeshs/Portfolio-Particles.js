import React from 'react'
import { Cell, Grid } from 'react-mdl'
import '../App.css';



function Home() {

    return (

        <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>



            <Grid className='landing-grid'>
                <Cell col={12}>

                    <img src="https://user-images.githubusercontent.com/25447240/94701363-32d9b300-035a-11eb-8fd3-245a5e14753b.jpg"
                        alt="kkkk"
                        className="ImgAvatar"
                    />
                    <div className="BannerText">
                        <h1> Full Stack Web Developer/ Mobile Application Developer
                        </h1>
                        <hr className="divide" />
                        <p>
                            Android | React | HTML| CSS | React Native | MongoDb | Express Js | VueJs
                        </p>
                        <div className="serial-links">
                            <a href="//www.google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin" aria-hidden="true" />
                            </a>
                            <a href="//www.google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/Shrikeshs" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
export default Home;