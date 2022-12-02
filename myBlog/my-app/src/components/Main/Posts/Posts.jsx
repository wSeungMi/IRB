import { Link } from "react-router-dom";
import Category from "../Category/Category";
import Author from "../Author/Author";
import "./posts.css";

export default function Posts({ posts }) {
    return (
        <>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/post/${post.id}`} className="post">
                        <article>
                            <img src={post.thumbnail} alt="" />
                            <div className="contents-wrap">
                                {/* 데이터를 불러왔기때문에 props로 전달 */}
                                <Category category={post.category} />
                                <h3>{post.title}</h3>

                                <Author
                                    userName={post.userName}
                                    profileImg={post.profileImg}
                                    created={post.creatde}
                                />

                                <p className="post-description">
                                    {post.contents[0].text}
                                </p>
                            </div>
                        </article>
                    </Link>
                </li>
            ))}
        </>
    );
}
