import HTML from "../assets/html.png";
import React from "../assets/react.png";
import CPP from "../assets/cpp.png";
import PHP from "../assets/php.png";
import RS from "../assets/robloxstudio.png";
import JS from "../assets/js.png";

function skill() {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-gradient-to-r from-slate-950 via-sky-950 to-black font-poppins">
      <h1 className="text-8xl text-sky-500 font-bold">My Skills</h1>
      <div className="grid grid-cols-3 gap-[6.5rem] mt-[8rem] mb-16">
        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src={HTML} alt="HTML" className="h-44 w-44" />
          <h3 className="text-white">HTML</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src={JS} alt="JS" className="h-44 w-44" />
          <h3 className="text-white">JavaScript</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src="" alt="Roblox Studio" className="h-44 w-44" />
          <h3 className="text-white">CSS</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src="" alt="Roblox Studio" className="h-44 w-44" />
          <h3 className="text-white">Tailwind CSS</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src="" alt="Roblox Studio" className="h-44 w-44" />
          <h3 className="text-white">Figma</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src={React} alt="React" className="h-44 w-44" />
          <h3 className="text-white">React JS</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src={PHP} alt="PHP" className="h-44 w-44" />
          <h3 className="text-white">PHP</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src={CPP} alt="CPP" className="h-44 w-44" />
          <h3 className="text-white">C++</h3>
        </div>

        <div className="h-56 w-56 bg-black/30 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center gap-2">
          <img src={RS} alt="Roblox Studio" className="h-44 w-44" />
          <h3 className="text-white">Roblox Studio</h3>
        </div>
        
      </div>
    </div>
  );
}

export default skill;
