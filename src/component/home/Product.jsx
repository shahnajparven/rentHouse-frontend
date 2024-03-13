import { Fragment, useEffect } from "react";
import "./Product.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Loader from "../../layout/Loader";
import { Box, Divider, Typography } from "@mui/material";

const Product = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  console.log(products, "products");
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Box py={5} px={{ lg: 10, md: 2, sm: 2, xs: 2 }}>
          <Box className="cardTitleText">
            <Box width={"50%"}>
              <Typography
                variant="span"
                display={"flex"}
                justifyContent={"center"}
                color={"#F44336"}
              >
                {" "}
                ------- New Arrival Collections -------
              </Typography>
              <Typography
                variant="h5"
                display={"flex"}
                justifyContent={"center"}
                py={2}
                fontSize={50}
                fontWeight={"bold"}
              >
                Recent Properties
              </Typography>
              <Typography
                variant="span"
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                incidunt quia numquam ea. Voluptas aut suscipit cum esse eum
                iusto, eius vel at animi nam unde in nesciunt excepturi.
              </Typography>
            </Box>
          </Box>
          <Box
            className="containers"
            display={"flex"}
            gap={5}
            py={2}
          >
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </Box>
        </Box>
      )}
      <Divider/>
    </Fragment>
  );
};

export default Product;
