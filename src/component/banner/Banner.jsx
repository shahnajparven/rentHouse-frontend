
import "./Banner.css";
import "../../main.css";
import { Box } from "@mui/material";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img4.jpg";
import Carousel from "react-material-ui-carousel";

export const Banner = () => {
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          borderRadius: "none",
          color: "gray",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#583C99", // 2
        },
      }}s
      indicatorContainerProps={{
        style: {
            position:'absolute',
            bottom:'15px',
        //   marginTop: 0, // 5
          textAlign: "center",
          zIndex:2,
        },
      }}
      fullHeightHover={false}
      navButtonsProps={{
        style: {
          backgroundColor: "#2F7B92",
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "100",
          top: "50px",
        },
      }}
      NextIcon={false}
      PrevIcon={false}
    >
      <Box className='banner' height="78.5vh" display="flex" justifyContent="center">
        <img src={img3} alt="" width="100%" height="100%" overflow="hidden" />
      </Box>
      <Box  className='banner' height="78.5vh" display="flex" justifyContent="center">
        <img src={img1} alt="" width="100%" height="100%" overflow="hidden" />
      </Box>
      <Box  className='banner' height="78.5vh" display="flex" justifyContent="center">
        <img width="100%" height="100%" src={img2} alt="" overflow="hidden" />
      </Box>
    </Carousel>
  );
};
