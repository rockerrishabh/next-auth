import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

function DashBoard() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      void router.push("/");
    }
  });
  const handleEditor = (content: string) => {
    console.log(content);
  };
  return (
    <div>
      <p>{session?.user.name}</p>
      <p>{session?.user.email}</p>
      <button
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Sign Out
      </button>
      <SunEditor
        onChange={handleEditor}
        defaultValue=""
        setOptions={{
          buttonList: [
            ["undo", "redo", "font", "fontSize", "formatBlock"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "removeFormat",
            ],
            [
              "fontColor",
              "hiliteColor",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "table",
            ],
            [
              "link",
              "image",
              "video",
              "fullScreen",
              "showBlocks",
              "codeView",
              "preview",
              "print",
              "save",
            ],
          ],
        }}
      />
    </div>
  );
}

export default DashBoard;
