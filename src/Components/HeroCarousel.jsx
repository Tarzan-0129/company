import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="w-full h-screen overflow-hidden">

      <Nabbar />

      {/* Background Video */}
      <video
        src="/header.mp4" // <-- use public path or import
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl sm:text-5xl font-bold text-center px-4">
          Jump into our world of opportunities
        </h1>
      </div>
    </div>
  );
}

export default HeroCarousel;
