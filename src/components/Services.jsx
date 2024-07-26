import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { lexbotServices, lexbotServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="IA para abogados ganadores"
          text="Lexbot libera el potencial de la inteligencia artificial para tus casos legales"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Ver los Casos de Forma Inteligente</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Con LexBot, descubres más que los demás. Ahora puedes
                identificar en tus casos:
              </p>
              <ul className="body-2">
                {lexbotServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:px-10 pb-2">
                <h4 className="h4 mb-0 text-lg">
                  Análisis de Documentos
                </h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  LexBot analiza evidencias, sentencias, demandas y contratos.
                  Proporcionando resúmenes detallados y recomendaciones,
                  ayudándote a comprender y actuar eficientemente sobre cada
                  documento legal.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[56rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">
                  Generación de Documentos Inteligentes
                </h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  LexBot genera documentos legales en múltiples formatos: PDF,
                  MS Word, y texto listo para copiar en el chat. Además, los
                  documentos pueden enviarse por correo electrónico y SNE
                  (Sistema de Notificación Electrónica).
                </p>

                <ul className="flex items-center justify-between">
                  {lexbotServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[4rem] h-[4rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={36} height={36} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Working Robot"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:px-10 pb-2">
                  <h4 className="h4 mb text-base">Correo Electrónico y SNE:</h4>
                  <ul className="text-xs mb-0 text-n-3">
                    <li>
                      Correo Electrónico: Permite enviar documentos directamente
                      desde la plataforma. <br />
                    </li>
                    <li>
                      SNE: Un agente virtual de LexBot puede leer las
                      notificaciones de la corte, resumirlas y enviarlas al
                      abogado.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
