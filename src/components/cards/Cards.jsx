import Bishwas from "../../assets/me-about.webp";

function Cards() {
  return (
    <section id="about" className="flex m-72 ">
      <div className="flex flex-row space-x-10 items-center justify-center">
        <div className="w-44 sm:w-30 md:w-60 rounded-full overflow-hidden">
          <div>
            <img src={Bishwas} alt="About Img" />
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <i>0x1</i><br/> Bishwas Sagar
          </h1>
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
