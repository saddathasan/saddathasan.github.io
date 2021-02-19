import Link from "next/link";
import PostCard from "./post-cards";

const Home = () => {
  return (
    <div>
      <PostCard />
      <div>
        <div>
          <p />
        </div>
        <div>
          <Link href="old-view">go to old blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
