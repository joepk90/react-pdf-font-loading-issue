import { Page as ReactPDFPage, StyleSheet } from "@react-pdf/renderer";
import React, { PropsWithChildren } from "react";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
  },
});

const Page: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <ReactPDFPage
      size="A4"
      style={{
        ...styles.page,
      }}
      {...rest}
    >
      {children}

    </ReactPDFPage>
  );
};

export default Page;
