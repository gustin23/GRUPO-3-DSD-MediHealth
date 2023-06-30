import React from "react";
import styles from "./style";
import "./List-copy.css"
import { Business, Footer, Navbar, Testimonials, Hero } from "./components";
import {star, shield, send} from "./assets"

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business
            title="Hospital de Clínicas José de San Martín UBA"
            content="El Hospital de Clínicas José de San Martín es un hospital nacional y público dependiente de la Universidad de Buenos Aires con múltiples especialidades. Cualquier persona, incluso si tiene cobertura de una obra social, puede concurrir al hospital para atención en cualquier especialidad médica, diagnóstico, entre otras."
            iframe="https://www.google.com/maps/embed?pb=!4v1688070616303!6m8!1m7!1sCAoSLEFGMVFpcFBsTVNxVHhZRVd5Um1lR2xGNmRUbllYazRBMHlPcGJxTGpaT2t0!2m2!1d-34.5988975!2d-58.3976246!3f156.93892935544073!4f15.914061583557597!5f0.7820865974627469"
            icon1={star}
            ubicacion="Av. Córdoba 2351, C1120 CABA"
            icon2={shield}
            horarios="Abierto las 24hrs."
            icon3={send}
            contacto="011 5950-8000"
            website="www.hospitaldeclinicas.uba.ar"
          />
          <Business
            title="Hospital Naval Dr. Pedro Mallo"
            content="El Hospital Naval es un centro médico especializado en cardiología clínica, cirugía infantil, gastroenterología y diabetología. Atiende a personas afiliadas a la Obra Social IOSFA, pacientes cuyas Obras Sociales estén convenidas con la Institución y pacientes particulares a través de la Fundación Sanidad Naval (FUSANA)."
            iframe="https://www.google.com/maps/embed?pb=!4v1688070506191!6m8!1m7!1scBWhBivVKWk9J1VrkcxY-w!2m2!1d-34.60529125575891!2d-58.43334617653323!3f27.827669681758085!4f-0.8755770045795686!5f0.7820865974627469"
            icon1={star}
            ubicacion="Av. Patricias Argentinas 351, C1405 CABA"
            icon2={shield}
            horarios="Abierto las 24hrs."
            icon3={send}
            contacto="011 4103-5300"
            website="www.hnpm.mil.ar"
         />
          <Business
            title="Hospital Italiano de Buenos Aires"
            content="El Hospital Italiano de Buenos Aires es una asociacion civil sin fines de lucro de carácter privado, dedicada a la medicina general y alta conplejidad. Fue fundado en 1853 por la Sociedad Italiana de Beneceficiencia en BS.AS."
            iframe="https://www.google.com/maps/embed?pb=!4v1688070412399!6m8!1m7!1sJRvDEiUL95Iy79Y1Hbv_lQ!2m2!1d-34.60592272631242!2d-58.42715220195141!3f150.53785807367225!4f9.413646655125191!5f0.7820865974627469"
            icon1={star}
            ubicacion="Tte. Gral. Juan Domingo Perón 4190, C1199 CABA"
            icon2={shield}
            horarios="Abierto las 24hrs."
            icon3={send}
            contacto="011 4959-0200"
            website="www.hospitalitaliano.org.ar"
        />
          <Business
            title="Hopital Penna"
            content="Fundado en 1927, el Hospital “Dr. José María Penna” es un centro de salud gratuito especializado en biopsia, endoscopia, radiología y traumatología."
            iframe="https://www.google.com/maps/embed?pb=!4v1688070210775!6m8!1m7!1sqWVgqMKrnu-wujdWhfl1ig!2m2!1d-34.64288225567874!2d-58.41066189106233!3f152.35714845315616!4f-0.883975685990734!5f1.0192729178748197"
            icon1={star}
            ubicacion="Dr. Prof. Pedro Chutro 3380, C1437 CABA"
            icon2={shield}
            horarios="Abierto las 24hrs."
            icon3={send}
            contacto="011 4911-5555"
            
        />
          <Business
            title="Centro Médico Barrial N° 1"
            content="Brinda atención en medicina clínica, pediatría y tocoginecología -en forma absolutamente gratuita-. Se desarrollan actividades grupales de prevención y promoción de la salud."
            iframe="https://www.google.com/maps/embed?pb=!4v1688068700627!6m8!1m7!1sr_xC4TzF5KczLHrDire_FQ!2m2!1d-34.64571786703745!2d-58.42455355346476!3f194.17336!4f0!5f0.7820865974627469"
            icon1={star}
            ubicacion="Las Palmas 2479, C1437 CABA"
            icon2={shield}
            horarios="Consultar horarios presencialmente."
            icon3={send}
            contacto="011 4919-7144"
            website="buenosaires.gob.ar/salud/cmb-1"
        />

          <Business
            title="Hospital Prof. Dr. Juan P. Garrahan"
            content="El Hospital Prof. Dr. Juan P. Garrahan es el centro pediátrico de referencia en salud pública, gratuita y de alta complejidad de la Argentina."
            iframe="https://www.google.com/maps/embed?pb=!4v1688084984364!6m8!1m7!1sUw6hRz4IPPBu7dXYINCRtw!2m2!1d-34.63065878744735!2d-58.3914955420644!3f263.27982!4f0!5f0.7820865974627469"
            icon1={star}
            ubicacion="Pichincha 1890, C1245 CABA"
            icon2={shield}
            horarios="Abierto las 24 horas."
            icon3={send}
            contacto="011 4122-6000"
            website="www.garrahan.gov.ar"
        />
        
        </div>
      </div>

      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default App
