import headerCss from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
const Header = (props) => {
    return (
        <>
            <header className={headerCss.header}>
                <h1>Food Ordering</h1>
                <button>Cart</button>
            </header>
            <div className={headerCss['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food"/>
            </div>
        </>
    );
}

export default Header;