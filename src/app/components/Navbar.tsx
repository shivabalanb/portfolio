import Link from "next/link";

const links = ["home", "experience", "projects", "contact"];

const Navbar = () => {
  return (
    <div className="fixed  m-auto w-full flex justify-center my-4 z-50">
      <ul className="bg-blue-200 bg-opacity-75 backdrop-blur-sm backdrop-filter p-2 flex gap-4 rounded-full px-6">
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
