import Image from "next/image";
import Title from "./Title";

const Contact = () => {
  return (
    <div id="contact" className=" w-full   flex  justify-center   mt-52">
      <div className="flex flex-wrap flex-grow  px-12 lg:px-0 gap-6 ">
        <div className="flex flex-wrap w-full justify-between ">
          <Title>Contact</Title>
          <div>
            <p>Feel free to reach me at</p>
            <p className="font-bold">shivabalanb03@gmail.com</p>
          </div>
        </div>
        <div className="relative w-full h-32">
          <Image
            alt="UT Logo"
            layout="fill"
            objectFit="cover"
            src={`/contact.jpg`}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
