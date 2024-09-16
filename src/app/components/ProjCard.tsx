import Image from "next/image";
import { ProjectProps } from "./Projects";
import Skill from "./Skill";
import Link from "next/link";

const ProjCard: React.FC<ProjectProps> = ({
  title,
  description,
  skills,
  repo,
}) => {
  return (
    <div className="bg-slate-100  flex flex-col ">
      <div className="relative w-full h-[200px]">
        <Image
          alt="UT Logo"
          layout="fill"
          objectFit="cover"
          src={`/proj/${title}.jpg`}
        />
      </div>
      <div className="p-4 flex flex-col justify-between items-end flex-grow">
        <div>
          <h1 className=" text-xl font-bold">{title}</h1>
          <p>{description}</p>
          <div className="my-2 flex flex-wrap gap-2">
            {skills.map((s, index) => (
              <Skill key={index} skill={s} />
            ))}
          </div>
        </div>
        <Link
          href={repo}
          target="_blank"
          className="flex underline text-purple-900 justify-end  "
        >
          view repo
        </Link>
      </div>
    </div>
  );
};
export default ProjCard;
