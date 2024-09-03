import img from "../images/3.png"
function MainContent() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200">
        <div className="text-center mb-[270px] ">
          <div className="mb-11 flex justify-center space-x-4 ">
            <img
              src="../../public/imagefigma.png"
              alt="User 1"
              className="w-[210px] h-[52px]  "
            />
          </div>
          <h2 className="text-5xl font-bold">
            WE BUILD <span className="text-cyan-500">APPS</span>
            <h1 className="text-6xl mt-5"> THAT USERS LOVE!</h1>
          </h2>
          <hr />
          <p className="mt-4 lg:text-lg ">
            We believe that we succeed when our clients succeed,
            <br />
            which is why we never stop learning.
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={img}
            alt="User 1"
            width={177}
            className="absolute bottom-10"
          />
          
        </div>
      </main>
    </div>
  );
}

export default MainContent;
