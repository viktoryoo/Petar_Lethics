import styles from "./HeaderButton.module.css"

const HeaderButton: React.FC<{ text: string }> = (props) => {
    return (
        <button className={styles.button}>
            {props.text}
        </button>
    )
}

export default HeaderButton;