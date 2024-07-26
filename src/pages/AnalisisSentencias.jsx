import { lexbotLogo, check } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";

const AnalisisSentencias = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[35rem]">
          <h2 className="h2 mb-4 md:mb-8">Analisis de Sentencias</h2>

          <ul className="max-w-[30rem] mb-10 md:mb-14">
            <p className="body-2 mt-3 text-n-4">
              With smart automation and top-notch security, it's the perfect
              solution for teams looking to work smarter
            </p>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <img src={check} width={24} height={24} alt="check" />
                <h6 className="body-2 ml-5">My li</h6>
              </div>
            </li>
          </ul>
            <Button className="mb-10">Try it now</Button>
        </div>

        <div className="flex items-center justify-center border p-10 bg-black md-w-3/5 sm:w-full sm:mt-10">
          <img src={lexbotLogo} width={400} height={400} alt="lexbot" />
        </div>
      </div>
    </Section>
  );
};

export default AnalisisSentencias;
