import Login from "../../../assets/icon-login.svg";
import Register from "../../../assets/icon-register.svg";

export default function Logout() {
    return (
        <>
            <li>
                <a href="#" class="button gray">
                    <img src={Login} alt="" />
                    <span>Login</span>
                </a>
            </li>
            <li class="only-pc">
                <a href="#" class="button gray">
                    <img src={Register} alt="" />
                    <span>Register</span>
                </a>
            </li>
        </>
    );
}
