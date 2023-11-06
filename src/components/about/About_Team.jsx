import React from 'react'
import About from "./About.jsx";
import Bishwas_Img from "../../assets/bishwas.webp";
import SudoMosh_Img from "../../assets/sudomosh.png";
import Zeeshan_Img from "../../assets/zeeshan.jpg";
import Avinash_Img from "../../assets/avinash.png";


function About_Team() {
  return (
    <div>
            <About Name='Bishwas Sagar' Rank='0x1' LinkedIn ='https://www.linkedin.com/in/bishwassagar/' Image={Bishwas_Img} />
            <About Name='Md. Musharraf' Rank='0x2' LinkedIn ='https://www.linkedin.com/in/bishwassagar/' Image={SudoMosh_Img} />
            <About Name='Zeeshan Ali' Rank='0x3' LinkedIn ='https://www.linkedin.com/in/bishwassagar/' Image={Zeeshan_Img }/>
            <About Name='Avinash Kumar' Rank='0x4' LinkedIn ='https://www.linkedin.com/in/bishwassagar/' Image={Avinash_Img} />
    </div>
  )
}

export default About_Team