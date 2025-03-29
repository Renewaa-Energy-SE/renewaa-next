"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

type SlideItem = {
  backgroundImage: string;
  videoLink: string;
  header1_part1: string;
  header1_part2: string;
  header6: string;
  bigText: string;
};

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideItems: SlideItem[] = [
    {
      backgroundImage: "/assets/images/banner/Banner-one.jpg",
      videoLink: "/assets/videos/Lithium-Batteries.mp4",
      header1_part1: "Bright ",
      header1_part2: "Alternative",
      header6: "Empowering our future with solar energy.",
      bigText: "Renewaa",
    },
    {
      backgroundImage: "/assets/images/banner/Banner-three.jpg",
      videoLink: "/assets/videos/Banner-video2.mp4",
      header1_part1: "Turn to",
      header1_part2: "solar power",
      header6: "Today’s resource for a brighter tomorrow.",
      bigText: "gogreen",
    },
    {
      backgroundImage: "/assets/images/banner/Banner-two.jpg",
      videoLink: "/assets/videos/Banner-video-3.mp4",
      header1_part1: "Power of",
      header1_part2: "Our Innovation",
      header6: "We provide clean energy, with innovative products.",
      bigText: "turbines",
    },
  ];

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === slideItems.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  return (
    <section className="banner-section centred">
      <div className="banner-carousel">
        {slideItems.map(
          (item, index) =>
            index === activeIndex && (
              <div
                className={`slide-item ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                />
                <div className="auto-container">
                  <div className="content-box">
                    <div className="video-btn">
                      <Link
                        href={item.videoLink}
                        className="lightbox-image video-btn"
                        data-caption=""
                      >
                        <i className="flaticon-play-button" />
                        <span className="border-animation" />
                        <span className="border-animation border-2" />
                        <span className="border-animation border-3" />
                      </Link>
                    </div>
                    <h1>{item.header1_part1}</h1>
                    <h1>{item.header1_part2}</h1>
                    <h6>Empowering our future with solar energy.</h6>
                    <div className="btn-box">
                      <Link
                        href="/about"
                        className="theme-btn btn-one"
                        scroll={false}
                      >
                        <i className="flaticon-right-arrow" />
                        Read More
                      </Link>
                    </div>
                    <span className="big-text">{item.bigText}</span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Banner;
