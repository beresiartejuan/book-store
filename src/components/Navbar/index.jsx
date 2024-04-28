import useChecker from "../../hooks/useChecker";
import NavbarItems from "./components/NavbarItems";
import CartIcon from "../../icons/CartIcon";
import MenuIcon from "../../icons/MenuIcon";

export default function Navbar() {

    const [is_open, openOrClose] = useChecker();

    return (
        <nav className="bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <button
                    data-collapse-toggle="navbar-sticky"
                    onClick={openOrClose}
                    type="button"
                    className="inline-flex ml-2 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="w-5 h-5" />
                </button>

                <div className="flex px-4 py-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="flex flex-row gap-2 items-center justify-center self-center text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        <CartIcon className="w-6 h-6" />
                        <span className=" font-semibold text-[1rem]">0 Libros</span>
                    </button>
                </div>
                <div
                    className={`${is_open ? "" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <NavbarItems></NavbarItems>
                </div>
            </div>
        </nav>

    )

}