const HeaderButton: React.FC<{ text: string }> = (props) => {
    return (
        <button className="text-black bg-red-800 hover:bg-red-400 rounded-full py-1 px-2 items-center animate-bounce">
            {props.text}
        </button>
    )
}

export default HeaderButton;