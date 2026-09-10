import Link from "next/link";

const links = ["home", "experience", "projects", "contact"];

const Navbar = () => {
  return (
    <div className="fixed m-auto w-full flex justify-center my-4 z-50">
      <ul className="relative py-2 px-6 flex gap-6 rounded-full backdrop-blur-md bg-blue-100/70 border border-blue-200/60 shadow-sm text-xs sm:text-sm font-medium text-blue-900">
        {links.map((li) => (
          <Link key={li} href={`#${li}`} className="capitalize hover:text-blue-950 transition-colors">
            {li}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
