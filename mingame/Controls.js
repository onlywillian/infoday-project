import React from "react";
import { View } from "react-native";

function Nave(x, y, w, h, color) {   
    return (
      <View
        style={{
            position: "absolute",
            left: x,
            top: y,
            width: w,
            height: h,
            backgroundColor: color || "pink",
            borderWidth: 5,
          }}/>
    );
}

export default Nave;