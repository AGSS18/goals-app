import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function Layout() {
    return ( 
        <>
            <Header />
            <Main>
                <Outlet>
                </Outlet>
            </ Main>
            <Footer />
      </>
     );
}

export default Layout;