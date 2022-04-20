import Slider from "../public/slider";

function SliderV (ref) {
  let slider
  
  console.log(ref)
  if (ref) {
    slider = new Slider(ref)
    slider.initialize()
  }

  return (
    <div></div>
  )
}

export default SliderV;
