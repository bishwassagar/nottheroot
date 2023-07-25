import Bishwas from "../../assets/me-about.webp";
import "./Cards.css";

function Cards() {
  return (
    <section id="about" className="flex m-72">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Bishwas} alt="About Img" />
          </div>
        </div>

        <div className="about__content">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <i>0x1</i><br/> Bishwas Sagar
          </h1>
          <p>
            ./whoami <br /> I&apos;m an IT enthusiast who loves what he does.{" "}
            <br /> 🌱 What I am studying : <br />
            &gt; I&apos;m improving my knowledges on Linux and Container
            orchestration. <br />
            &gt; I&apos;m learning from scratch Flutter and Python. <br />
            &gt; I&apos;m looking to collaborate on ... ideas and projects and
            hopefully more in the future!
          </p>
          <a
            href="https://www.linkedin.com/in/bishwassagar/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer relative group hover:bg-[#333] transition duration-300 ease-in hover:-translate-x-2 hover:translate-y-2 object-bottom">
              <h1 className="group-hover:text-white text-[#333] font-bold">
                Let&apos;s Talk!
              </h1>
              <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
                <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10"></div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cards;
