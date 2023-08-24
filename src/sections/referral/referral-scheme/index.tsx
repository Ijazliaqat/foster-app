export const TableData=[
    {
        Sr_No: "01",
        Referral_Type: "foster carer",
        Fostering_Status: "Permanent",
        Referral_Bonus: "£500",
        Branch_Name: "Scot Fostering ",
      },
    {
        Sr_No: "02",
        Referral_Type: "foster carer",
        Fostering_Status: "Permanent",
        Referral_Bonus: "£500",
        Branch_Name: "Scot Fostering ",
      },
]


  // ///////////////// filters array start here ////////////////////////
 export const SELECT_FILTERS = [

   {
      key: "branch_name",
      label: "Branch Name",
      options: [{ label: "Scot Fostering", value: "Scot_Fostering" },{ label: "Gofal Fostering", value: "Gofal_Fostering" }],
  
   },

   {
       key: "fostering_type",
       label: "Fostering Type",
       options: [{ label: "Permanent", value: "Permanent" }],
  
   },

   {
      key: "referral_type",
      label: "Referral Type",
      options: [{ label: "Foster Carer", value: "Foster_Carer" },{ label: "Foster Child", value: "Foster_Cild" },{ label: "Social Worker", value: "Social_Worker" },{ label: "Other", value: "other" }],
      },
  ];
// ///////////////// filters array end here ////////////////////////