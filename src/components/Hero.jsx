import { logoMedico, result4k } from "../assets";
import styles from "../style"; 



const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Todos los <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Centros de Salud</span>{" "}
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          En un solo lugar.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Como grupo diseñamos este proyecto para facilitar la accesibilidad 
          a centros de salud privados y públicos divulgando información general de los lugares.
        </p>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={result4k} /* className="w-[100%] h-[100%] relative z-[5]" */ />
      </div>

    </section>
  );
};

export default Hero;
