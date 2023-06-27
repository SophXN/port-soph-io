import TabGroup from "../../components/tabgroup";
import AnimatedHeader from "../../components/planelottie";
export default function CarbonEmissions() {
  return (
    <>
      <main className="min-h-screen p-8 flex flex-col items-center justify-center py-8 px-4 md:px-8">
        <div style={{ padding: "4rem" }}>
          <h1 className="mb-2 font-mono text-4xl text-gray-300 md:text-6xl p-4 z-9">
            Explore carbon emissions for different modes of travel.
          </h1>
        </div>
        <div className="flex flex-col items-center mt-8 relative z-10">
          <div className="shadow-sm p-4 rounded-lg backdrop-opacity-50">
            <TabGroup />
          </div>
        </div>
        <div className="w-full z-0">
          <AnimatedHeader />
        </div>
      </main>
    </>
  );
}
