import React from 'react';

import Aux from '../../hoc/Aux';

import classes from './Layout.module.scss';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Link } from 'react-router-dom';

import Main from '../Main/Main';

const layout = (props) => (
    <Aux>
        {/* <div>Toolbar, SideDrawer, BackDrop</div> */}
        {/* <Navbar/> */}
        {/* Uses a transparent header that draws on top of the layout's background */}
        <div style={{ height: '300px', position: 'relative' }}>
            <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                <Header transparent title="Title" style={{ color: 'white' }}>
                    <Navigation>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
        <main className={classes.mainLayout}>
            {props.children}
        </main>
    </Aux>
)

export default layout;