import graphicCover from "../Images/ezgif.com-webp-to-jpg.jpg";
import webDevCover from "../Images/web-dev-cover.jpg";
import photographyCover from "../Images/Photography.jpg";

export default [
  {
    id: 1,
    coverImage: `${graphicCover}`,
    logo: "./src/Assets/graphic-design-svgrepo-com.svg",
    title: "Graphic Design",
    subText:
      "Transforming Ideas into Visual Masterpieces: Graphic Design Excellence",
  },

  {
    id: 2,
    coverImage: `${webDevCover}`,
    logo: "./src/Assets/Github.svg",
    title: "Web Development",
    subText:
      "Revolutionizing the Digital Experience: Discover My Projects, Where Innovation Meets Impeccable Design",
  },

  {
    id: 3,
    coverImage: `${photographyCover}`,
    logo: "./src/Assets/instgram.svg",
    title: "Photography",
    subText:
      "Capturing Moments, Creating Memories: The Artistry of Exceptional Photography",
  },
];
