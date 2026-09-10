import Image from "next/image";
import { ExpProps } from "./Experience";

const ExpCard = ({
  title,
  company,
  duration,
  location,
  description,
}: ExpProps) => {
  return (
    <div className=" flex md:gap-8 justify-start items-start flex-wrap md:flex-nowrap  border-b-2 py-4 ">
      <Image
        alt={`${company} logo`}
        width={100}
        height={100}
        src={`/exp/${company}.jpg`}
        className="my-2 rounded object-contain"
      />
      <div className="w-full flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{company}</h3>
            <p className="text-sm sm:text-base text-gray-700 font-medium">{title}</p>
            {location && <p className="text-xs sm:text-sm text-gray-500">{location}</p>}
          </div>

          <p className="text-right text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">{duration}</p>
        </div>
        <ul className="list-disc ml-5 mt-2.5 space-y-1">
          {description.map((d, index) => (
            <li key={index} className="text-gray-600 text-sm leading-relaxed">{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ExpCard;
