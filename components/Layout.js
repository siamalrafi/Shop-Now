import Footer from "./File/Footer";
import Navbar from "./File/Navbar";

function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer>
            </Footer>
        </div>
    );
}

export default Layout;