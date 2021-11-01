import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header: React.FC = (props) => {
    return (
        <header className={styles.header}>
            <h1>Petar Lethics</h1>
            <HeaderButton text={"Sign up"} />
            <HeaderButton text={"Log in"}/>
        </header>
    )
}

export default Header;