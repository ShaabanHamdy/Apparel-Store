import { useAppContext } from "../context/Context";

const LINKS = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Clearance", href: "#" },
];

const NavLinks = () => {
  const { state } = useAppContext();

  return (
    <>
      {LINKS.map((link) => (
        <a
          // style={style}
          key={link.label}
          href={link.href}
          className={`px-3 py-1 rounded font-medium transition
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white  hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-200 "
    }
  `}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
