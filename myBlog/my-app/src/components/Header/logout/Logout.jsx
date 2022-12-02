import { Link } from "react-router-dom";
import imgIconLogin from "../../../assets/icon-login.svg";
import imgIconRegister from "../../../assets/icon-register.svg";
import "./logout.css";

export default function logout() {
    return (
        <>
            <li>
                <Link to="#" className="button gray">
                    <img src={imgIconLogin} alt="" />
                    <span>Login</span>
                </Link>
            </li>
            <li className="only-pc">
                <Link to="#" className="button gray">
                    <img src={imgIconRegister} alt="" />
                    <span>Register</span>
                </Link>
            </li>
        </>
    );
}
