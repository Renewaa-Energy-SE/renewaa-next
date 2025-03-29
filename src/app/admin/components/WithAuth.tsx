"use client"; // This is a Client Component

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { User, Role } from "@/components/Types";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const pathname = usePathname();
    const router = useRouter();
    const user: User | undefined = getUser();

    useEffect(() => {
      if (!user || user.role !== Role.admin) {
        router.replace("/login");
      }
    }, [router, user, pathname]); // Add pathname to the dependency array

    if (!user || user.role !== Role.admin) {
      return null; // or render a loading state
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

const getUser = () => {
  if (typeof window !== "undefined") {
    const userString = window.localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  }
  return null;
};

export default withAuth;
