"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Services = () => {
  const images = [
    "/assets/images/service/service-tech copy.jpg",
    "/assets/images/service/service-maintenance - Copy.jpg",
    "/assets/images/service/service-solor - Copy.jpg",
  ];
  const [image1, setImage1] = useState<string>(images[0]);
  const [image2, setImage2] = useState<string>(images[1]);
  const [image3, setImage3] = useState<string>(images[2]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleKeep = async (id: number) => {
    if (selectedImage) {
      // if (selectedImage.size > 100 * 1024) {
      //   console.error("Error: The selected image is larger than 100KB");
      //   return;
      // }

      try {
        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("imageName", images[id].split("/").pop() || "");

        const response = await fetch("/api/admin/uploadserviceimage", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          toast.info("Image uploaded and copied successfully");
          console.log("Image uploaded and copied successfully");
        } else {
          toast.error("Error uploading and copying image");
          console.error("Error uploading and copying image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image");
      }
    }
  };

  const handleCancel = (id: number) => {
    setSelectedImage(null);
    if (id == 0) {
      setImage1(images[0]);
    } else if (id == 1) {
      setImage2(images[1]);
    } else if (id == 2) {
      setImage3(images[2]);
    }
  };

  return (
    <>
      <section className="service-style-two sec-pad">
        <div className="auto-container">
          <div className="upper-box">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                <div className="sec-title text-center2">
                  <h2>Our efficient solutions</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={image1} alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="inner">
                      <div className="icon-box">
                        <img src="/assets/images/icons/icon-29.png" alt="" />
                      </div>
                      <div className="text">
                        <span className="category">Next Generation</span>
                        <h3>
                          <Link href="/about" scroll={false}>
                            Electric Mobility Solutions
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={image2} alt="" />
                  </figure>

                  <div className="content-box">
                    <div className="inner">
                      <div className="icon-box">
                        <img src="/assets/images/icons/icon-30.png" alt="" />
                      </div>
                      <div className="text">
                        <span className="category">High End</span>
                        <h3>
                          <Link href="/about" scroll={false}>
                            Energy Storage Solutions
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={image3} alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="inner">
                      <div className="icon-box">
                        <img src="/assets/images/icons/icon-31.png" alt="" />
                      </div>
                      <div className="text">
                        <span className="category">
                          Solar Ongrid, and Off-Grid
                        </span>
                        <h3>
                          <Link href="/about" scroll={false}>
                            Installations
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="col-lg-4 flex justify-center">
              <h1>1</h1>
            </div>
            <div className="col-lg-4 flex justify-center">
              <h1>2</h1>
            </div>
            <div className="col-lg-4 flex justify-center">
              <h1>3</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="space-y-5">
        <div className="flex flex-row items-center justify-between mx-10 ">
          <h5>image(1):</h5>
          <input
            type="file"
            className="py-2 px-4 border border-gray-300 rounded-md"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSelectedImage(e.target.files[0]);
                setImage1(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />

          <button
            onClick={() => handleKeep(0)}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Keep
          </button>
          <button
            onClick={() => handleCancel(0)}
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            Cancel
          </button>
        </div>

        <div className="flex flex-row items-center justify-between mx-10">
          <h5>image(2):</h5>
          <input
            type="file"
            className="py-2 px-4 border border-gray-300 rounded-md"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSelectedImage(e.target.files[0]);
                setImage2(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />

          <button
            onClick={() => handleKeep(1)}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Keep
          </button>
          <button
            onClick={() => handleCancel(1)}
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            Cancel
          </button>
        </div>

        <div className="flex flex-row items-center justify-between mx-10">
          <h5>image(3):</h5>
          <input
            type="file"
            className="py-2 px-4 border border-gray-300 rounded-md"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSelectedImage(e.target.files[0]);
                setImage3(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />

          <button
            onClick={() => handleKeep(2)}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Keep
          </button>
          <button
            onClick={() => handleCancel(2)}
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
