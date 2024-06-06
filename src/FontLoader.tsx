import { Font } from "@react-pdf/renderer";
import { useCallback, useEffect } from "react";
import { registerFontsWithSrc } from "utils/register-fonts";

export const FontLoader = () => {

    registerFontsWithSrc()

    const loadFonts = useCallback(async () => {
        await Promise.all([
          Font.load({ fontFamily: "roboto" }),
        ]).then(values => console.log("loaded font promise result: ", values));
    }, []);

    console.log("getRegisteredFontFamilies: ", Font.getRegisteredFontFamilies())

    useEffect(() => {
        (async () => {
        loadFonts();
        })();
    }, [loadFonts]);

    return null;
};

export default FontLoader;