import ProjCard from "./ProjCard";
import Title from "./Title";

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
    title: "Irisa – P2P WebRTC video chat",
    description:
      "A minimal WebRTC video chat app with a Rust (Axum/Tokio) WebSocket signaling server and a static browser client. Mesh topology between peers.",
    skills: ["Rust", "Axum", "Tokio", "TypeScript"],
    repo: "https://github.com/shivabalanb/irisa",
  },
  {
    title: "Swoosh",
    description:
      "A decentralized crypto payments and bill splitting application. Built for ETHDenver Hackathon 2024, won Solana best DeFi/Payments app sponsor bounty.",
    skills: ["Next.JS", "ThirdWeb SDK", "Solidity", "TypeScript"],
    repo: "https://github.com/shivabalanb/swoosh",
  },
  {
    title: "Kleos",
    description:
      "Polymarket‑style prediction markets using a Constant Product AMM with AI‑powered resolution. Built for ETH NewYork, won Flare's Onchain price feed bounty.",
    skills: ["Solidity", "TypeScript", "Next.JS", "Foundry"],
    repo: "https://github.com/shivabalanb/kleos",
  },
  {
    title: "Seva Charities",
    description:
      "Nonprofit web app with mission, events, member profiles, and an admin dashboard.",
    skills: ["TypeScript", "Next.JS", "Supabase", "OAuth"],
    repo: "https://github.com/SevaCharities/seva-website",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen justify-center   flex  pt-52  "
    >
      <div className="flex  flex-wrap lg:flex-nowrap flex-grow  flex-col px-12 lg:px-0 ">
        <Title>Projects</Title>
        <div className="grid sm:grid-cols-2 gap-2 my-2">
          {projects.map((p, index) => (
            <ProjCard key={index} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
