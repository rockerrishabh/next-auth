import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      void router.push("/dashboard");
    }
  });
  return (
    <>
      {!session && (
        <div>
          <button
            onClick={() => {
              signIn("google", { callbackUrl: "/dashboard" });
            }}
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
}

export default SignIn;
