import Title from "./Title";
import PhotoGrid from "./PhotoGrid";

const Splash = () => {
  return (
    <div
      id="home"
      className=" w-full h-screen  flex  justify-center  items-center  relative"
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <PhotoGrid  />
        <div className=" w-full flex flex-col justify-center px-6 text-center ">
          <Title>Hey, I&apos;m Shiva 🤘</Title>
          <p className="text-xl mb-2">
            Computer Science + Math senior at UT Austin with interests in
            Blockchain and Full Stack
          </p>
        </div>
      </div>
    </div>
  );
};
export default Splash;
