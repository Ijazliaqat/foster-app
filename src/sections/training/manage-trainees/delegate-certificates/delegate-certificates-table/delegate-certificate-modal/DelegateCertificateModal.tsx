import React from "react";
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image as PDFImage,
} from "@react-pdf/renderer"; 
import Dialog from "@mui/material/Dialog";   

const styles = StyleSheet.create({
  page: {
    position: "relative",
    maxWidth: "900px",
    maxHeight: "800px", 
  },
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    height: "100%",
    width: "100%", 
  },
  section: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "relative",
    width: "841px",
    height: "841px",
    zIndex: -1,
  },
  certificate: {
    fontSize: "42px",
    fontWeight: 600,
    marginBottom: "21px",
    letterSpacing: "2px",
  },
  of: {
    fontSize: 40,
    fontWeight: 400,
    marginBottom: "24px", 
  },
  completion: {
    fontSize: "15.85px",
    color: "#fff",
    letterSpacing: "10px",
    backgroundColor: "#D89330",
    clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
    padding: "2px 30px",
    marginBottom: "20px", 
  },
  presentTo: {
    fontSize: "20px",
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "27px",
  },
  name: {
    fontSize: 38,
    fontWeight: 500,
    margin: "0 auto",
    marginBottom: "41px",
    leadingTrim: "both",
    textEdge: "cap",
  },
  course: {
    fontSize: "14px",
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "10px",
    leadingTrim: "both",
    textEdge: "cap",
  },
  courseDate: {
    fontSize: "14px",
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "20px",
    leadingTrim: "both",
    textEdge: "cap",
  },
  at: {
    fontSize: "14px",
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "5px",
    color: "#505050",
  },
  facilitator: {
    color: "#505050",
    fontSize: "14px",
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "20px",
  },
  facilitatorDate: {
    fontSize: "20px",
    fontWeight: 400,
    margin: "0 auto",
    marginBottom: "20px",
  },
});

const certificateData = [
  {
    id: "1",
    name: "Clare O’Roberts",
    date: "10/09/2017 - 15/09/2017",
    address: "East ChinaTraining Ground",
    faclilator: "Clare Facilitator Roberts",
    certificateDate: "27 . 10 . 2021",
  },
];
const DelegateCertificateModal = (props: any) => {
  const { open, setOpen } = props; 
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      sx={{ width: "100%", height: "841px" }}
    >
      <div>
        <BlobProvider
          document={
            <Document>
              <Page size="A4" style={styles.page}> 
                <PDFImage 
                  src="https://i.ibb.co/cLcCbxN/Certificate.jpg"
                  style={styles.image}
                />
                <View style={styles.section}>
                  <Text style={styles.certificate}>CERTIFICATE</Text>
                  <Text style={styles.of}>Of</Text>
                  <div style={styles.completion}>
                    <Text>COMPLETION</Text>
                  </div>
                  {certificateData.map((item: any) => {
                    return (
                      <div key={item.id}>
                        <Text style={styles.presentTo}>
                          Proudly Presented To
                        </Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.course}>
                          Attended the course Social Care Network on:
                        </Text>
                        <Text style={styles.courseDate}>{item.date}</Text>
                        <Text style={styles.at}>At: {item.address}</Text>
                        <Text style={styles.facilitator}>
                          Facilitator: {item.faclilator}
                        </Text>
                        <Text style={styles.facilitatorDate}>
                          {item.certificateDate}
                        </Text>
                      </div>
                    );
                  })}
                </View>
              </Page>
            </Document>
          }
        >
          {({ blob, url, loading, error }:any) =>
            loading
              ? "Loading document..."
              : blob && (
                  <embed
                    src={URL.createObjectURL(blob)}
                    type="application/pdf"
                    style={{ width: "900px", height: "821px" }}
                  />
                )
          }
        </BlobProvider>
      </div>
    </Dialog>
  );
};

export default DelegateCertificateModal;
