import { FC } from "react";

const ThankYou: FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Thank You for Your Feedback!
      </h2>
      <p className="text-gray-600">
        We appreciate your time and input. Your feedback has been successfully
        submitted.
      </p>
    </div>
  );
};

export default ThankYou;
