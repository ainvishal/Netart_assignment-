import { Image } from "./image";

export function Section() {
    return(
        <>
            <div className="sectiondiv">
                <b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
                <ul>
                    <li>
                    C.R.I.&apos;s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                    </li>
                    <li>
                    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                    </li>
                </ul>
                <Image imgclass={"sectionimg"} imgsrc={"/2.png"} />
                <p>Government of India has awarded the <b>&quot;National Energy Conservation Award 2018&quot;</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </>
    );
}