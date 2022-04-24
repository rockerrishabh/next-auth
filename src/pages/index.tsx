import type { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { prisma } from "../../lib/prisma";

interface Posts {
  posts: {
    id: string;
    title: string;
    content: string;
    author: string;
  }[];
}

const Home: NextPage<Posts> = ({ posts }) => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      void router.push("/dashboard");
    }
  });
  return (
    <div className="flex flex-col mx-auto items-center space-y-4">
      {posts.map((post) => (
        <div key={post?.id}>
          <h1>{post.title}</h1>
          <p className="prose">{post.content}</p>
          <h1>{post.author}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      content: true,
      author: true,
    },
  });
  return {
    props: { posts },
  };
};
