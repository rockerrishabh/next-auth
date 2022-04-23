import { sign } from "crypto";
import type { NextPage, NextPageContext } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [contact, setContact] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });

  async function create(data: ContactData) {
    try {
      fetch("http://localhost:3000/api/contact/create", {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      }).then(() => setContact({ name: "", email: "", message: "" }));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: ContactData) => {
    try {
      create(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditor = (content: string) => {
    console.log(content);
  };

  return (
    <>
      <div className="items-center space-y-4 justify-center flex flex-col">
        <Head>
          <title>Next JS Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {status === "loading" && (
          <div className="flex justify-center item-center mx-auto min-h-screen">
            Loading....
          </div>
        )}
        {session ? (
          <div className="flex flex-col w-full">
            <div className="flex justify-between p-10">
              <div>{session.user.name}</div>
              <div>{session.user.email}</div>
              <Image
                height="40px"
                width="40px"
                src={session.user.image as string}
                alt=""
                className="rounded-full"
              />
            </div>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                signIn("google", { callbackUrl: "/" });
              }}
            >
              Sign In
            </button>
          </div>
        )}
        <div className="mx-auto space-y-6 flex justify-center item center my-auto flex-col">
          <h1 className="mx-auto mt-20">Contact Us</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(contact);
            }}
          >
            <div className="flex space-y-1 flex-col">
              <label htmlFor="name" className="cursor-pointer">
                Name
              </label>
              <input
                id="name"
                type="name"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                placeholder="Enter your Name"
                className="outline-none border-2 p-1 mx-auto border-gray-800 rounded-md focus:border-0 focus:ring-2 ring-blue-600"
              />
            </div>
            <div className="flex space-y-1 flex-col">
              <label htmlFor="email" className="cursor-pointer">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                placeholder="Enter your Email Address"
                className="outline-none border-2 p-1 mx-auto border-gray-800 rounded-md focus:border-0 focus:ring-2 ring-blue-600"
              />
            </div>
            <div className="flex space-y-1 flex-col">
              <label htmlFor="message" className="cursor-pointer">
                Message
              </label>
              <textarea
                id="message"
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                placeholder="Enter your Message"
                className="outline-none border-2 p-1 w-full border-gray-800 rounded-md focus:border-0 focus:ring-2 ring-blue-600"
              />
            </div>
            <input
              type="Submit"
              className="cursor-pointer px-4 py-3 w-full mt-4 hover:bg-blue-500 bg-blue-600 text-white rounded-md"
            />
          </form>
        </div>
        <div className="flex w-full">
          <SunEditor
            onChange={handleEditor}
            defaultValue=""
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
