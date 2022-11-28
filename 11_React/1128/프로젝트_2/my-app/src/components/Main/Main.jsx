import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

export default function Main() {
    const { isLogin } = useContext(UserContext);
    const [posts, setPosts] = useState();

    // axios나 fetch는 useEffect로 감싸준다! (안그러면 무한반복 일어남)
    useEffect(() => {
        axios
            .get(
                "https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json"
            )
            .then((json) => {
                // console.log(json);
                console.log(json.data);
                setPosts(json.data);
            });
    }, []);

    return (
        <main>
            {posts === undefined ? (
                <></>
            ) : (
                <div className="max-width">
                    <h2 className="a11y-hidden">Post</h2>
                    <ul className="posts">
                        {/* components array로 생성 */}
                        <Posts posts={posts} />
                        {posts.map}
                    </ul>
                    {isLogin ? <About /> : <></>}
                </div>
            )}
        </main>
    );
}
