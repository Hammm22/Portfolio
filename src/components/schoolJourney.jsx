function schooljourney() {
  return (
    <div className="h-[103vh] flex justify-center items-center flex-col bg-gradient-to-r from-slate-950 via-sky-950 to-black font-poppins">
      <div className="flex flex-col items-center justify-center gap-y-20 mt-7">
        <h1 className="text-8xl text-sky-500 font-bold">School Journey</h1>
        <div className="w-[80rem] h-[32rem] flex flex-row justify-between">
          <div className="h-96 w-96 flex flex-col justify-center items-center text-white bg-black/30 rounded-[25px] backdrop-blur-lg">
            <img src="" alt="" />
            <h1>Elementary School</h1>
            <h3>SDN Cibubur 05</h3>
            <h5>2015-2021</h5>
          </div>
          <div className="h-96 w-96 flex flex-col justify-center items-center text-white bg-black/30 rounded-[25px] backdrop-blur-lg">
            <img src="" alt="" />
            <h1>Junior High School</h1>
            <h3>SMPN 233 Jakarta</h3>
            <h5>2021-2024</h5>
          </div>
          <div className="h-96 w-96 flex flex-col justify-center items-center text-white bg-black/30 rounded-[25px] backdrop-blur-lg">
            <img src="" alt="" />
            <h1>Senior High School</h1>
            <h3>SMK Prestasi Prima</h3>
            <h5>2024-Now</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default schooljourney;
