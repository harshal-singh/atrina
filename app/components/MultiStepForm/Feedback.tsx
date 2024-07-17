import { Field, ErrorMessage } from "formik";

const Feedback: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Feedback</h2>
      <div>
        <label
          htmlFor="feedback"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Feedback
        </label>
        <Field
          name="feedback"
          as="textarea"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          rows={4}
          placeholder="Enter your feedback"
        />
        <ErrorMessage
          name="feedback"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default Feedback;
