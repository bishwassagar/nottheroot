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
          Mail="mailto:&#98;&#105;&#115;&#104;&#119;&#97;&#115;&#64;&#116;&#117;&#116;&#97;&#46;&#105;&#111;"
          GitHub="https://github.com/bishwassagar"
          LinkedIn="https://linkedin.com/in/bishwassagar/"
          Resume={Bishwas_Resume}
        />
        <Team
          Name="Md. Musharraf"
          Rank="0x2"
          Image={SudoMosh_Img}
          Mail="mailto:&#115;&#117;&#100;&#111;&#109;&#111;&#115;&#104;&#64;&#112;&#114;&#111;&#116;&#111;&#110;&#46;&#109;&#101;"
          GitHub="https://github.com/sudomosh"
          LinkedIn="https://linkedin.com/in/sudomosh/"
          Resume="#"
        />
        <Team
          Name="Zeeshan Ali"
          Rank="0x3"
          Image={Zeeshan_Img}
          Mail="mailto:&#122;&#101;&#101;&#115;&#104;&#97;&#110;&#97;&#108;&#105;&#104;&#101;&#114;&#101;&#64;&#112;&#114;&#111;&#116;&#111;&#110;&#46;&#109;&#101;"
          GitHub="https://github.com/zeeshanali-7"
          LinkedIn="https://linkedin.com/in/zeeshan-ali-4abba6153/"
          Resume={Zeeshan_Resume}
        />
        <Team
          Name="Avinash Kumar"
          Rank="0x4"
          Image={Avinash_Img}
          Mail="mailto:&#97;&#118;&#105;&#110;&#97;&#115;&#104;&#56;&#48;&#56;&#46;&#104;&#105;&#116;&#99;&#115;&#101;&#99;&#115;&#50;&#48;&#50;&#48;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
          GitHub="https://github.com/avinash808"
          LinkedIn="https://linkedin.com/in/avinashk007/"
          Resume={Avinash_Resume}
        />
      </div>
    </div>
  );
}

export default About_Team;
