"use client";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import { Project } from "@/components/Types";
import ScrollButton from "../home/components/ScrollButton";
import Head from "next/head";

export default function Projects() {
  const collage: string[] = [
    "/assets/images/projects/ex-collage-one.png",
    "/assets/images/projects/ex-collage-two.png",
    "/assets/images/projects/ex-collage-three.png",
    "/assets/images/projects/ex-collage-four.png",
    "/assets/images/projects/ex-collage-five.png",
  ];

  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numColumns, setNumColumns] = useState(getNumColumns());
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 5; // Loading 5 at a time seems appropriate given the layout

  function getNumColumns() {
    if (typeof window !== "undefined") {
      return window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1;
    }
    return 3;
  }

  useEffect(() => {
    function handleResize() {
      setNumColumns(getNumColumns());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = async (pageNum: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/projects?page=${pageNum}&limit=${LIMIT}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // If we are on page 1, replace. Else append.
      if (pageNum === 1) {
        setProjects(data.projects);
      } else {
        setProjects(prev => [...prev, ...data.projects]);
      }

      // Update pagination state
      if (data.pagination) {
        setHasMore(data.pagination.page < data.pagination.totalPages);
      } else {
         // Fallback if pagination info is missing (shouldn't happen with updated API)
         setHasMore(data.projects.length === LIMIT);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return (
    <>
      {/* <Head> */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* Title Tag */}
      <title>Renewaa | Projects - Works Across the Company</title>
      {/* Meta Description Tag */}
      <meta
        name="description"
        content="Welcome to Renewaa, your premier destination for cutting-edge lithium battery solutions. Explore our innovative products and services today!"
      />
      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.renewaa.com/" />
      {/* Fav Icon */}
      <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      {/* Open Graph Tags */}
      <meta
        property="og:title"
        content="Renewaa | Home - Your Premier Destination for Cutting-Edge Lithium Battery Solutions"
      />
      <meta
        property="og:description"
        content="Welcome to Renewaa, your premier destination for cutting-edge lithium battery solutions. Explore our innovative products and services today!"
      />
      <meta
        property="og:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
      <meta property="og:url" content="https://www.renewaa.com/" />
      <meta property="og:type" content="website" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Renewaa | Home - Your Premier Destination for Cutting-Edge Lithium Battery Solutions"
      />
      <meta
        name="twitter:description"
        content="Welcome to Renewaa, your premier destination for cutting-edge lithium battery solutions. Explore our innovative products and services today!"
      />
      <meta
        name="twitter:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      {/* </Head> */}
      <div className="flex flex-col h-full w-full">
        <section
          className="page-title"
          style={{
            backgroundImage: "url(/assets/images/background/projects.png)",
          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <div className="title">
                <h1>Projects</h1>
              </div>
              <ul className="bread-crumb clearfix pull-right">
                <li>
                  <Link href="/home">Home</Link>
                </li>
                <li>About</li>
                <li>Company</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-style-three sec-pad pb-0">
          <div className="auto-container">
            <div className="sec-title centred">
              <div className="title-top">
                <div className="shape-box">
                  <span className="shape shape-1">//</span>
                  <span className="shape shape-2">\\</span>
                </div>
                <h6>See Our Capabilities</h6>
              </div>
              <h2>
                Get a glimpse into our world with a showcase of select standout
                projects
              </h2>
            </div>
          </div>
        </section>

        {projects.map((project, index) => (
          <div key={index} className="">
            <div
              className={`flex h-[100vh] md:h-[40vh] flex-col md:flex-row my-24 ${
                index % 2 != 0 ? "md:flex-row-reverse" : ""
              } static max-w-[1024px] px-4 mx-auto`}
            >
              {/* image part */}
              <div className="w-full md:w-2/5 bg-[#1E2434] flex justify-center items-center relative">
                <div className="wrapper-project-image bg-[#0084EC] h-[50vh] md:h-[50vh] w-full md:w-[50vh] relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-white"
                    style={{
                      clipPath:
                        index % 2 === 0
                          ? "polygon(0 0, 100% 0, 100% 100%)"
                          : "polygon(0 0, 0 100%, 100% 0)",
                    }}
                  ></div>
                  <img
                    src={project.mainImageUrl}
                    alt={project.title}
                    className={`absolute bottom-0 md:right-0 pb-3 px-1 ${
                      index % 2 != 0 ? "left-0" : "right-0"
                    }`}
                    style={{
                      maxWidth: "calc(100% - 0.5rem)",
                      maxHeight: "calc(100% - 0.5rem)",
                    }}
                  />
                </div>
              </div>
              {/* text part */}
              <div
                className={`flex flex-col py-5 justify-center items-center w-full md:w-3/5 bg-[#1E2434] px-5 md:${
                  index % 2 === 0 ? "px-0 pr-10 py-0" : "px-0 pl-10 py-0"
                }`}
              >
                <BsCheckCircle size={50} color="#0084EC" aria-hidden="true" />
                <h4 className="text-white text-center font-bold mt-3">
                  {project.title}
                </h4>
                <Link
                  href={`/project/${project.id}`}
                  scroll={false}
                  className="bg-[#0084EC] rounded-xl px-4 py-2 mt-3 inline-block hover:bg-blue-600 transition-colors"
                  aria-label={`See more about ${project.title}`}
                >
                  <span className="text-white font-bold">See More...</span>
                </Link>
              </div>
            </div>
            {index < projects.length - 1 && (
              <div className="flex justify-center">
                <img
                  src="/assets/images/icons/project-seperator.png"
                  alt=""
                  className="w-20 h-20"
                />
              </div>
            )}
          </div>
        ))}

        {/* Load More Button */}
        {hasMore && (
           <div className="flex justify-center mt-10 mb-10">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-[#0084EC] rounded-xl px-6 py-3 text-white font-bold hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Load More"}
            </button>
           </div>
        )}

        <div className="sec-title centred mt-20">
          <h2>Powering Progress</h2>
        </div>
        <div className="pb-56 pt-20 w-full bg-gradient-to-b from-[#0084EC] to-white">
          <div className="flex justify-center pb-10">
            <img
              src="/assets/images/icons/hand-shake.png"
              alt=""
              className="flex h-20"
            />
          </div>
          <div className="flex flex-wrap static max-w-[1024px] mx-auto bg-gradient-to-tr from-[#1E2434] to-white p-4">
            <img
              src={collage[0]}
              alt=""
              className="w-1/2 h-auto pr-4 pb-4"
            />
            <img
              src={collage[1]}
              alt=""
              className="w-1/2 h-auto pb-4"
            />
            <img
              src={collage[2]}
              alt=""
              className="w-3/5 h-auto pr-4"
            />
            <div className="w-2/5 flex flex-col">
              <img
                src={collage[3]}
                alt=""
                className="w-full h-1/2 pb-4"
              />
              <img src={collage[4]} alt="" className="w-full h-1/2" />
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  );
}
