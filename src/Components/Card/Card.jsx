import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Card/Card.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
};
function Card() {
  return (
    <div>
      <div className="card product-card ">
        <Carousel responsive={responsive}>
          <div>
            <img
              className="prd-img w-100"
              alt=""
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1027800814785286766/original/36b1e08e-b91a-464d-bfe5-a8f215dd3b59.jpeg?im_w=720"
            ></img>
          </div>
          <div>
            <img
              className="prd-img w-100"
              alt=""
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1027800814785286766/original/96cc1319-4815-4392-834d-88df22679f3c.jpeg?im_w=720"
            ></img>
          </div>
          <div>
            <img
              className="prd-img w-100"
              alt=""
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1027800814785286766/original/a402fede-9f79-4ff7-898d-0ac128792bf2.jpeg?im_w=720"
            ></img>
          </div>
        </Carousel>

        <div class="card-body ps-1">
          <div className="row">
            <div className="col-8">
              <h6 class="card-text">Marigot, St.Martin</h6>
            </div>
            <div className="col-4 card-right-cnt ps-4">
              <img
                className="pt-1 me-1"
                src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"
              />
              <p>New</p>
            </div>
          </div>
          <p className="card-text m-0 p-0">Added 9 weeks ago</p>
          <p className="card-text m-0 p-0">5 nights</p>
          <h6 className="card-text u-text">510$ total before taxes</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
