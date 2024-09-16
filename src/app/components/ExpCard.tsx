import Image from "next/image";
import { ExpProps } from "./Experience";

const ExpCard: React.FC<ExpProps> = ({
  title,
  company,
  duration,
  description,
}) => {
  return (
    <div className=" flex md:gap-8 justify-start items-start flex-wrap md:flex-nowrap  border-b-2 py-4 ">
      <Image
        alt="UT Logo"
        width={100}
        height={100}
        src={`/exp/${company}.jpg`}
        className="my-2"
      />
      <div className="w-full flex flex-col ">
        <div className="flex items-center justify-between">
          <div className=" text-xl text-left">
            <p className=" font-bold">{company}</p>
            <p className="italic">{title}</p>
          </div>

          <p className=" text-right">{duration}</p>
        </div>
        <ul className="list-disc ml-6 mt-2">
          {description.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ExpCard;
