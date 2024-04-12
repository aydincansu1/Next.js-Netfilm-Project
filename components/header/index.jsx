import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className="p-5  ">
      <div className="header"></div>
      <div className="flex items-center justify-between ">
        <Link
          href="/"
          className="flex items-center gap-2 text-[24px] font-bold tracking-[-1px] text-white "
        >
          <FaPlayCircle />
          NETFILMS
        </Link>
        <nav className="flex gap-12 text-[#fafafa] font-medium">
          <Link href="/">MOVIES</Link>
          <Link href="/">SERIES</Link>
          <Link href="/">KIDS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
