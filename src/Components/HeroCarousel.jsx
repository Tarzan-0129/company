import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Nabbar />

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          title="Gumlet clean video"
          src="https://play.gumlet.io/embed/682064c6a2826ae5397ec00d?autoplay=true&mute=true&controls=false&loop=true&preload=metadata&background=1"
          style={{
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          loading="lazy"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Optional Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4">
        <span className="text-4xl sm:text-5xl font-bold">
          Building careers. Building organisations.
        </span>
        <span className="text-sm sm:text-xl mt-4 max-w-2xl">
          Arisezen is India's leading executive search and talent advisory firm,
          proudly shaping the future of multinationals and Indian businesses for over years
        </span>
      </div>
    </div>
  );
}

export default HeroCarousel;
