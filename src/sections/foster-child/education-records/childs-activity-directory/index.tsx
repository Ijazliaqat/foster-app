import IconAnimation from "@root/assets/svg/child-activity-directory/IconAnimation";
import IconArtsAndCraft from "@root/assets/svg/child-activity-directory/IconArtsAndCraft";
import IconAttractions from "@root/assets/svg/child-activity-directory/IconAttaractions";
import IconCalligraphy from "@root/assets/svg/child-activity-directory/IconCalligraphy";
import IconChildrenCenter from "@root/assets/svg/child-activity-directory/IconChildrenCenter";
import IconChristmas from "@root/assets/svg/child-activity-directory/IconChristmas";
import IconComputing from "@root/assets/svg/child-activity-directory/IconComputing";
import IconDigitalArt from "@root/assets/svg/child-activity-directory/IconDigitalArt";
import IconDrawing from "@root/assets/svg/child-activity-directory/IconDrawing";
import IconEditing from "@root/assets/svg/child-activity-directory/IconEditing";
import IconHolidayActivities from "@root/assets/svg/child-activity-directory/IconHolidayActivities";
import IconOnlineClass from "@root/assets/svg/child-activity-directory/IconOnlineClass";
import IconPainting from "@root/assets/svg/child-activity-directory/IconPainting";
import IconPreSchooSigning from "@root/assets/svg/child-activity-directory/IconPreSchooSigning";
import IconPreSchoolClasss from "@root/assets/svg/child-activity-directory/IconPreSchoolClasss";
import IconSketching from "@root/assets/svg/child-activity-directory/IconSketching";
import IconVisualArt from "@root/assets/svg/child-activity-directory/IconVisualArt";

export const cardData = [
  {
    text: "Online Classes",
    bgcolor: "#F63D31",
    icon: <IconOnlineClass />,
    link: "",
  },
  {
    text: "Arts & Crafts",
    bgcolor: "#F63D31",
    icon: <IconArtsAndCraft />,
    link: "",
  },
  {
    text: "Attractions",
    bgcolor: "#EB9411",
    icon: <IconAttractions />,
    link: "",
  },
  {
    text: "Pre-School Classes",
    bgcolor: "#20BE60",
    icon: <IconPreSchoolClasss />,
    link: "",
  },
  {
    text: "Pre-School Signing",
    bgcolor: "#0E918C",
    icon: <IconPreSchooSigning />,
    link: "",
  },
  {
    text: "Children’s Center",
    bgcolor: "#10B0C6",
    icon: <IconChildrenCenter />,
    link: "",
  },
  {
    text: "Christmas",
    bgcolor: "#F63D31",
    icon: <IconChristmas />,
    link: "",
  },
  {
    text: "Holiday Activities",
    bgcolor: "#EB9411",
    icon: <IconHolidayActivities />,
    link: "",
  },
  {
    text: "Computing",
    bgcolor: "#20BE60",
    icon: <IconComputing />,
    link: "",
  },
  {
    text: "Drawing",
    bgcolor: "#0E918C",
    icon: <IconDrawing />,
    link: "",
  },
  {
    text: "Sketching",
    bgcolor: "#10B0C6",
    icon: <IconSketching />,
    link: "",
  },
  {
    text: "Painting",
    bgcolor: "#465987",
    icon: <IconPainting />,
    link: "",
  },
  {
    text: "Digital Art",
    bgcolor: "#EB9411",
    icon: <IconDigitalArt />,
    link: "",
  },
  {
    text: "Calligraphy",
    bgcolor: "#20BE60",
    icon: <IconCalligraphy />,
    link: "",
  },
  {
    text: "Animation",
    bgcolor: "#0E918C",
    icon: <IconAnimation />,
    link: "",
  },
  {
    text: "Visual Art",
    bgcolor: "#10B0C6",
    icon: <IconVisualArt />,
    link: "",
  },
  {
    text: "Editing",
    bgcolor: "#465987",
    icon: <IconEditing />,
    link: "",
  },
];
const showBasedOnAgeGroup = [
  "Online Classes",
  "Arts & Crafts",
  "Pre-School Classes",
  "Pre-School Signing",
  "Children’s Center",
  "Christmas",
  "Holiday Activities",
  "Drawing",
  "Sketching",
];
let index = 0;
export const AgeGroupCards:any = [];
for (const keys of cardData) {
  if (index < showBasedOnAgeGroup.length) {
    if (keys.text === showBasedOnAgeGroup[index]) {
      AgeGroupCards.push(keys);
      index++;
    }
  }
}
const showBasedOnActivityType = [
  "Arts & Crafts",
  "Drawing",
  "Sketching",
  "Painting",
  "Digital Art",
  "Calligraphy",
  "Animation",
  "Visual Art",
  "Editing",
];
let indexTwo = 0;
export const ActivityBaseCards:any = [];
for (const keystwo of cardData) {
  if (indexTwo < showBasedOnActivityType.length) {
    if (keystwo.text === showBasedOnActivityType[indexTwo]) {
      ActivityBaseCards.push(keystwo);
      indexTwo++;
    }
  }
}
