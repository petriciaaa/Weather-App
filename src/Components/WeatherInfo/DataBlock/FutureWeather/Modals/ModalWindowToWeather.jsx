import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 224,
  p: 4,
};

export default function BasicModal(props) {
  let WeatherDescription = props.WeatherDescription;
  let Data = props.Data;
  let WeatherDetail = props.WeatherDetail;
  let Temp = props.Temp;
  let WindSpeed = Math.round(props.WindSpeed * 10) / 10;
  const [weatherDescription, setWeatherDescription] =
    React.useState(WeatherDescription);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    //props.Data.weather[0].description - not an variable because useEffect dont update an value ))

    setWeatherDescription(props.Data.weather[0].description);
  }, [Data]);

  return (
    <>
      <div
        onClick={handleOpen}
        className="w-24 h-24 flex futureDataCard-img items-center"
      >
        {props.image}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {"Weather for the near future:".toUpperCase()}
          </Typography>
          {props.image}
          <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
            <h1 className=" text-l"> {weatherDescription.toUpperCase()} </h1>
            Temperature: {props.Temp}°C <br />
            <article className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                className="mr-5 mt-1"
              >
                <g
                  clip-path="url(#clip0_240_2402)"
                  filter="url(#filter0_di_240_2402)"
                >
                  <path
                    d="M18.0646 10.8158C18.2274 10.8847 18.2274 11.1153 18.0646 11.1842L6.00205 16.2876C5.83055 16.3602 5.66168 16.1796 5.74556 16.0133L7.73684 12.0667L7.8265 11.885C8.10176 11.3271 8.10176 10.6729 7.8265 10.115L7.73684 9.93333L5.74556 5.98669C5.66168 5.82044 5.83055 5.63985 6.00205 5.7124L18.0646 10.8158ZM20.7776 11.9235C21.5994 11.582 21.5994 10.418 20.7776 10.0766L4.23756 3.20369C3.94126 3.08057 3.59989 3.14945 3.37451 3.37783C3.1483 3.60705 3.08438 3.95087 3.2131 4.24608L5.80937 10.2007C6.03162 10.7104 6.03162 11.2896 5.80937 11.7993L3.2131 17.7539C3.08439 18.0491 3.1483 18.3929 3.37451 18.6222C3.59989 18.8506 3.94126 18.9194 4.23756 18.7963L20.7776 11.9235Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_di_240_2402"
                    x="-1.26241"
                    y="0"
                    width="24.2624"
                    height="25.0165"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-1.50827" dy="2.26241" />
                    <feGaussianBlur stdDeviation="0.377069" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_240_2402"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_240_2402"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-0.754137" dy="0.754137" />
                    <feGaussianBlur stdDeviation="0.754137" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_240_2402"
                    />
                  </filter>
                  <clipPath id="clip0_240_2402">
                    <rect
                      width="22"
                      height="22"
                      fill="white"
                      transform="translate(1)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              Wind speed: {WindSpeed} km/h
            </article>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
