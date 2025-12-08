// "use client";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Project, Content, Url } from "@/components/Types";

// function getProjectById(projects: Project[], id: string) {
//   // Convert the id to a number since you're dealing with string ids
//   const numericId = Number(id);

//   // Find the project object with the matching id
//   const project = projects.find((p) => p.id === numericId);

//   // Return the project object or null if not found
//   return project || null;
// }

// export const dynamic = "force-dynamic";

// export async function generateStaticParams() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_HOSTNAME}/api/projects`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const data = await response.json();
//   // console.log("data: ", data);
//   return data.projects.map((project: Project) => ({
//     id: project.id.toString(),
//   }));
// }

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/project`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  );
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_HOSTNAME}/api/projects`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  // const project = getProjectById(data.projects, params.id);

  const project = data.project;
  // console.log("project: ", project);

  return (
    project && (
      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        {/* Title Tag */}
        <title>{`Renewaa | Projects ${project.id} - ${project.title}`}</title>

        {/* Meta Description Tag */}
        <meta
          name="description"
          content="Welcome to Renewaa, your premier destination for cutting-edge lithium battery solutions. Explore our innovative products and services today!"
        />
        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.renewaa.com/" />
        {/* Fav Icon */}
        <link
          rel="icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
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
        <div className="mb-28">
          <div
            className={`h-[40vh] flex my-24 ${
              project.id % 2 != 0 ? "flex-row-reverse" : ""
            } static max-w-[1024px] px-4 mx-auto`}
          >
            <div
              className={`flex flex-col justify-center items-center w-3/5 bg-[#1E2434] ${
                project.id % 2 != 0 ? "pr-10" : "pl-10"
              }`}
            >
              <BsCheckCircle size={50} color="#0084EC" />
              <h4 className="text-white text-center font-bold mt-3">
                {project.title}
              </h4>
            </div>
            <div className="w-2/5 bg-[#1E2434] flex justify-center items-center relative ">
              <div className="bg-[#0084EC] h-[50vh] w-[50vh] relative overflow-hidden">
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-white ${
                    project.id % 2 === 0 ? "" : ""
                  }`}
                  style={{
                    clipPath:
                      project.id % 2 != 0
                        ? "polygon(0 0, 100% 0, 100% 100%)"
                        : "polygon(0 0, 0 100%, 100% 0)",
                  }}
                ></div>
                <img
                  src={project.mainImageUrl}
                  className="absolute bottom-0 right-0 pb-3 px-1"
                  style={{
                    maxWidth: "calc(100% - 0.5rem)",
                    maxHeight: "calc(100% - 0.5rem)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="static max-w-[1024px] px-4 mx-auto">
            {project.contents?.map((content: Content, index: number) => (
              <div key={index}>
                <p className="text-center">{content.paragraph}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
          {project.imageUrls?.length > 0 && (
            <div className="static max-w-[1024px] px-4 mx-auto">
              <div className="sec-title centred">
                <h2>Gallery</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 items-center bg-[#1E2434] px-2 rounded-xl">
                {project.imageUrls?.map((image: Url, index: number) => (
                  <div
                    key={index}
                    className="flex justify-center p-1 col-span-1"
                  >
                    <img
                      src={image.url}
                      alt={`Project image ${index + 1}`}
                      className="object-cover w-full h-[60vh]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* <div className="flex flex-row tatic max-w-[1024px] px-4 mx-auto my-10 items-center">
            <div className="flex justify-end w-full">
              {project.id - 1 >= 1 ? (
                <Link href={`/project?id=${project.id - 1}`} scroll={false}>
                  <button className="flex flex-row py-1 px-2 mx-2 rounded-xl items-center  md:py-2 md:px-4 hover:text-[#0084ec] ">
                    <AiFillCaretLeft
                      size={18}
                      color="#000000"
                      // style={{ verticalAlign: "text-bottom" }}
                    />
                    <h4 className="text-black mx-1 font-sans font-bold text-xl ">
                      Prev
                    </h4>
                  </button>
                </Link>
              ) : (
                <button
                  className="flex flex-row py-1 px-2 mx-2 rounded-xl items-center  md:py-2 md:px-4"
                  disabled
                >
                  <AiFillCaretLeft
                    size={18}
                    color="#000000"
                    // style={{ verticalAlign: "text-bottom" }}
                  />
                  <h4 className="text-black mx-1 font-sans font-bold text-xl">
                    Prev
                  </h4>
                </button>
              )} */}

          {/* {project.id + 1 < projects.length ? (
                <Link href={`/project?id=${project.id + 1}`} scroll={false}>
                  <button className="flex flex-row py-1 px-2 mx-2 rounded-xl items-baseline  md:py-2 md:px-4 hover:text-[#0084ec]">
                    <h4 className="text-black mx-1 font-sans font-bold text-xl">
                      Next
                    </h4>
                    <AiFillCaretRight
                      size={18}
                      color="#000000"
                      // style={{ verticalAlign: "text-bottom" }}
                    />
                  </button>
                </Link>
              ) : (
                <button
                  className="flex flex-row py-1 px-2 mx-2 rounded-xl items-center justify-center md:py-2 md:px-4"
                  disabled
                >
                  <h4 className="text-black mx-1 font-sans font-bold text-xl">
                    Next
                  </h4>
                  <AiFillCaretRight
                    size={18}
                    color="#000000"
                    // className="items-end"
                    // style={{ verticalAlign: "text-bottom" }}
                  />
                </button>
              )} */}
          {/* </div>
          </div> */}
        </div>
      </>
    )
  );
};

// const ProjectPage = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Project />
//     </Suspense>
//   );
// };

export default ProjectPage;
