import Image from "next/image";
import ExpCard from "./ExpCard";
import Title from "./Title";

export interface ExpProps {
  title: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
}
const experiences: ExpProps[] = [
  {
    title: "Software Developer",
    company: "Gemini",
    duration: "Jun 2025 – Present",
    location: "New York, NY",
    description: [
      "Built and shipped an Instruments Restrictions API in Scala, a production service for Gemini’s products, utilizing scalable API design, gRPC, caching, and fallback patterns.",
      "Gained experience with large-scale data migrations and deployment infrastructure while following Gemini’s strict safety and compliance standards.",
      "Prototyped a predictions market integrated with the Gemini Wallet during the internal onchain hackathon, gaining hands-on exposure to crypto protocols and rapid prototyping.",
    ],
  },
  {
    title: "Technical Lead",
    company: "Seva Charities",
    duration: "Aug 2023 – May 2025",
    location: "Austin, TX",
    description: [
      "Revamped the Seva Charities website to better showcase the organization's mission, achievements, and weekly meeting updates.",
      "Upgraded the site from a basic HTML/CSS/JS framework to a modern Next.js and Tailwind CSS application.",
      "Migrated hosting to Vercel, achieving an 80% reduction in hosting costs.",
    ],
  },
  {
    title: "Mobile Developer Intern",
    company: "Klenty",
    duration: "May 2024 – Jul 2024",
    location: "Chennai, India",
    description: [
      "Developed a cross-platform mobile application using Flutter, based on the existing Call IQ web app, from the ground up.",
      "Prototyped a meeting analysis and conversational intelligence application using API endpoints for meeting video data, synchronized transcript autoplay, and ChatGPT insights, leveraging advanced Flutter UI/UX and Android native Kotlin.",
      "Contributed to the development of a new \"Truecaller\" product, enabling customer identification based on incoming calls.",
    ],
  },
  {
    title: "Front End Intern",
    company: "AcreTrader",
    duration: "Nov 2021 – Jun 2022",
    location: "Fayetteville, AR",
    description: [
      "Implemented UI/UX elements and features on internal geospatial mapping tool AcreMaps.",
      "Learned and applied web technologies such as ReactJS, Next.js, Redux, and TailwindCSS.",
      "Built an interactive tutorial walkthrough of the product for first-time users through modals and state management.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Walmart Global Tech",
    duration: "Nov 2021 – Jul 2022",
    location: "Bentonville, AR",
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
      className="w-full flex justify-center pt-10 pb-10 scroll-mt-20"
    >
      <div className="flex flex-col flex-grow w-full px-12 lg:px-0 gap-20">
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
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">University of Texas at Austin</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Bachelor of Science in Computer Science and Mathematics
              </p>
              <p className="text-xs sm:text-sm text-gray-500">August 2022 – May 2026</p>
              <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium">GPA: 3.733</p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                <span className="font-medium text-gray-700">Relevant Courses:</span> Data Structures and Algorithms,
                Cryptography, Operating Systems, Systems for Machine Learning
                and Big Data
              </p>
            </div>
          </div>
        </div>
        <div>
          <Title>Experience</Title>
          <div>
            {experiences.map((e) => (
              <ExpCard key={e.company} {...e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
