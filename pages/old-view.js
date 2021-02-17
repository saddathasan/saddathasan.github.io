import Link from "next/link";
import fs from "fs";
import Head from "next/head";
import { useEffect } from "react";

// const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Home = ({ slugs }) => (
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []),
  (
    <div>
      slugs:
      {slugs.map((slug) => {
        return (
          <>
            <Head>
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>

            <div key={slug}>
              <Link href={"/blog/" + slug}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  )
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Home;
