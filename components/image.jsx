

export function Image({ divclass, imgclass, imgsrc, imgalt }) {
    return(
        <>
            <div className={divclass} >
                <img className={imgclass} src={imgsrc} alt={imgalt} />
            </div>
        </>
    );
}