import Image from "next/image";
import ExpCard from "./ExpCard";
import Title from "./Title";

export interface ExpProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
}
const experiences: ExpProps[] = [
  {
    title: "Software Engineer Intern",
    company: "Gemini",
    duration: "Jun 2025 – Aug 2025",
    description: [
      "Built and shipped an Instruments Restrictions API in Scala, a production service for Gemini’s products, utilizing scalable API design, gRPC, caching, and fallback patterns.",
      "Gained experience with large-scale data migrations and deployment infrastructure while following Gemini’s strict safety and compliance standards.",
      "Prototyped a predictions market integrated with the Gemini Wallet during the internal onchain hackathon, gaining hands-on exposure to crypto protocols and rapid prototyping.",
    ],
  },
  {
    title: "Mobile Developer Intern",
    company: "Klenty",
    duration: "May 2024 – Aug 2024",
    description: [
      "Developed a cross-platform mobile application using Flutter, based on the existing Call IQ web app, from scratch.",
      "Prototyped a meeting analysis and conversational intelligence application using API endpoints for meeting video data, synchronized transcript autoplay, and ChatGPT insights, leveraging advanced Flutter UI/UX and Kotlin.",
      "Contributed to new Truecaller product prototype, enabling customer identification based on incoming calls.",
    ],
  },
  {
    title: "Front End Intern",
    company: "AcreTrader",
    duration: "Nov 2022 - July 2023",
    description: [
      "Delivered key feature and design upgrades to an internal geospatial mapping tool, working closely with UI/UX team.",
      "Developed and integrated custom React hooks for API calls to enhance data retrieval workflows and worked closely with the user team to troubleshoot bugs in API calls and Mapbox SDK integration.",
      "Created a multi-step, interactive tutorial walkthrough for new users, facilitating new user onboarding to the product. Employed Next.js, TailwindCSS, and Redux for state management and reducers across components.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Walmart Global Tech",
    duration: "Nov 2021 - July 2022",
    description: [
      "Created a binary classification model using Logistic Regression and Natural Language Processing.",
      "Employed Bag of Words for feature extraction and utilized PyTorch to process and classify similar matches among over 50,000+ records of retail product data across various global markets.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full min-h-screen  flex  justify-center  items-center  "
    >
      <div className="flex  gap-12 flex-wrap lg:flex-nowrap justify-center">
        <div className=" min-w-[500px] flex flex-col justify-center px-12 lg:px-0 gap-12">
          <div>
            <Title>Education</Title>
            <div className="flex md:gap-8 justify-start items-start flex-wrap md:flex-nowrap">
              <Image
                alt="UT Logo"
                width={100}
                height={100}
                src={"/ut.jpg"}
                className="my-2 "
              />
              <div className="text-xl">
                <p className="font-bold ">University of Texas at Austin</p>
                <p className=" italic">
                  Bachelor of Science in Computer Science and Mathematics
                </p>
                <p>August 2022 - May 2026</p>
                <p className="mt-4">GPA: 3.733</p>
                <p>
                  Relevant Courses: Data Structures and Algorithms,
                  Cryptography, Operating Systems, Systems for Machine Learning
                  and Big Data
                </p>
              </div>
            </div>
          </div>
          <div>
            <Title>Experience</Title>
            <div>
              {experiences.map((e, index) => (
                <ExpCard key={index} {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
