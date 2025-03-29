"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

type Project = {
  projectId: number;
  category: string;
  size: string;
  image: string;
  colsStyles: string;
  linkText: string;
  linkImage: string;
  dimension: string;
};

const Projects = () => {
  const [filter, setFilter] = useState("*");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const projects: Project[] = [
    {
      projectId: 1,
      category: "energy",
      size: "small-column",
      image: "/assets/images/gallery/projects-energy copy.jpg",
      colsStyles: "col-lg-4 col-md-6 col-sm-12",
      linkText: "Leading the energy transition",
      linkImage: "/assets/images/gallery/projects-energy-view.jpg",
      dimension: "370 x 370",
    },
    {
      projectId: 2,
      category: "research",
      size: "small-column",
      image: "/assets/images/gallery/projects-research copy.jpg",
      colsStyles: "col-lg-4 col-md-6 col-sm-12",
      linkText: "Leading the Research transition",
      linkImage: "/assets/images/gallery/projects-research-view.jpg",
      dimension: "370 x 370",
    },
    {
      projectId: 3,
      category: "insights",
      size: "",
      image: "/assets/images/gallery/projects-insight copy.jpg",
      colsStyles: "col-lg-4 col-md-6 col-sm-12",
      linkText: "Leading the Insights transition",
      linkImage: "/assets/images/gallery/projects-insight-view.jpg",
      dimension: "370 x 770",
    },
    {
      projectId: 4,
      category: "innovations",
      size: "small-column",
      image: "/assets/images/gallery/projects-inovation copy.jpg",
      colsStyles: "col-lg-8 col-md-6 col-sm-12",
      linkText: "Leading the Innovations transition",
      linkImage: "/assets/images/gallery/projects-inovation-view.jpg",
      dimension: "770 x 370",
    },
  ];

  const [image1, setImage1] = useState<string>(projects[0].image);
  const [image2, setImage2] = useState<string>(projects[1].image);
  const [image3, setImage3] = useState<string>(projects[2].image);
  const [image4, setImage4] = useState<string>(projects[3].image);

  const handleKeep = async (id: number) => {
    if (selectedImage) {
      if (selectedImage.size > 100 * 1024) {
        console.error("Error: The selected image is larger than 100KB");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onloadend = async () => {
        const base64data = reader.result;
        if (typeof base64data !== "string") {
          console.error("Error: base64data is not a string");
          return;
        }
        const response = await fetch("/api/admin/uploadprojectimage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file: base64data,
            imageName: projects[id].image.split("/").pop() || "",
          }),
        });

        if (response.ok) {
          toast.info("Image uploaded and copied successfully");
          console.log("Image uploaded and copied successfully");
        } else {
          toast.error("Error uploading and copying image");
          console.error("Error uploading and copying image");
        }
      };
    }
  };

  const handleCancel = (id: number) => {
    setSelectedImage(null);
    if (id == 0) {
      setImage1(projects[0].image);
    } else if (id == 1) {
      setImage2(projects[1].image);
    } else if (id == 2) {
      setImage3(projects[2].image);
    } else if (id == 3) {
      setImage4(projects[3].image);
    }
  };

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

  return (
    <section className="project-section sec-pad">
      <div className="auto-container">
        <div className="sec-title centred">
          <h2>Works Across the Company</h2>
        </div>
        <div className="sortable-masonry">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`masonry-item ${project.size} ${
                  project.category
                } col-span-1 ${
                  index === 2 ? "md:col-span-1 md:row-span-2" : ""
                } ${
                  index === 3
                    ? "md:col-span-1 lg:col-span-2 md:small-column"
                    : ""
                }`}
              >
                <div className="project-block-one h-full">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={
                          index === 0
                            ? image1
                            : index === 1
                            ? image2
                            : index === 2
                            ? image3
                            : index == 3
                            ? image4
                            : ""
                        }
                        alt=""
                      />{" "}
                    </figure>
                    <div className="text">
                      <h6>[ {project.category} ]</h6>
                    </div>
                    <div className="overlay-content">
                      {/* <div className="view-btn">
                        <Link
                          href={project.image}
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <i className="flaticon-zooming" />
                        </Link>
                      </div> */}
                      <div className="inner">
                        <h6>[ {project.category} ]</h6>
                        <h5>
                          <Link href={`/projects`} scroll={false}>
                            {project.linkText}
                          </Link>
                        </h5>
                        <div className="link">
                          <Link href="#" scroll={false}>
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-center">{index + 1}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between mx-10"
            >
              <h5>
                image({index + 1}) size:{project.dimension}:
              </h5>
              <input
                type="file"
                className="py-2 px-4 border border-gray-300 rounded-md"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setSelectedImage(e.target.files[0]);
                    if (index == 0) {
                      setImage1(URL.createObjectURL(e.target.files[0]));
                    } else if (index == 1) {
                      setImage2(URL.createObjectURL(e.target.files[0]));
                    } else if (index == 2) {
                      setImage3(URL.createObjectURL(e.target.files[0]));
                    } else if (index == 3) {
                      setImage4(URL.createObjectURL(e.target.files[0]));
                    }
                    // setImage2(URL.createObjectURL(e.target.files[0]));
                  }
                }}
              />

              <button
                onClick={() => handleKeep(index)}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              >
                Keep
              </button>
              <button
                onClick={() => handleCancel(index)}
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
