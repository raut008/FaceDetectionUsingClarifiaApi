import React from 'react'
import { FaceBox } from "./DisplayImage.style";

const DisplayImage = (props) => {

    return (
        <div className="container justify-content-center">
            <div style={{ position: "absolute" }}>
                <img id="inputImage"
                    className="justify-content-center d-flex"
                    src={props.image} alt=""
                    width="500px" height="auto"
                    style={{
                        display: "block",
                        margin: "auto"
                    }}
                />
                <FaceBox
                    className="justify-content-center d-flex"
                    style={{
                        top: props.box.topRow,
                        right: props.box.rightCol,
                        bottom: props.box.bottomRow,
                        left: props.box.leftCol
                    }} />
            </div >
        </div>

    )
}

export default DisplayImage
