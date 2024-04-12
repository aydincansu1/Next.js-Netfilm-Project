import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center fixed bottom-0  left-0 right-0 p-4  z-10 ">
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/aydincansu1" target="_blank">
        Cansu Aydin
      </Link>
    </footer>
  );
};

export default Footer;
