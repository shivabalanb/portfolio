const skillMap: Record<string, string> = {
  "Next.JS": "bg-green-200",
  React: "bg-blue-200",
  Tailwind: "bg-red-200",
  Prisma: "bg-purple-200",
  MongoDB: "bg-cyan-200",
  "Framer Motion": "bg-pink-200",
  "ThirdWeb SDK": "bg-indigo-200",
  Solidity: "bg-lime-200",
  Clerk: "bg-emerald-300",
  Shadcn: "bg-amber-300",
  Foundry: "bg-orange-200",
  "Stream SDK": "bg-rose-200",
  Axum: "bg-yellow-200",
  Tokio: "bg-green-200",
  Rust: "bg-red-200",
  TypeScript: "bg-blue-200",
  Supabase: "bg-cyan-200",
  OAuth: "bg-pink-200",
};

const Skill = ({ skill }: { skill: string }) => (
  <span
    className={`${
      skillMap[skill] || "bg-gray-200"
    } px-2.5 py-0.5 rounded text-xs sm:text-sm font-medium text-gray-800 w-fit`}
  >
    {skill}
  </span>
);

export default Skill;
