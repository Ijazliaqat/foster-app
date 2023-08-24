export const FosterChildListTableData=[
    {
        id:'1',
        sr:"01",
        refereeName : "Palwasha",
        gender: "Female ",
        dateOfBirth: "01/01/2010",
        status: "Placed",
        referralDate:"22/06/2020",
        refereeType:"Foster Child",
        specialNeeds: <button  style={{background:"#198754",width:"84px",height:"25px",border:"none",borderRadius:"4px",color:"#fff"}}>No</button>
       
      },
      { 
        id:'2',
        sr:"02",
        refereeName : "John ",
        gender: "male ",
        dateOfBirth: "01/01/2010",
        status: "Current Referral",
        referralDate:"22/06/2020",
        refereeType:"Foster Child",
        specialNeeds:<button style={{background:"#1694DB",width:"84px",height:"25px",borderRadius:"4px",border:"none", color:"#fff"}}>No</button>
      
    
      },
]

export const SelectFilter = [
  {
    key: "status",
    label: "Status",
    options: [{ label: "Status", value: "status" }],
  },
];