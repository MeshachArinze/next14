import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { connectToDatabase } from "../util/mongodb";
// import posts from './api/posts';

type post = {
  _id: number;
  input: string;
  photoUrl: string;
  username: string;
  email: string;
  userImg: string;
  createdAt: string;
  modalPost: boolean;
};

type AppProps = {
  post: Array<post>;
  articles: any[];
};

export async function getData() {
  // const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/home",
  //     },
  //   };
  // }
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find()
    .sort({ timestamp: -1 })
    .toArray();

  const results = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-11-13&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
  )
    .then((result) => result.json())
    .catch((err) => console.log(err));
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return {
    props: {
      
      articles: results.articles,
      posts: posts.map((post: any) => ({
        _id: post._id.toString(),
        input: post.input,
        photoUrl: post.photoUrl,
        username: post.username,
        email: post.email,
        userImg: post.userImg,
        createdAt: post.createdAt,
      })),
    },
  };
}


export default async function Home({ post, articles }: AppProps) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  // const data = await getData()
  const router = useRouter();
  const { status } = useSession();
  if (status === "unauthenticated") {
    return router.push("/home");
  }

  const data = await getData();
  console.log(data);
  // {
  //   required: true,
  //   onUnauthenticated() {
  //     // The user is not authenticated, handle it here.
  //     router.push("/home");
  //   },
  // }
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar src={""} />
          <Feed posts={post} />
        </div>
        <Widgets articles={articles} />
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} src={""}   />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}


// export async function getServerSideProps(
//   context: GetSessionParams | undefined
// ) {
//   // Check if the user is authenticated on the server...
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/home",
//       },
//     };
//   }

//   // Get posts on SSR
//   const { db } = await connectToDatabase();
//   const posts = await db
//     .collection("posts")
//     .find()
//     .sort({ timestamp: -1 })
//     .toArray();

//   // Get Google News API
//   const results = await fetch(
//     `https://newsapi.org/v2/everything?q=tesla&from=2023-11-13&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
//   ).then((res) => res.json());

//   return {
//     props: {
//       session,
//       articles: results.articles,
//       posts: posts.map((post: any) => ({
//         _id: post._id.toString(),
//         input: post.input,
//         photoUrl: post.photoUrl,
//         username: post.username,
//         email: post.email,
//         userImg: post.userImg,
//         createdAt: post.createdAt,
//       })),
//     },
//   };
// }
