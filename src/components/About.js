import React from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
class About extends React.Component {

    clicked()  {
        return (
            <a href="www.google.com"></a>
        )
    };
render(){
     return (
        <div className="Banner">
            <Grid className="aboutGrid">
                <Cell col={6}>
                    <h2>Shrikesh Suresh</h2>
                    <img
                        src="https://user-images.githubusercontent.com/25447240/94702740-b9db5b00-035b-11eb-8b6a-a41144419779.jpg"
                        style={{ height: '200px' }}
                        alt="Im"
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        orem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type
                        specimen book. It has survived not only five
                        centuries, but alsally unchanged
                    </p>



                </Cell>
                <Cell col={6}>
                    <h2>
                        Contact Me!
                    </h2>
                    <hr />
                    <div className="listNames">
                        <List>
                            <ListItem>
                                <ListItemContent className="listAbout">
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    +(91) 9035272098
                                </ListItemContent>
                            </ListItem>

                            <ListItem >
                                <ListItemContent className="listAbout" >
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    shrikeshs98@gmail.com
                                </ListItemContent>
                            </ListItem>
                              <ListItem>
                                <ListItemContent className="listAbout">
                                    <i className="fa fa-skype" aria-hidden="true" />
                                    enter skype ID
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>

                </Cell>
            </Grid>
        </div>
    )
};
}
   

export default About;