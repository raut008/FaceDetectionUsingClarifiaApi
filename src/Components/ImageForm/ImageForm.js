import React, { Component } from 'react'

export class ImageForm extends Component {
    render() {
        return (
            <div className=" row col-12 mx-0 px-0">
                <h3 className="col-12 px-2">
                    Upload Image and We will detect your faces in your picture
                </h3>
                <div className="col-12 px-2 d-flex justify-content-center">
                    <input type="text" className="w-60 d-flex" onChange={this.props.onInputChange} />
                    <button className="btn btn-success d-flex" onClick={this.props.onButtonSubmit}>DETECT</button>
                </div>
            </div>
        )
    }
}

export default ImageForm;
