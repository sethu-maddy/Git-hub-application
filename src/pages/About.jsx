import React from "react";
import image from "./WIN_20240618_09_49_30_Pro.jpg";
function About() {
  return (
    <div>
      <h1 className="text-4xl">This is all about the About page</h1>
      <img className="animate-pulse flex space-x-1 " src={image}></img>
      <div className="pt-10">
        {" "}
        <p className="text-slate-700 hover:text-blue-600 inline px-4 ">Description :</p><p className="inline px-2 ">In the photo, a young man with a neatly groomed beard and mustache is sitting in what appears to be a modern office or conference room. He is looking to his right, away from the camera, with a thoughtful expression. His hair is styled up and voluminous, and he is wearing a blue button-up shirt. The background shows glass walls, office chairs, and tables, with bright lighting and a visible "FIRE EXIT" sign on one of the doors. The overall setting suggests a professional environment.</p>
      </div>
    </div>
  );
}

export default About;
