import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-15 bg-[#0e0e0e] pt-25 pb-18">
      <div>
        <div className="mb-6 h-[2px] w-20 origin-left bg-[#f2ca50] transition-transform duration-500 hover:scale-x-125"></div>

        <h1 className="font-[Playfair_Display] text-6xl leading-[1.05] font-bold text-white">
          El Templo del Vinilo
        </h1>
        <h2 className="font-[Playfair_Display] text-6xl font-bold text-white">
          <span className="italic text-[#f2ca50]">Colecciones </span>
          Eternas
        </h2>
        <p className="mt-6 mb-12 max-w-130 font-[Inter] text-[#d0c5af]">
          Una amplia coleccion de iconicos vinilos, y ediciones unicas.
          Fabricadas para los coleccionistas mas ambiciosos que valoran la
          antigua cultura musical.
        </p>
        <div className="flex gap-5">
          <Link to="/catalogo">
            <button className="cursor-pointer bg-[#f2ca50] p-3 px-4 font-[Inter] text-xs text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#ffd65d] hover:shadow-[0_14px_30px_rgba(242,202,80,0.2)]">
              MIRA NUESTRA COLECCION
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-hidden">
        <img
          className="h-70 w-70 cursor-pointer object-cover transition-all duration-700 hover:-translate-y-2 hover:rotate-[1.5deg] hover:scale-[1.04] hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVCF6E02SoIR3dCIrMBqQAcs-mD2h8WfRFxfRyU9qxkd_pPORKXBlzejeskEPjfpRqB_neaE26PfMd5V3ktbyPcp9guCzkxBsK5XALEEXbyDZXJwuVTFMgC5eFrHEgQGXnNXA3YDHMFTdgs7ViP-7tSmnOVpNhTLfbnogbpQt_o127zDi3B53gfjxNbAAnOv0Cdnas56BRvS_2el6tGmc93SMDMN-xiYrFMJMAqm1TI5OB7qBiW_kTlSlnba17WdFyVhQc7HaN4B0"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
