import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Nabbar />
      <video
        src="/assets/img/header.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="mb-8 mt-6 text-white sm:text-4xl font-bold text-center px-5 w-md:max-w-xl">
          <span className="text-blue-600">Empowering</span> Your Business
          With our global network of specialized firms, we offer
          <span className="font-bold">
            human resources and workforce solutions that empower diversity,
          </span>
          ensure compliance, and drive business success.
        </p>
      </div>
    </div>
  );
}

export default HeroCarousel;
