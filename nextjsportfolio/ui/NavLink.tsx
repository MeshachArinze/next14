import Link from "next/link";
type Props = { href: string; text: string };
const NavLink = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      passHref
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white"
    >
      {text}
    </Link>
  );
};

export default NavLink;
