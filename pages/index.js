import Link from "next/link";
import PostCard from "./post-cards";

const Home = () => {
  return (
    <div class="cointainer mx-auto">
      <div class="flex justify-evenly item-center flex-row ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <div>
        <div>
          <Link href="pace4life">go to pace4life poc</Link>
        </div>
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
