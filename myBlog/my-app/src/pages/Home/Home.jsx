import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Main />
            <Footer />
            {/* {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))} */}
        </>
    );
}
