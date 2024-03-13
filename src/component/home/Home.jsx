import { Box } from "@mui/material";
import { Banner } from "../banner/Banner";
import Product from "./Product";
import Reward from "../reward/Reward";
import Popular from "../../poular-post/Popular";
import YouTube from "../about/About";

const Home = () => {
  return (
    <Box>
      <Banner />
      <Product />
      <Reward />
      <Popular/>
      <YouTube/>
    </Box>
  );
};

export default Home;
