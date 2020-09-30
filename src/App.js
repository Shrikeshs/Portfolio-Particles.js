import React from 'react';
import { Navigation, Header, Layout, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import Router from './components/routing';
import Particle from 'react-particles-js';
function App() {
  return (
    <div className="App">
      <div>
        <Layout fixedHeader>
          <Header title="Shrikesh" style={{ background: '#ffffff', color: '#000000' }} scroll>
            <Navigation >
              <Link to="/project" style={{ color: '#000000' }}>Project</Link>
              <Link to="/edu" style={{ color: '#000000' }}>Education</Link>
              <Link to="/about" style={{ color: '#000000' }}>About</Link>

            </Navigation>
          </Header>
          <Drawer title="Navigate" style={{ background: '#000000' }}>
            <Navigation>
              <Link to="/project" style={{ color: '#ffffff' }}>Project</Link>
              <Link to="/edu" style={{ color: '#ffffff' }}>Education</Link>
              <Link to="/about" style={{ color: '#ffffff' }}>About</Link>
            </Navigation>
          </Drawer>
          <Content className="body">
            <div id="wrapper">
              <Particle

                params={{
                  particles: {
                    color: {
                      value: "#000000"
                    },
                    line_linked: {
                      color: {
                        value: "#000000"
                      }
                    },
                    number: {
                      value: 80
                    },
                    size: {
                      value: 2
                    }
                  }
                }} />
              <Router />
            </div>

          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
