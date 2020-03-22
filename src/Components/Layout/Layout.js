import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';
import { bool } from 'prop-types';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    toggelSideDrawer = () => {
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    trueee = () =>{
        this.setState({showSideDrawer: true})
    }
    render() {
        return (
            <Aux>
                <Toolbar draweToggleClicked={this.toggelSideDrawer}/>
                <SideDrawer
                    closed={this.toggelSideDrawer}
                    open={this.state.showSideDrawer} />
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;