import Banner from "./components/Banner";
import Working from "./components/Working";
import About from "./components/About";
import Funfact from "./components/Funfat";
import Projects from "./components/Projects";
import Services from "./components/Services";
import React, { useEffect, useRef, useState } from "react";
import ScrollButton from "./components/ScrollButton";

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* Title Tag */}
      <title>
        Renewaa | Home - Your Premier Destination for Cutting-Edge Lithium
        Battery Solutions
      </title>
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
      {/* Stylesheets */}
      {/* <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
      <link href="assets/css/flaticon.css" rel="stylesheet" />
      <link href="assets/css/owl.css" rel="stylesheet" />
      <link href="assets/css/bootstrap.css" rel="stylesheet" />
      <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
      <link href="assets/css/animate.css" rel="stylesheet" />
      <link href="assets/css/jquery-ui.css" rel="stylesheet" />
      <link href="assets/css/theme-color.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="assets/css/responsive.css" rel="stylesheet" /> */}

      <div className="boxed_wrapper blue-color">
        <Banner />
        {/* banner-section end */}
        {/* about-section */}
        <About />

        {/* about-section end */}
        {/* funfact-section */}
        <Funfact />
        {/* funfact-section end */}
        {/* service-style-two */}
        <Services />
        {/* service-style-two end */}
        {/* working-section */}
        <Working />
        {/* working-section end */}
        {/* project-section */}
        <Projects />
        {/* project-section end */}

        {/* scroll to top */}
        <ScrollButton />
      </div>
    </>
  );
}
