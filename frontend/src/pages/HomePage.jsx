import React from 'react';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  // Sample data for LeftColumn (multiple articles with longer descriptions)
  const leftArticles = [
    {
      title: "Gisèle Pelicot's Fight for Justice",
      description:
        "Gisèle Pelicot tells other victims about her battle, as all 51 men are found guilty in a rape trial. This landmark case has sparked discussions across the globe about justice, trauma, and the power of speaking out against abuse.",
      image: "image1.png",
      readTime: "6 MIN READ",
    },
    {
      title: "A Survivor's Story of Courage",
      description:
        "Another survivor speaks about her experiences during the trial, shedding light on the trauma that continues even after the verdict. Her courage in the face of adversity highlights the need for greater support for victims of sexual assault.",
      image: "image1.png",
      readTime: "5 MIN READ",
    },
    {
      title: "The Struggle for Justice Continues",
      description:
        "After the guilty verdict, the victims continue their fight for justice and accountability. This ongoing struggle emphasizes the emotional and societal challenges victims face in seeking real change.",
      image: "image1.png",
      readTime: "7 MIN READ",
    },
  ];

  // Sample data for RightColumn (multiple articles with descriptions)
  const rightArticles = [
    {
      title: "Rape Trial Guilty Verdict",
      description:
        "The guilty verdict has shocked the public, and many are reflecting on the implications for future cases of sexual assault. This trial will go down in history as a pivotal moment in the fight for justice.",
      image: "image2.png",
    },
    {
      title: "Another Victim Speaks Out",
      description:
        "A brave victim has come forward to share her story, adding her voice to the growing chorus of those fighting for justice and exposing the ongoing trauma experienced by survivors.",
      image: "image2.png",
    },
    {
      title: "Dominique Pelicot Faces Investigation",
      description:
        "Dominique Pelicot, a key figure in the trial, is now under investigation for his role in the abuse. This article delves into the allegations and the ongoing legal proceedings surrounding him.",
      image: "image2.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-white p-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left column - spans 2 columns on md and up */}
          <div className="md:col-span-2 space-y-4">
            <LeftColumn articles={leftArticles} />
          </div>

          {/* Right column with vertical border */}
          <div className="space-y-4 border-l border-gray-300 pl-4">
            <RightColumn articles={rightArticles} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
