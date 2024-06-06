import { PDFViewer } from "@react-pdf/renderer";
import InvoiceDocument from "./InvoiceDocument";

const BrowserInvoice = () => {
  return (
    <PDFViewer width="100%" height={window.innerHeight}>
      <InvoiceDocument/>
    </PDFViewer>
  );
};

export default BrowserInvoice;
