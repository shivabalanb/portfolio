import Link from "next/link";

const links = ["home", "experience", "projects", "contact"];

const Navbar = () => {
  return (
    <div className="fixed  m-auto w-full flex justify-center my-4 z-50">
      <ul className="relative p-2 flex gap-6  px-8 backdrop-blur bg-blue-300/50 shadow-sm">
        {links.map((li, index) => (
          <Link key={index} href={`#${li}`}>
            {li}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
