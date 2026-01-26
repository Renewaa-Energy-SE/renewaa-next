"use client";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

// import withAuth from "../components/WithAuth";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      // Remove user object from cookies
      Cookies.remove("user");

      // const router = useRouter();

      // Redirect to login page
      router.replace("/login");
    } catch (error: unknown) {
      if (error) {
        return "Something went wrong.";
      }
      throw error;
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <div className="flex items-center h-1/6 justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 text-white rounded justify-end"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 h-5/6">
        <Link
          href="/admin/addproject"
          className="px-8 py-5 text-5xl text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Project
        </Link>
        <Link
          href="/admin/addadmin"
          className="px-8 py-5 text-5xl text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
        >
          Add Admin
        </Link>
        <Link
          href="/admin/customizeImages"
          className="px-8 py-5 text-5xl text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
        >
          Customize Images
        </Link>
      </div>
    </div>
  );
};

// export default withAuth(Dashboard);
export default Dashboard;
