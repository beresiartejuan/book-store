import NavbarItem from "./NavbarItem"

export default function NavbarItems() {

    return (
        <ul className="flex flex-col font-medium border rounded-lg rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <NavbarItem href="" label="Home" />
            <NavbarItem href="" label="Books" />
            <NavbarItem href="" label="Authors" />
        </ul>
    )

}