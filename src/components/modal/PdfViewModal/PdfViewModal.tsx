import React from 'react';
import { Dialog } from '@mui/material'
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import '@react-pdf-viewer/core/lib/styles/index.css';

const workerUrl = "https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js";

const PdfViewModal = ({ open, onClose, fileUrl, ...rest }: any) => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // const [pdfFile, setPdfFile] = useState(null);
  // const allowedFiles = ["application/pdf"];
  // const handleFile = (e: any) => {
  //   let selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     if (selectedFile && allowedFiles.includes(selectedFile.type)) {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(selectedFile);
  //       reader.onloadend = (e: any) => {
  //         setPdfFile(e.target.result);
  //       };
  //     } else {
  //       setPdfFile("");
  //     }
  //   } else {
  //     console.log("please select a PDF");
  //   }
  // };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={'md'}
      {...rest}
    >
      <PdfViewFile
        fileUrl={fileUrl}
        plugins={[defaultLayoutPluginInstance]}
      />
    </Dialog>
  )
}

export default PdfViewModal

export const PdfViewFile = ({ fileUrl, plugins }: any) => {
  return (
    <Worker workerUrl={workerUrl}>
      <Viewer fileUrl={fileUrl} plugins={plugins}></Viewer>
    </Worker>
  )
}