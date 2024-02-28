import { Image } from "./image";


export function Heading() {
    return(
        <>
            <div>
                <Image divclass={"logodiv"} imgclass={"logoImage"} imgsrc={"/logo.png"} imgalt={"logo"} />
            </div>
        </>
    );
}