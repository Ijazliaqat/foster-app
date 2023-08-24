import November2021FosterCarersMeetup from "./november2021-foster-carers-meetup/November2021FosterCarersMeetup";
import FosteringHealthyRelationships from "./fostering-healthy-relationships/FosteringHealthyRelationships";
import DigitalSafeguardingInFostering from "./digital-safeguarding-in-fostering/DigitalSafeguardingInFostering";
import December2021FosterMeetup from "./december2021-foster-meetup/December2021FosterMeetup";

export const data = [
  {
    title: "November 2021 Foster Carers Meetup",
    component: <November2021FosterCarersMeetup />,
    countValue: 4,
  },
  {
    title: "Fostering Healthy Relationships",
    component: <FosteringHealthyRelationships />,
    countValue: 2,
  },
  {
    title: "Digital Safeguarding In Fostering",
    component: <DigitalSafeguardingInFostering />,
    countValue: 5,
  },
  {
    title: "December 2021 Foster Meetup",
    component: <December2021FosterMeetup />,
    countValue: 7,
  },
];
