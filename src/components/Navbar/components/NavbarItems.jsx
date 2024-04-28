import NavbarItem from "./NavbarItem"

export default function NavbarItems() {

    return (
        <ul className="flex flex-col font-medium border text-center rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-950 border-gray-700">
            <NavbarItem href="/" label="Home" />
            <NavbarItem href="/books" label="Books" />
            <NavbarItem href="/authors" label="Authors" />
        </ul>
    )

}