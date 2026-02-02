"use client";
import React, { useState } from "react";
import { Formik, Field, Form, FieldArray, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import Sidebar from "../components/Sidebar";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app, storage } from "../../../../firebase"; // assuming firebase.js is in the same directory
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  contactNo: string;
  message: string;
  mainImage: File | undefined;
  images: File[];
};

type FileUploadProps = {
  setFieldValue: FormikProps<FormValues>["setFieldValue"];
  name: keyof FormValues;
};

const ProjectSchema = Yup.object({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  contents: Yup.array()
    .of(Yup.string().min(2, "Too Short!").required("Required"))
    .required("At least one content is required"),
  mainImage: Yup.mixed().required("A file is required"),
  images: Yup.array()
    .of(Yup.mixed().required("A file is required"))
    .max(6, "No more than 6 images allowed"),
});

const uploadFile = async (file: File) => {
  const storageRef = ref(storage, `uploads/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise<string>((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // You can use this section to display upload progress
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

const handleSubmit = async (
  values: any,
  {
    resetForm,
    setSubmitting,
  }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
) => {
  try {
    // Create a copy of the form values to avoid mutating the original object
    const formData = { ...values };

    // Upload main image if provided
    if (formData.mainImage) {
      const mainImageUrl = await uploadFile(formData.mainImage[0]);
      formData.mainImage = mainImageUrl;
    }

    // Upload additional images if provided
    if (formData.images.length > 0) {
      const imageUrls = await Promise.all(
        formData.images.map((image: File) => uploadFile(image))
      );
      formData.images = imageUrls;
    }

    // Send the form data to the server
    const response = await fetch("/api/admin/addproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.info("Project submitted successfully!");
      console.log("Project submitted successfully!");
      resetForm(); // Reset the form after successful submission
    } else {
      console.error("Error submitting project:", response.status);
    }
  } catch (error) {
    console.error("Error submitting project:", error);
  } finally {
    setSubmitting(false);
  }
};

const AddProject = () => {
  return (
    <div className="flex flex-row h-[200vh] justify-between">
      <Sidebar />
      <div className="w-full h-full mx-5">
        <div className="flex flex-col items-center justify-center px-10 max-w-5xl mx-auto my-20 min-h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-5">Add Project Details Here</h1>
          <Formik
            initialValues={{
              title: "",
              contents: [""],
              mainImage: undefined,
              images: [],
            }}
            validationSchema={ProjectSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form className="space-y-4 w-full">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="title" className="text-sm font-medium">
                    Title
                  </label>
                  <Field
                    id="title"
                    name="title"
                    type="text"
                    className="p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <FieldArray name="contents">
                  {({ push, remove }) => (
                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-medium">Paragraphs</label>
                      <ErrorMessage
                        name="contents"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      {values.contents.map((content, index) => (
                        <div key={index} className="flex flex-col space-y-1">
                        <div
                          key={index}
                          className="flex flex-col w-full space-y-1 mb-2"
                        >
                          <div className="flex items-center space-x-2">
                            <Field
                              name={`contents.${index}`}
                              className="flex-grow p-2 border rounded-md h-[10vh]"
                              as="textarea"
                              aria-label={`Paragraph ${index + 1}`}
                            />
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="p-1 bg-red-500 text-white rounded-md"
                              aria-label={`Remove paragraph ${index + 1}`}
                            >
                              Remove
                            </button>
                          </div>
                          <ErrorMessage
                            name={`contents.${index}`}
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => push("")}
                        className="p-2 bg-blue-500 text-white rounded-md"
                      >
                        Add Content
                      </button>
                      <ErrorMessage
                        name="contents"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  )}
                </FieldArray>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium">Main Image</label>
                  <FileUpload setFieldValue={setFieldValue} name="mainImage" />
                  <ErrorMessage
                    name="mainImage"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  {values.mainImage && (
                    <>
                      <img
                        src={URL.createObjectURL(values.mainImage[0])}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-md"
                      />
                    </>
                  )}
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium">Images</label>
                  <FileUpload setFieldValue={setFieldValue} name="images" />
                  <ErrorMessage
                    name="images"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  <div className="flex flex-wrap justify-start">
                    {values.images &&
                      values.images.map((image, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index}`}
                          className="w-32 h-32 object-cover rounded-md m-1"
                        />
                      ))}
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    aria-label="Submit Project"
                    className="py-2 px-4 bg-red-700 text-white rounded-md hover:outline-1 hover:outline hover:outline-red-800 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i
                          className="fas fa-spinner fa-spin mr-2"
                          aria-hidden="true"
                        ></i>{" "}
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

const FileUpload: React.FC<FileUploadProps> = ({ setFieldValue, name }) => {
  const onDrop = (acceptedFiles: File[] | File) => {
    setFieldValue(name, acceptedFiles);
  };

  const { getInputProps, open } = useDropzone({ onDrop, noClick: true });

  return (
    <div>
      <input {...getInputProps()} />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={open}
        aria-label="Browse files to upload"
      >
        Browse Files
      </button>
    </div>
  );
};
