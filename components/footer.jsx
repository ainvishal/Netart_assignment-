import { Image } from "./image";

export function Footer() {
    return(
        <>
            <div className="footerdiv">
                <div className="footerdiv-child"><Image imgalt={"telephone"} imgclass={"footerimg"} imgsrc={"../src/assets/telephone.png"}/><p>Toll free 1800 200 1234</p></div>
                <div className="footerdiv-child"><Image imgalt={"telephone"} imgclass={"footerimg"} imgsrc={"../src/assets/facebook.png"}/><p>www.facebook.com/cripumps</p></div>
                <div className="footerdiv-child"><Image imgalt={"telephone"} imgclass={"footerimg"} imgsrc={"../src/assets/globe.png"}/><p>www.crigroups.com</p></div>
            </div>
        </>
    );
}