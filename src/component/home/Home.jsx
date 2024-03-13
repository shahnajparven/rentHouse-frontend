import { Box } from "@mui/material";
import { Banner } from "../banner/Banner";
import Product from "./Product";
import Reward from "../reward/Reward";

const Home = () => {
  return (
    <Box>
      <Banner />
      <Product />
      <Reward />
    </Box>
  );
};

export default Home;
