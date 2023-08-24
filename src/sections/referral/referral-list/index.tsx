import img1 from '../../../assets/svg/referral/referralListImg1.svg';
import img2 from '../../../assets/svg/referral/referralListImg2.svg';
import img3 from '../../../assets/svg/referral/referralListImg3.svg';

export const TableDemoData = [
  {
    photo: img1,
    refereeName: "Maryam",
    refereeType: "Foster Child",
    referralDate: "01/01/2020",
    referredBy: "Madiha",
    referredRole:"Foster Carer",
    specialNeeds: "No",
    refereeStatus:"Current Referral",
    disability: "-"
  },
  {
    photo: img2,
    refereeName: "Palwasha",
    refereeType: "Foster Child",
    referralDate: "01/01/2021",
    referredBy: "John",
    referredRole:"Foster Carer",
    specialNeeds: "Yes",
    refereeStatus:"Onhold",
    disability: "-"
  },
  {
    photo: img3,
    refereeName: "Ali",
    refereeType: "Foster Child",
    referralDate: "01/01/2020",
    referredBy: "John",
    referredRole:"Foster Carer",
    specialNeeds: "",
    refereeStatus:"Rejected",
    disability: "-"
  },
]
export const SELECT_FILTERS = [
  {
    key: "status",
    label: "Status",
    options: [
      { label: "Current Referral", value: "currentReferral" },
      { label: "Onhold", value: "onHold" },
      { label: "Rejected", value: "rejected" },
    ],
  },
  {
    key: "refereeType",
    label: "Referee Type",
    options: [
      { label: "Foster Carer", value: "fosterCarer" },
      { label: "Foster Child", value: "fosterChild" },
      { label: "Social Worker", value: "socialWorker" },
      { label: "Other", value: "other" },
    ],
  },
];