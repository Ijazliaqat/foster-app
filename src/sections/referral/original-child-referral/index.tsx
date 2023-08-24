const buttonStyle = {
  width: "84px",
  height: "25px",
  border: "none",
  borderRadius: "4px",
  color: "#fff",
};

// ===================================================

export const data = [
  {
    photp: "CCE Template.pdf",
    specialNeeds: <button style={{ ...buttonStyle, background: "#198754" }}>No</button>,
    childName: "Maryam",
    childIdentifier: "-",
    dateBirth: "01/01/2010",
    referrerDate: "22/06/2020",
    localAuthority: "Redbridge",
  },
  {
    photp: "CCE Template.pdf",
    specialNeeds: <button style={{ ...buttonStyle, background: "#1694DB" }}>Yes</button>,
    childName: "John",
    childIdentifier: "-",
    dateBirth: "01/01/2010",
    referrerDate: "22/06/2020",
    localAuthority: "Hillingdon ",
  },
];
