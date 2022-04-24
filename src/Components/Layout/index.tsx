import { useSession } from "next-auth/react";
import DashBoardFooter from "./backend/DashBoardFooter";
import DashBoardHeader from "./backend/DashBoardHeader";
import Footer from "./client/Footer";
import Header from "./client/Header";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <header>
            <DashBoardHeader />
          </header>
          <main>{children}</main>
          <footer>
            <DashBoardFooter />
          </footer>
        </>
      ) : (
        <>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}

export default Layout;
