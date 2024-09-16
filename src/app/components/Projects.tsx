import ProjCard from "./ProjCard";

export interface ProjectProps {
  title: string;
  description: string;
  repo: string;
  skills: string[];
  video?: string;
  img?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Chit-Chat",
    description:
      "A responsive, real-time chat web app that features group messaging, user authentication, and persistent chat history",
    skills: ["MongoDB", "Prisma", "Tailwind"],
    repo: "https://github.com/shivabalanb/chit-chat",
  },
  {
    title: "Swoosh",
    description:
      "A decentralized crypto payments and bill splitting application built for Ethereum Virtual Machine (EVM) compatible chains—XDC, Solana’s Neon, and Base. Built for ETHDenver Hackathon 2024, won Solana best DeFi/Payments app sponsor bounty.",
    skills: ["Next.JS", "ThirdWeb SDK", "Solidity"],
    repo: "https://github.com/shivabalanb/swoosh",
  },
  {
    title: "Pokedex",
    description:
      "Web-app that utilizes the pokeAPI to fetch basic data about Pokemon such as base stats, name, type. Features: search, infinite scroll, lazy fetch, API request",
    skills: ["Next.JS", "React", "Tailwind"],
    repo: "https://github.com/shivabalanb/pokedex",
  },

  {
    title: "Maze Solver",
    description:
      "Web-based maze generation and solver. Utilizes modular design for easy interoperability with various algorithms. Features: JS async await, state management. Implemented algorithms include Dijkstra's, A*, DFS, BFS, Recursive Backtracking, Recursive Division, Prim’s",
    skills: ["Next.JS", "Tailwind", "Framer Motion"],
    repo: "https://github.com/shivabalanb/my-maze",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen justify-center   flex  py-8  "
    >
      <div className="flex  max-w-[800px] flex-wrap lg:flex-nowrap flex-grow  flex-col px-12 lg:px-0 ">
        <h1 className="text-6xl mb-4">Projects</h1>
        <div className="grid sm:grid-cols-2 gap-2 ">
          {projects.map((p, index) => (
            <ProjCard key={index} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
