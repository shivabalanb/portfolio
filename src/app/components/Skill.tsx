const skillMap: { [key: string]: string } = {
  "Next.JS": " bg-green-200",
  React: " bg-blue-200",
  Tailwind: " bg-red-200",
  Prisma: " bg-purple-200",
  MongoDB: " bg-cyan-200",
  "Framer Motion": " bg-pink-200",
  "ThirdWeb SDK": " bg-indigo-200",
  Solidity: " bg-lime-200",
};

const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className={`${skillMap[skill]} p-2 rounded-md w-fit bg-`}>{skill}</div>
  );
};
export default Skill;
