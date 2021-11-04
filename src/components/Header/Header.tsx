import HeaderButton from "./HeaderButton";
import {NavLink} from "react-router-dom";

const Header: React.FC = (props) => {
    return (
        <header className="flex w-full h-20 justify-between bg-green-700 text-white px-10 items-center">
            <div className="flex">
                <h1 className="font-extrabold text-5xl">Petar Lethics</h1>
            </div>
            <nav className="flex">
                <ul className="flex m-0 p-0">
                    <li className="ml-6">
                        <NavLink to="/coaching">
                            Coaching
                        </NavLink>
                    </li>
                    <li className="ml-6">
                        <NavLink to="/motivation">
                            Motivation
                        </NavLink>
                    </li>
                    <li className="ml-6">
                        <NavLink to="/nutrition">
                            Nutrition
                        </NavLink>
                    </li>
                    <li className="ml-6">
                        <NavLink to="about">
                            About
                        </NavLink>
                    </li>
                    <li className="ml-6">
                        <HeaderButton text={"Sign up"}/>
                    </li>
                    <li className="ml-6">
                        <HeaderButton text={"Log in"}/>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;