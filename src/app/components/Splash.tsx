import Image from "next/image";

const Splash = () => {
  return (
    <div
      id="home"
      className=" w-full h-screen  flex  justify-center  items-center"
    >
      <div className="flex max-w-[800px] gap-12 flex-wrap lg:flex-nowrap justify-center">
        <Image alt="Shiva Image" width={400} height={700} src={"/splash.jpg"} />
        <div className=" min-w-[500px] flex flex-col justify-center px-12 lg:px-0">
          <h1 className="text-6xl mb-4">Hey, I&apos;m Shiva</h1>
          <p className="text-xl mb-2">
            Computer Science + Math junior at UT Austin with interests in UI/UX,
            Full Stack, and Data Science
          </p>
          <p>🖼️ 💻 📊</p>
        </div>
      </div>
    </div>
  );
};
export default Splash;
