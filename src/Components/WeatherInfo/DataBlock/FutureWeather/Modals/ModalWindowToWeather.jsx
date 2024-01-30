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
    <div>
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
            {props.Temp}°C <br />
            {props.WindSpeed}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
