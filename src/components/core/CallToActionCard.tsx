const cardData = [
  { src: "/Xlogo.png", alt: "Twitter" },
  { src: "/titktokLogo.svg", alt: "TikTok" },
  { src: "/instLogo.png", alt: "Instagram" },
  { src: "/linkLogo.png", alt: "LinkedIn" },
]

const CTAcard = () => {

  return (
    <section className="bg-[#F1F3F2] w-full max-w-[1000px] ml-4 rounded-3xl px-6 py-12 flex flex-col md:flex-row  gap-10">

      <div className="flex flex-col gap-6 w-full md:w-3/5">

        <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow inline-flex items-center gap-2 w-fit">
          <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
          Music is Classic
        </span>


        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black">
          Sequoia Inspiring <br /> Musico.
        </h1>


        <div>
          <span className="text-2xl font-semibold text-gray-800">01</span>
          <span className="block h-0.5 w-10 bg-gray-400 my-1"></span>
          <h2 className="text-lg font-semibold text-gray-800">Clear Sounds</h2>
          <p className="text-sm text-gray-600">
            Making your dream music come true
            <br />
            stay with Sequios Sounds!
          </p>
        </div>


        <div className="flex flex-col  gap-6 max-w-xl order-1 md:order-1">
          <button className="px-6 py-3 rounded-full bg-lime-300 hover:bg-lime-400 text-black font-semibold text-sm flex items-center gap-2 transition-all w-fit">
            View All Products
            <span className="rotate-315 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              ➜
            </span>
          </button>


          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Follow us on:</span>
            {cardData.map((logo, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:border-lime-300 border border-transparent transition-all overflow-hidden"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>


      <div className="relative w-full md:w-2/5 flex justify-center  order-1 md:order-2 ">
        <img
          src="/headphones.png"
          alt="Blue Headphones"
          className="w-[70%] sm:w-[80%] md:w-full object-contain"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow" />
      </div>
    </section>
  );
};

export default CTAcard;
