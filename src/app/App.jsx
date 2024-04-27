import { Footer } from '../components/Footer/Footer'
import RoutesAllowed from "./RoutesAllowed";
import Navbar from "../components/Navbar";

export default function App() {

    return (
        <>
            <Navbar></Navbar>
            <RoutesAllowed />
            <Footer />
        </>
    )

}