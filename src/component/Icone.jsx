import image from "../images/Programming logos and icons by hrhasnai (11).png";
import image2 from "../images/Programming logos and icons by hrhasnai (17).png";
import image3 from "../images/Programming logos and icons by hrhasnai (18).png";
import image4 from "../images/Programming logos and icons by hrhasnai (37).png";
import image5 from "../images/Programming logos and icons by hrhasnai (39).png";
import image6 from "../images/image 24.png";

function Icone() {
  return (
    <div>
      <div className="flex items-center justify-center my-10">
        <div>
          <p className="text-[#52C3D6] font-[700] texr-[22px] text-center">
            Delivering{" "}
          </p>
          <p className="text-[37px] font-[700] text-center">
            Your Project With The Newest
            <br />
            Technologies Used
          </p>
        </div>
      </div>
      <div  className="flex flex-wrap justify-evenly items-center">

        <span>
          <img src={image} alt="image" />
        </span>{" "}
        <span>
          <img src={image2} alt="image" />
        </span>{" "}
        <span>
          <img src={image3} alt="image" />
        </span>{" "}
        <span>
          <img src={image4} alt="image" />
        </span>{" "}
        <span>
          <img src={image5} alt="image" />
        </span>{" "}
        <span>
          <img src={image6} alt="image" />
        </span>
      </div>
    </div>
  );
}

export default Icone;
