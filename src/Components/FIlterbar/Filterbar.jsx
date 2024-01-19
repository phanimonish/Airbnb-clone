import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../FIlterbar/Filterbar.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 15,
  },
  desktop: {
    breakpoint: { max: 4000, min: 824 },
    items: 9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Filterbar() {
  return (
    <div className="filterbar ">
      <Carousel className="filter-cont ms-4 p-2" responsive={responsive}>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
          />
          <p>Lake</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
          />
          <p>New</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
          />
          <p>Rooms</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
          />
          <p>Surfing</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
          />
          <p>Beachfront</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
          />
          <p>Skiing</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
          />
          <p>Vineyyards</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
          />
          <p>A-frames</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
          />
          <p>Cabins</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
          />
          <p>Lake</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
          />
          <p>Lake</p>
        </div>
        <div className="f-img">
          <img
            className="filter-img"
            src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
          />
          <p>Lake</p>
        </div>
      </Carousel>
      <button className="borderRemove mb-2 ">
        <div className="hover-effect filter p-3 h-100 ms-2">
          <img
            className=""
            src="https://cdn-icons-png.flaticon.com/128/3839/3839020.png"
            alt=""
            height={20}
          ></img>
          <p1 className="ms-2">Filters</p1>
        </div>
      </button>
      <button className="borderRemove mb-2 ">
        <div className="hover-effect tax h-100 p-3 ms-2">
        <p1 className="">Display total before taxes</p1>
          <div class="form-check form-switch ms-2">
            <input
              class="form-check-input toggle"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Filterbar;
