"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import Feedback from "./Feedback";

const steps = [PersonalDetails, Address, Feedback];

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
  Yup.object({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
  }),
  Yup.object({
    feedback: Yup.string().required("Feedback is required"),
  }),
];

interface FormValues {
  name: string;
  email: string;
  street: string;
  city: string;
  feedback: string;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      console.log("Form submitted", values);
      // Send the data to an API here
    }
    setSubmitting(false);
  };

  const CurrentStep = steps[step];

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        street: "",
        city: "",
        feedback: "",
      }}
      validationSchema={validationSchemas[step]}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-500">
              Step {step + 1} of {steps.length}
            </div>
            <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <CurrentStep />

          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex-1">
              <button
                type="submit"
                disabled={isSubmitting }
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {step === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
