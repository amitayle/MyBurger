import React from 'react'

import NavigationItem from './NavigationItem/Navigationitem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active >Burger Bilder</NavigationItem>
        <NavigationItem link='/'>Checkuout</NavigationItem>
    </ul>

);
export default navigationItems;