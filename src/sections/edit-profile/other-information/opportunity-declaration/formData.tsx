import { Typography } from "@mui/material";
import * as Yup from "yup";
import RadiaHeaderUo from "./RadioHeaders/RadiaHeaderUo";
import RadiaHeader from "./RadioHeaders/RadiaHeader";

export const defaultValues = {
  iDonWanr: false,
  martialStatus: "Single",
  whiteEnglish: false,
  WhiteIrish: false,
  whiteGypsy: false,
  whiteAnyOther: false,
  mixedWhiteAndBlack: false,
  mixedWhiteAndBlackAfrican: false,
  mixedWhiteAsian: false,
  mixedAnyOther: false,
  asiaIndian: false,
  asiaPak: false,
  asiaBangli: false,
  asiaChinese: false,
  asiaAnyOtherAsiaBg: false,
  blackAfrican: false,
  blackCaribean: false,
  blackAnyOtherBlackBg: false,
  otherArab: false,
  otherAnyEthinic: false,
  doYes: false,
  doNo: false,
  doPrefer: false,
  yourRelIslam: true,
  yourRelBahai: false,
  yourRelBuddhist: false,
  yourRelCatholic: false,
  yourRelChristian: false,
  yourRelHindu: false,
  yourRelJain: false,
  yourRelJewish: false,
  yourRelSikh: false,
  yourRelAgnostic: false,
  yourRelProtestant: false,
  yourRelOther: false,
  yourRelNoReligion: false,
  yourRelPreferNotToSay: false,
  sexBisexual: false,
  sexHomosexualWoman: false,
  sexHomosexualMan: false,
  sexHomosexualHeterosexual: false,
};

export const FormSchema = Yup.object().shape({
  iDonWanr: Yup.boolean(),
  martialStatus: Yup.string(),
  whiteEnglish: Yup.boolean(),
  WhiteIrish: Yup.boolean(),
  whiteGypsy: Yup.boolean(),
  whiteAnyOther: Yup.boolean(),
  mixedWhiteAndBlack: Yup.boolean(),
  mixedWhiteAndBlackAfrican: Yup.boolean(),
  mixedWhiteAsian: Yup.boolean(),
  mixedAnyOther: Yup.boolean(),
  asiaIndian: Yup.boolean(),
  asiaPak: Yup.boolean(),
  asiaBangli: Yup.boolean(),
  asiaChinese: Yup.boolean(),
  asiaAnyOtherAsiaBg: Yup.boolean(),
  blackAfrican: Yup.boolean(),
  blackCaribean: Yup.boolean(),
  blackAnyOtherBlackBg: Yup.boolean(),
  otherArab: Yup.boolean(),
  otherAnyEthinic: Yup.boolean(),
  doYes: Yup.boolean(),
  doNo: Yup.boolean(),
  doPrefer: Yup.boolean(),
  yourRelIslam: Yup.boolean(),
  yourRelBahai: Yup.boolean(),
  yourRelBuddhist: Yup.boolean(),
  yourRelCatholic: Yup.boolean(),
  yourRelChristian: Yup.boolean(),
  yourRelHindu: Yup.boolean(),
  yourRelJain: Yup.boolean(),
  yourRelJewish: Yup.boolean(),
  yourRelSikh: Yup.boolean(),
  yourRelAgnostic: Yup.boolean(),
  yourRelProtestant: Yup.boolean(),
  yourRelOther: Yup.boolean(),
  yourRelNoReligion: Yup.boolean(),
  yourRelPreferNotToSay: Yup.boolean(),
  sexBisexual: Yup.boolean(),
  sexHomosexualWoman: Yup.boolean(),
  sexHomosexualMan: Yup.boolean(),
  sexHomosexualHeterosexual: Yup.boolean(),
});

export const fieldsInfo = [
  [
    {
      type: "SWITCH",
      name: "iDonWanr",
      label: "I do not wish to disclose this.",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SELECT",
      name: "martialStatus",
      label: "Martial Status",
      fieldHeader: null,
      options: ["Single", "Married"],
    },
    {
      type: null,
      name: "martialStatus",
      label: "Martial Status",
      fieldHeader: null,
      options: ["Single", "Married"],
    },
  ],
  [
    {
      type: "SWITCH",
      name: "whiteEnglish",
      label: "English / Welsh / Scottish / Northern Irish / British",
      fieldHeader: (
        <>
          <RadiaHeader text="Your Ethnicity" />
          <RadiaHeaderUo text="white" />
        </>
      ),
    },
  ],
  [
    {
      type: "SWITCH",
      name: "WhiteIrish",
      label: "Irish",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "whiteGypsy",
      label: "Gypsy or Irish Traveller",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "whiteAnyOther",
      label: "Any other White background",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "mixedWhiteAndBlack",
      label: "White and Black Caribbean",
      fieldHeader: <RadiaHeaderUo text="Mixed / Multiple ethnic groups" />,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "mixedWhiteAndBlackAfrican",
      label: "White and Black African",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "mixedWhiteAsian",
      label: "White and Asian",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "mixedAnyOther",
      label: "Any other Mixed / Multiple ethnic background",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "asiaIndian",
      label: "Indian",
      fieldHeader: <RadiaHeaderUo text="Asia / Asian British" />,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "asiaPak",
      label: "Pakistani",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "asiaBangli",
      label: "Bangladeshi",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "asiaChinese",
      label: "Chinese",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "asiaAnyOtherAsiaBg",
      label: "Any other Asian background",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "blackAfrican",
      label: "African",
      fieldHeader: (
        <RadiaHeaderUo text="Black / African / Caribbean / Black British" />
      ),
    },
  ],
  [
    {
      type: "SWITCH",
      name: "blackCaribean",
      label: "Caribbean",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "blackAnyOtherBlackBg",
      label: "Any other Black / African / Caribbean background",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "otherArab",
      label: "Arab",
      fieldHeader: <RadiaHeaderUo text="Other Ethnic Group" />,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "otherAnyEthinic",
      label: "Any other Ethnic group",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "doYes",
      label: "Yes",
      fieldHeader: (
        <RadiaHeaderUo text="Do you consider yourself to have a disability within the meaning of the Equality Act 2021" />
      ),
    },
  ],
  [
    {
      type: "SWITCH",
      name: "doNo",
      label: "No",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "doPrefer",
      label: "Prefer Not to say",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelIslam",
      label: "Islam",
      fieldHeader: <RadiaHeaderUo text="Your Religion and Belief" />,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelBahai",
      label: "Bahai",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelBuddhist",
      label: "Buddhist",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelCatholic",
      label: "Catholic",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelChristian",
      label: "Christian",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelHindu",
      label: "Hindu",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelJain",
      label: "Jain",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelJewish",
      label: "Jewish",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelSikh",
      label: "Sikh",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelAgnostic",
      label: "Agnostic",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelProtestant",
      label: "Protestant",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelOther",
      label: "Other",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelNoReligion",
      label: "No Religion",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "yourRelPreferNotToSay",
      label: "Prefer Not to say",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "sexBisexual",
      label: "Bisexual",
      fieldHeader: <RadiaHeaderUo text="Your Sexual Orientation?" />,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "sexHomosexualWoman",
      label: "Homosexual woman",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "sexHomosexualMan",
      label: "Homosexual man",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "sexHomosexualHeterosexual",
      label: "Heterosexual",
      fieldHeader: null,
    },
  ],
];
