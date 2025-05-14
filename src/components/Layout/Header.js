import React, {Fragment} from "react";
import headerphoto from '../../assets/header-photo.png'
import classes from './Header.module.css'
import CartButton from "./CartButton";

const Header=()=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={headerphoto} alt="A table of food"/>
            </div>
        </Fragment>
    )
}

export default Header;