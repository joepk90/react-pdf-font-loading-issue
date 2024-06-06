import NodeInvoice from "../NodeInvoice";

export const renderPDF = async () => {
  // reimport ReactPDF to create new renderer instance:
  // github.com/diegomura/react-pdf/blob/a37d927f54d7f367416788979e4b5a8248532952/packages/renderer/src/index.js#L12

  const { renderToStream, renderToFile } = await import("@react-pdf/renderer");

  await renderToFile(<NodeInvoice />, "output.pdf");

  const response = await renderToStream(<NodeInvoice />);
  return response;

};

export const generatePDF = async (pdfStream: any) => {
  const outputStream = pdfStream || process.stdout;

  // final PDF render
  const invoiceStream = await renderPDF();
  invoiceStream.pipe(outputStream);
};