"use client";
import { useState, useEffect, FC } from "react";
import Sidebar from "../components/Sidebar";

type TableData = {
  "Projects Completed": number;
  "Professional Staff": number;
  "Satisfied People": number;
};

const Statistics: FC = () => {
  const [data, setData] = useState<TableData>({
    "Projects Completed": 0,
    "Professional Staff": 0,
    "Satisfied People": 0,
  });

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data: TableData) => setData(data))
      .catch(console.error);
  }, []);

  const handleIncrease = (property: keyof TableData) => {
    setData((prevData) => ({
      ...prevData,
      [property]: prevData[property] + 1,
    }));
  };

  const handleDecrease = (property: keyof TableData) => {
    setData((prevData) => ({
      ...prevData,
      [property]: prevData[property] - 1,
    }));
  };

  const handleSubmit = () => {
    fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div className="flex flex-row h-[150vh]">
      <Sidebar />
      <div className="w-full h-full mx-5">
        <div className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-2 border-gray-800 border-solid">
                  Property
                </th>
                <th className="px-4 py-2 border-2 border-gray-800 border-solid">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([property, value]) => (
                <tr key={property}>
                  <td className="border-2 border-gray-800 px-4 py-2 border-solid">
                    {property}
                  </td>
                  <td className="flex justify-center border-2 border-gray-800 px-4 py-2 border-solid  items-center">
                    {value}
                    <div className="flex flex-col w-full justify-center items-end ml-2">
                      <svg
                        onClick={() =>
                          handleIncrease(property as keyof TableData)
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-blue-500 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        onClick={() =>
                          handleDecrease(property as keyof TableData)
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-blue-500 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end w-full mt-5">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
