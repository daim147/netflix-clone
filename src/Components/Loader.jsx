import React from "react";
import Loader from "react-loader-spinner";
class Spinner extends React.Component {
  //other logic
  render() {
    return (
      <div
        style={{
          width: this.props.width || "100%",
          height: this.props.height || "100%",
          display: "flex",
          background: this.props.bg || "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="ThreeDots"
          color="#ff1e00"
          height={this.props.h || 100}
          width={this.props.w || 100}
        />
      </div>
    );
  }
}
export default Spinner;
