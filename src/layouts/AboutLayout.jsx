import Main from "./Main";
import Navlist from "./NavList";
import Footer from "./Footer";

export default function AppLayout({children}) {

    return (
        <>
        <Main />
        <Navlist />
        {children}
        <Footer />
        </>
    );
}