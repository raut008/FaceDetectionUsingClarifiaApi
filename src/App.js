import React from 'react';
import './App.css';
import ImageForm from './Components/ImageForm/ImageForm';
import Clarifai from "clarifai";
import DisplayImage from './Components/DisplayImage/DisplayImage';

const app = new Clarifai.App({
  apiKey: "d08b24163186402a8c660f46db66d8fa"
});

export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  displayFace = box => {
    console.log(box);
    this.setState({
      box
    })
  }
  onInputChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  onButtonSubmit = () => {
    this.setState({
      ...this.state,
      imageUrl: this.state.input
    })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then((response) => this.displayFace(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <ImageForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <DisplayImage image={this.state.imageUrl} box={this.state.box} />
        </div>

      </div>
    )
  }
}

export default App

