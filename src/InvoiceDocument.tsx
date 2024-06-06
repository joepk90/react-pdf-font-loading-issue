import { Document, Text } from "@react-pdf/renderer";
import { registerFontsWithSrc } from "utils/register-fonts";
import FontLoader from "FontLoader";
import Page from "components/Page";
import TypographyTest from "components/TypographyTest";
import React from "react";

const InvoiceDocument: React.FC = () => {
  
  return (
    <Document>
        <FontLoader />
        <Page>
            <TypographyTest />
        </Page>
    </Document>
  );
};

export default InvoiceDocument;
