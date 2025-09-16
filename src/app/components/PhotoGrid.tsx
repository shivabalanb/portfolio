import Image from "next/image";

interface PhotoGridProps {
  className?: string;
}

const PhotoGrid = ({ className = "" }: PhotoGridProps) => {
  return (
    <div className={`p-2 h-[50vh] max-h-[700px]  ${className}`}>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full">
        <div className="row-span-2 col-span-2">
          <Image
            alt="profile"
            width={400}
            height={700}
            src="/splash/profile2.jpg"
            className="h-full w-full object-cover"
          />
        </div>
        
          <Image
            alt="study"
            width={200}
            height={340}
            src="/splash/study.jpg"
            className="h-full w-full object-cover"
          />
           <Image
            alt="skyline"
            width={200}
            height={340}
            src="/splash/skyline.jpg"
            className="h-full w-full object-cover"
          />

        <div className="col-span-2">
          <Image
            alt="hiking"
            width={200}
            height={340}
            src="/splash/hiking.jpg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
