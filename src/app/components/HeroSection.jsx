import React from "react";
import "../../../public/Image.png";

export default function Home() {
  return (
    <>
      <section className="flex h-[100vh] gap-4 flex-col justify-center items-center">
        <nav>
          <ul className="flex gap-5 mb-10">
            <li>
              <a
                href="{}"
                className=" duration-200 ease-in-out hover:text-slate-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="{}"
                className=" duration-200 ease-in-out hover:text-slate-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="{}"
                className=" duration-200 ease-in-out hover:text-slate-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="{}"
                className=" duration-200 ease-in-out hover:text-slate-200"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <h3 className="text-2xl font-semibold ">Hello I am,</h3>
        <h1 className=" bg-clip-text text-6xl font-bold text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600">
          Arnold NIYIGENA
        </h1>
        <h3 className="text-2xl font-semibold">A software Developer</h3>
      </section>
      <section className="about wrapper flex items-center  h-[100vh] overflow-hidden">
        <div className="content flex flex-col items-end w-1/2 border bg-purple-300/20 backdrop-blur-sm border-white rounded-2xl gap-4 h-auto p-10">
          <h2 className="text-4xl font-bold mb-4 ">About Me</h2>
          <p className=" leading-relaxed text-right ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            repellendus labore quaerat quis maiores tempora repudiandae tempore
            consectetur veritatis rem? Aspernatur voluptatem soluta nihil ipsum
            consequatur omnis dolore mollitia tempora.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat repellendus labore quaerat
            quis maiores tempora repudiandae tempore consectetur veritatis rem?
            Aspernatur voluptatem soluta nihil ipsum consequatur omnis dolore
            mollitia tempora.
          </p>
          <div className="m-4">
            {" "}
            <a href="{}" className="bg-teal-400 rounded px-4 py-2 text-lg ">
              Hire Me
            </a>
            <a href="{}" className="border border-red-500 mx-2 px-4 py-2">
              Download Cv
            </a>
          </div>
        </div>
        <div className="img">
          <img src="Image.png" alt="image" width={650} />
        </div>
      </section>
    </>
  );
}
