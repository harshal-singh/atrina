import type { NextPage } from "next";
import MultiStepForm from "./components/MultiStepForm";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-8">Multi-Step Form</h1>
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
};

export default Home;