import React from "react";
import Bishwas_Img from "../../assets/bishwas.webp";
import SudoMosh_Img from "../../assets/sudomosh.png";
import Zeeshan_Img from "../../assets/zeeshan.jpg";
import Avinash_Img from "../../assets/avinash.png";
import Team from "./Team.jsx";
import Bishwas_Resume from "../../assets/resume/Bishwas_Resume.pdf";
import Avinash_Resume from "../../assets/resume/Avinash_Resume.pdf";
import Zeeshan_Resume from "../../assets/resume/Zeeshan_Resume.pdf";

function About_Team() {
  return (
    <div
      id="team"
      className="flex flex-col items-center justify-center lg:h-screen"
    >
      <h1 className="mb-10 lg:mb-44 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Team
      </h1>
      <div className="flex flex-wrap flex-row items-center justify-center">
        <Team
          Name="Bishwas Sagar"
          Rank="0x1"
          Image={Bishwas_Img}
          Mail="mailto:bishwas@tuta.io"
          GitHub="https://github.com/bishwassagar"
          LinkedIn="https://linkedin.com/in/bishwassagar/"
          Resume={Bishwas_Resume}
        />
        <Team
          Name="Md. Musharraf"
          Rank="0x2"
          Image={SudoMosh_Img}
          Mail="mailto:sudomosh@proton.me"
          GitHub="https://github.com/sudomosh"
          LinkedIn="https://linkedin.com/in/sudomosh/"
          Resume="#"
        />
        <Team
          Name="Zeeshan Ali"
          Rank="0x3"
          Image={Zeeshan_Img}
          Mail="mailto:zeeshanalihere@proton.me"
          GitHub="https://github.com/zeeshanali-7"
          LinkedIn="https://linkedin.com/in/zeeshan-ali-4abba6153/"
          Resume={Zeeshan_Resume}
        />
        <Team
          Name="Avinash Kumar"
          Rank="0x4"
          Image={Avinash_Img}
          Mail="mailto:avinash808.hitcsecs2020@gmail.com"
          GitHub="https://github.com/avinash808"
          LinkedIn="https://linkedin.com/in/avinashk007/"
          Resume={Avinash_Resume}
        />
      </div>
    </div>
  );
}

export default About_Team;
