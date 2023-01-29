import {Fragment} from 'react';

import apparelImage from '../../assets/apparel.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactProducts</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={apparelImage} alt="A row of shirts"></img>
        </div>
    </Fragment>
};

export default Header;