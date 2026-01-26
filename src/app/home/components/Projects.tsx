"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  projectId: number;
  category: string;
  size: string;
  image: string;
  colsStyles: string;
  linkText: string;
  linkImage: string;
};

const Projects = () => {
  const [filter, setFilter] = useState("*");

  const projects: Project[] = [
    {
      projectId: 1,
      category: "energy",
      size: "small-column",
      image: "/assets/images/gallery/projects-energy.png",
      colsStyles: "col-lg-4 col-md-6 col-sm-12",
      linkText: "Leading the energy transition",
      linkImage: "/assets/images/gallery/projects-energy.png",
    },
    {
      projectId: 2,
      category: "research",
      size: "small-column",
      image: "/assets/images/gallery/projects-research.png",
      colsStyles: "col-lg-4 col-md-6 col-sm-12",
      linkText: "Leading the Research transition",
      linkImage: "/assets/images/gallery/projects-research.png",
    },
    {
      projectId: 3,
      category: "insights",
      size: "",
      image: "/assets/images/gallery/projects-insight.png",
      colsStyles: "col-lg-4 col-md-6 col-sm-12",
      linkText: "Leading the Insights transition",
      linkImage: "/assets/images/gallery/projects-insight.png",
    },
    {
      projectId: 4,
      category: "innovations",
      size: "small-column",
      image: "/assets/images/gallery/projects-innovation.png",
      colsStyles: "col-lg-8 col-md-6 col-sm-12",
      linkText: "Leading the Innovations transition",
      linkImage: "/assets/images/gallery/projects-innovation.png",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "*" || project.category === filter
  );

  // Masonry breakpoints
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  // Handle window resize events
  useEffect(() => {
    const handleResize = () => {
      setFilter(filter);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [filter]);

  // Your project data

  return (
    <section className="project-section sec-pad">
      <div className="auto-container">
        <div className="sec-title centred">
          <div className="title-top">
            <div className="shape-box">
              <span className="shape shape-1">//</span>
              <span className="shape shape-2">\\</span>
            </div>
            <h6>Latest Projects</h6>
          </div>
          <h2>Works Across the Company</h2>
          <div className="title-text">
            <p>
              These cases are perfectly simple easy to distinguish free hour
              <br />
              power off choice isuntrammelled.
            </p>
          </div>
        </div>
        <div className="sortable-masonry">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`masonry-item ${project.size} ${project.category
                  } col-span-1 ${index === 2 ? "md:col-span-1 md:row-span-2" : ""
                  } ${index === 3
                    ? "md:col-span-1 lg:col-span-2 md:small-column"
                    : ""
                  }`}
              >
                <div className="project-block-one h-full">
                  <div className="inner-box">
                    <figure className="image-box">
                      <Image
                        src={project.image}
                        alt={project.category || "Project Image"}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>
                    <div className="text">
                      <h6>[ {project.category} ]</h6>
                    </div>
                    <div className="overlay-content">
                      <div className="view-btn">
                        <Link
                          href={project.linkImage}
                          className="lightbox-image"
                          data-fancybox="gallery"
                          aria-label="View larger image"
                        >
                          <i className="flaticon-zooming" aria-hidden="true" />
                        </Link>
                      </div>
                      <div className="inner">
                        <h6>[ {project.category} ]</h6>
                        <h5>
                          <Link href={`/projects`} scroll={false}>
                            {project.linkText}
                          </Link>
                        </h5>
                        <div className="link">
                          <Link
                            href="/projects"
                            scroll={false}
                            aria-label="View project details"
                          >
                            <i
                              className="flaticon-right-arrow"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
