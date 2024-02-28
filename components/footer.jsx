import { Image } from "./image";

export function Footer() {
    return(
        <>
            <div className="footerdiv">
                <div className="footerdiv-child"><Image imgalt={"telephone"} imgclass={"footerimg"} imgsrc={"/telephone.png"}/><p>Toll free 1800 200 1234</p></div>
                <div className="footerdiv-child"><Image imgalt={"telephone"} imgclass={"footerimg"} imgsrc={"/facebook.png"}/><p>www.facebook.com/cripumps</p></div>
                <div className="footerdiv-child"><Image imgalt={"telephone"} imgclass={"footerimg"} imgsrc={"/globe.png"}/><p>www.crigroups.com</p></div>
            </div>
        </>
    );
}