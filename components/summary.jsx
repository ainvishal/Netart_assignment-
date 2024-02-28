import { Image } from "./image";

export function Summary() {
    return(
        <>
            <div className="summary">
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                <Image imgclass={"summaryimg"} imgalt={"stock"} imgsrc={"/3.png"} />
                <p style={{ textAlign: "center", padding: "5px 0 10px 0"  }}>
                    Valves - Pumps - Pipes - IoT Drives &amp; Controllers - Wires &amp; Cables -
                    Solar Systems - Motors{" "}
                </p>
                <hr style={{ borderTop: "1px solid red" }} />
            </div>
        </>
    );
}