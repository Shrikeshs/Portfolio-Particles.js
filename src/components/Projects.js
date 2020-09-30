import React from 'react';
import { Tab, Tabs,Grid, Cell } from 'react-mdl';
import "../App.css";
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCategories() {
        if(this.state.activeTab === 0)
         {
             return(
                 <div>
                     <h1>This is React</h1>
                 </div>
             )
         }
         else if( this.state.activeTab === 1)
         {
            return(
                <div>
                    <h1>This is React Native</h1>
                </div>
            )
         }
          else if( this.state.activeTab === 2)
         {
            return(
                <div>
                    <h1>This is Andriod</h1>
                </div>
            )
         }
          else if( this.state.activeTab === 3)
         {
            return(
                <div>
                    <h1>This is Puthon</h1>
                </div>
            )
         }
    }    


    render() {
        return (

            <div className="category-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple
                    className="tabText"
                >
                    <Tab >React</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Andriod</Tab>
                    <Tab>Python</Tab>
                </Tabs>
                <section className="grid">
                    <Grid className="grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
                </section>
            </div>
        )
    }

}

export default Projects;