import Image from "next/image";
import Title from "./Title";

import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex justify-center pt-10 pb-0 scroll-mt-20">
      <div className="flex flex-wrap flex-grow px-12 lg:px-0 gap-6">
        <div className="flex flex-wrap w-full justify-between items-start">
          <div>
            <Title>Contact</Title>
          </div>
          <div className="mt-4 sm:mt-0 text-left sm:text-right flex flex-col items-start sm:items-end">
            <p className="text-sm text-gray-500">Feel free to reach me at</p>
            <a href="mailto:shivabalanb03@gmail.com" className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 hover:underline">
              shivabalanb03@gmail.com
            </a>
            <div className="flex gap-4 text-sm font-medium text-gray-600 mt-2">
              <Link href="https://github.com/shivabalanb" target="_blank" className="hover:text-gray-900 underline">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/shivabalanb/" target="_blank" className="hover:text-gray-900 underline">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
          <Image
            alt="NYC Skyline"
            fill
            className="object-cover"
            src={`/contact.jpg`}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
