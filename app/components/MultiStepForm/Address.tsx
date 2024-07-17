import { Field, ErrorMessage } from "formik";

const Address: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Address</h2>
      <div>
        <label
          htmlFor="street"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Street
        </label>
        <Field
          name="street"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your street"
        />
        <ErrorMessage
          name="street"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          City
        </label>
        <Field
          name="city"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your city"
        />
        <ErrorMessage
          name="city"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default Address;
