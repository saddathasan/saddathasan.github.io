import Link from "next/link";
import fs from "fs";
import Head from "next/head";
import { useEffect } from "react";

// const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Home = ({ slugs }) => (

  //==========useEffect============

  // useEffect(() => {
  //   if (window.netlifyIdentity) {
  //     window.netlifyIdentity.on("init", (user) => {
  //       if (!user) {
  //         window.netlifyIdentity.on("login", () => {
  //           document.location.href = "/admin/";
  //         });
  //       }
  //     });
  //   }
  // }, []),

  //==========useEffect============

  (
    <div>
      slugs:
      {slugs.map((slug) => {
        return (
          <>
            {/* <Head>
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head> */}

            {/* <div key={slug}>
              <Link href={"/blog/" + slug}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div> */}

            {/* ====================================== */}
            <div class="cointainer mx-auto">
              <div class="flex justify-evenly item-center flex-row ">
                <div
                  class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg"
                  key={slug}
                >
                  <div id="header" class="flex items-center mb-4">
                    <img
                      alt="avatar"
                      class="w-20 rounded-full border-2 border-gray-300"
                      src="https://picsum.photos/seed/picsum/200"
                    />
                    <div id="header-text" class="leading-5 ml-6 sm">
                      <Link href={"/blog/" + slug}>
                        <h4 id="name" class="text-xl font-semibold">
                          {slug}
                        </h4>
                      </Link>

                      <h5 id="job" class="font-semibold text-blue-600">
                        Designer
                      </h5>
                    </div>
                  </div>
                  <div id="quote">
                    <q class="italic text-gray-600">
                      this will be the first few lines of the blog
                    </q>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================================== */}
          </>
        );
      })}
      <div>
        <p> </p>
        <Link href="/"> Go Back </Link>
      </div>
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
