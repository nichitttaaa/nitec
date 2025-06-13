const CTAcard = () => {
  const x = "X_icon.svg.png";
  return (
    <section className="bg-[#F1F3F2] w-[600px] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col gap-6 max-w-xl">
        <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow inline-flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
          Music is Classic
        </span>
        <h1 className="text-5xl font-bold leading-tight text-black">
          Sequoia Inspiring <br /> Musico.
        </h1>
        <div>
          <span className="text-2xl font-semibold text-gray-800">01</span>
          <span className="block h-0.5 w-10 bg-gray-400 my-1"></span>
          <h2 className="text-lg font-semibold text-black-700">Clear Sounds</h2>
          <p className="text-sm text-gray-600 ">
            Making your dream music come true
            <br />
            stay with Sequios Sounds!
          </p>
        </div>
        <button className="mt-4 px-6 py-3 rounded-full bg-lime-300 hover:bg-lime-400 text-black font-semibold text-sm w-fit flex items-center gap-2 !p-2">
          View All Products
          <span className=" rotate-315 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
            ➜
          </span>
        </button>

        <div className="flex items-center gap-4 mt-6">
          <span className="text-sm text-gray-500">Follow us on:</span>
          <div className="flex items-center gap-2">
            <a href="#" className="bg-white rounded-full p-2 shadow">
              <img src="/Xlogo.png" alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white rounded-full p-2 shadow">
              <img src="/tiktokLogo.svg" alt="TikTok" className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white rounded-full p-2 shadow">
              <img src="/instLogo.png" alt="Instagram" className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white rounded-full p-2 shadow">
              <img src="/linkLogo.png" alt="LinkedIn" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src="/headphones.png"
          alt="Blue Headphones"
          className="w-[300px] md:w-[400px] object-contain"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow">
          <span className="text-xl">&lt;/&gt;</span>
        </div>
      </div>
    </section>
  );
};

export default CTAcard;
