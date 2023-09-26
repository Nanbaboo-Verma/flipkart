const Slide = ({ slideNext, slidePrev, image }) => {

    const btnContainer = {
        display: "inline-block",
        float: "right"
    };
    const btn = {
        border: "none",
        background: "blue",
        color: "white",
        fontSize: "22px",
        padding: "5px 10px",
        borderRadius: "10px",
        margin: "0 10px"
    };
    console.log(slideNext, ' slider')
    return (
        <>
            <img src={image} alt="Sliderr_image" />
            <h1>
                {image.title}
                <span style={btnContainer}>
                    <button style={btn} onClick={slidePrev}>
                        {"<"} Prevs
                    </button>
                    |
                    <button style={btn} onClick={slideNext}>
                        {">"} Next
                    </button>
                </span>
            </h1>
        </>
    );
};
export default Slide;