import { Link } from "react-router-dom";

export default function NavbarItem({ href, label }) {

    return (
        <li>
            <Link to={href} className="inline-block min-w-full text-center !px-5 !py-5 text-white hover:bg-gray-700 md:bg-transparent md:p-0 md:text-blue-500">
                {label}
            </Link>
        </li>
    )

}