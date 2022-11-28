import "./about.css";
import Facebook from "../../../assets/Facebook.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Instagram.svg";
import Github from "../../../assets/Github.svg";

export default function About() {
    return (
        <>
            <aside class="about">
                <h2>About Me</h2>
                <img
                    src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true"
                    alt=""
                    class="user-profile"
                />
                <p class="user-name">Chilli</p>
                <p class="user-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <h3>Categories</h3>
                <ul class="categories">
                    <li>
                        <a href="#">Life</a>
                    </li>
                    <li>
                        <a href="#">Style</a>
                    </li>
                    <li>
                        <a href="#">Tech</a>
                    </li>
                    <li>
                        <a href="#">Sport</a>
                    </li>
                    <li>
                        <a href="#">Photo</a>
                    </li>
                    <li>
                        <a href="#">Develop</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>
                </ul>
                <h3>Follow</h3>
                <ul class="sns">
                    <li>
                        <a href="#">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Github} alt="GitHub" />
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}
