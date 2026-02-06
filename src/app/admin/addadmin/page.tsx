"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

interface FormValues {
  name: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const AddAdmin = () => {
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await fetch("/api/admin/addadmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        resetForm();
        toast.success("Admin added successfully!");
      } else {
        toast.error("Failed to add admin");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add admin. Please try again.");
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-row justify-between h-screen">
      <Sidebar />
      <div className="w-full flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Add Admin</h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Adding admin..." : "Add Admin"}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Adding...
                    </>
                  ) : (
                    "Add Admin"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
