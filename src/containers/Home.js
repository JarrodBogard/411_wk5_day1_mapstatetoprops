import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProp = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProp)(Home);
