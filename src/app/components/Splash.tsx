import Title from "./Title";
import PhotoGrid from "./PhotoGrid";

const Splash = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex justify-center pt-24 pb-20 scroll-mt-20"
    >
      <div className="flex flex-col items-center justify-center gap-8 w-full px-12 lg:px-0">
        <PhotoGrid />
        
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <Title className="mb-0">Hey, I&apos;m Shiva! 👋</Title>
            <span className="inline-flex items-center px-3 py-1 backdrop-blur-md bg-blue-100/70 border border-blue-200/60 text-blue-900 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-sm">
              SWE @ Gemini · NYC
            </span>
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <p className="text-base text-gray-600 leading-relaxed">
              I&apos;m a software developer focused on building low-level, interactive systems. I love diving into the math, architecture, and mechanics behind how things work, whether that&apos;s software, hardware, or anything in between.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Right now, I&apos;m building fun Rust projects and tinkering with hardware gadgets.</p>
          </div>

          {/* Interests */}
          <div className="w-full flex flex-wrap gap-2.5 text-xs sm:text-sm text-gray-600">
            {[
              { icon: "🧗", label: "Bouldering (V4–V5)" },
              { icon: "🍳", label: "Cooking" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full font-medium">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Splash;
