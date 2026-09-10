import Image from "next/image";
import { ProjectProps } from "./Projects";
import Skill from "./Skill";
import Link from "next/link";

const ProjCard = ({
  title,
  description,
  skills,
  repo,
  img,
}: ProjectProps) => {
  const imageSrc = img || `/proj/${title}.jpg`;
  return (
    <div className="bg-slate-100 flex flex-col rounded-lg overflow-hidden border border-gray-200">
      <div className="relative w-full h-[200px]">
        <Image
          alt={title}
          fill
          className="object-cover"
          src={imageSrc}
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-base text-gray-600 leading-relaxed mb-3">{description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {skills.map((s) => (
              <Skill key={s} skill={s} />
            ))}
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <Link
            href={repo}
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 underline"
          >
            view repo →
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjCard;
