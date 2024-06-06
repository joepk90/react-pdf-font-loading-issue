import { Font } from "@react-pdf/renderer";

import roboto from "../fonts/Roboto-Regular.ttf"

export const registerFontsWithSrc = () => {
    
  Font.register({
    family: "roboto",
    fonts: [
      { src: roboto },
    ],
  });

};