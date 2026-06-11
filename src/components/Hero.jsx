import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#0e0e0e] px-5 pt-14 pb-14 sm:px-8 md:gap-12 md:pt-20 lg:flex-row lg:gap-15 lg:px-10 lg:pt-25 lg:pb-18">
      <div className="w-full max-w-130 lg:w-auto">
        <div className="mb-6 h-[2px] w-20 origin-left bg-[#f2ca50] transition-transform duration-500 hover:scale-x-125"></div>

        <h1 className="font-[Playfair_Display] text-4xl leading-[1.05] font-bold text-white sm:text-5xl lg:text-6xl">
          El Templo del Vinilo
        </h1>
        <h2 className="font-[Playfair_Display] text-4xl leading-[1.1] font-bold text-white sm:text-5xl lg:text-6xl">
          <span className="italic text-[#f2ca50]">Colecciones </span>
          Eternas
        </h2>
        <p className="mt-6 mb-9 max-w-130 font-[Inter] leading-7 text-[#d0c5af] sm:mb-12">
          Una amplia coleccion de iconicos vinilos, y ediciones unicas.
          Fabricadas para los coleccionistas mas ambiciosos que valoran la
          antigua cultura musical.
        </p>
        <div className="flex gap-5">
          <Link to="/catalogo">
            <button className="cursor-pointer bg-[#f2ca50] p-3 px-4 font-[Inter] text-[11px] text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#ffd65d] hover:shadow-[0_14px_30px_rgba(242,202,80,0.2)] sm:text-xs">
              MIRA NUESTRA COLECCION
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-130 overflow-hidden sm:w-auto">
        <img
          className="aspect-square w-full cursor-pointer object-cover transition-all duration-700 hover:-translate-y-2 hover:rotate-[1.5deg] hover:scale-[1.04] hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)] sm:h-70 sm:w-70"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVCF6E02SoIR3dCIrMBqQAcs-mD2h8WfRFxfRyU9qxkd_pPORKXBlzejeskEPjfpRqB_neaE26PfMd5V3ktbyPcp9guCzkxBsK5XALEEXbyDZXJwuVTFMgC5eFrHEgQGXnNXA3YDHMFTdgs7ViP-7tSmnOVpNhTLfbnogbpQt_o127zDi3B53gfjxNbAAnOv0Cdnas56BRvS_2el6tGmc93SMDMN-xiYrFMJMAqm1TI5OB7qBiW_kTlSlnba17WdFyVhQc7HaN4B0"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
