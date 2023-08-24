import PersonImg from '../../../../assets/svg/person.svg';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const styles = {
    icon: {
        fontSize: "1.875rem"
    }
}
export const recommondationResultsCarerData = [
    { id: "1", type: "BEST MATCH", title: "BEST MATCH", subTitle: "4 Matches Found", progress: "60", progressColor: "#198754" },
    { id: "2", type: "GOOD MATCH", title: "GOOD MATCH", subTitle: "4 Matches Found", progress: "70", progressColor: "#2B8F29" },
    { id: "3", type: "SATISFACTORY MATCH", title: "SATISFACTORY MATCH", subTitle: "4 Matches Found", progress: "80", progressColor: "#F6B40F" },
    { id: "4", type: "SUFFICIENT MATCH", title: "SUFFICIENT MATCH", subTitle: "4 Matches Found", progress: "90", progressColor: "#F6460F" },
]
export const recommondationResultsChildData = [
    { id: "1", type: "BEST MATCH", title: "BEST MATCH", subTitle: "4 Matches Found", progress: "60", progressColor: "#198754" },
    { id: "2", type: "GOOD MATCH", title: "GOOD MATCH", subTitle: "4 Matches Found", progress: "70", progressColor: "#2B8F29" },
    { id: "3", type: "SATISFACTORY MATCH", title: "SATISFACTORY MATCH", subTitle: "4 Matches Found", progress: "80", progressColor: "#F6B40F" },
    { id: "4", type: "SUFFICIENT MATCH", title: "SUFFICIENT MATCH", subTitle: "4 Matches Found", progress: "90", progressColor: "#F6460F" },
]




export const recommondationResultsViewCarerDetail = [
    {
        id: "1", name: "Shawn Murphy4", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "BEST MATCH", progressColor: "#198754", icon: <TagFacesIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: true,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: true,
                label: "Connected Person",
            },
            {
                id: "3",
                value: true,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: true,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: true,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "2", name: "Usman Basit", age: "08", cast: "Asian", image: PersonImg, progress: "80", type: "GOOD MATCH", progressColor: "#2B8F29", icon: <SentimentSatisfiedAltIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: true,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: true,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "3", name: "Shawn Murphy4", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "SATISFACTORY MATCH", progressColor: "#F6B40F", icon: <SentimentSatisfiedAltIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: false,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: false,
                label: "Locality",
            },
            {
                id: "8",
                value: false,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "4", name: "Usman Basit", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "SUFFICIENT MATCH", progressColor: "#F6460F", icon: <SentimentVeryDissatisfiedIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: true,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: true,
                label: "Connected Person",
            },
            {
                id: "3",
                value: true,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: true,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: true,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "5", name: "Usman Basit", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "GOOD MATCH", progressColor: "#2B8F29", icon: <SentimentSatisfiedAltIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: false,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: false,
                label: "Religion",
            },
            {
                id: "6",
                value: false,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: false,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "6", name: "Usman Basit", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "BEST MATCH", progressColor: "#198754", icon: <TagFacesIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: true,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: true,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },

]


export const recommondationResultsViewChildDetail = [
    {
        id: "1", name: "Shawn ", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "BEST MATCH", progressColor: "#198754", icon: <TagFacesIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: true,
                label: "Ethinicit2",
            },
            {
                id: "2",
                value: true,
                label: "Connected Person2",
            },
            {
                id: "3",
                value: true,
                label: "Language2",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child2",
            },
            {
                id: "5",
                value: true,
                label: "Religion2",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability2",
            },
            {
                id: "7",
                value: true,
                label: "Locality2",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer2",
            },
        ]

    },
    {
        id: "2", name: "Usman Basit", age: "08", cast: "Asian", image: PersonImg, progress: "80", type: "GOOD MATCH", progressColor: "#2B8F29", icon: <SentimentSatisfiedAltIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: true,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: true,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "3", name: "Shawn Murphy4", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "SATISFACTORY MATCH", progressColor: "#F6B40F", icon: <SentimentSatisfiedAltIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: false,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: false,
                label: "Locality",
            },
            {
                id: "8",
                value: false,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "4", name: "Usman Basit", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "SUFFICIENT MATCH", progressColor: "#F6460F", icon: <SentimentVeryDissatisfiedIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: true,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: true,
                label: "Connected Person",
            },
            {
                id: "3",
                value: true,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: true,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: true,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "5", name: "Usman Basit", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "GOOD MATCH", progressColor: "#2B8F29", icon: <SentimentSatisfiedAltIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: false,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: false,
                label: "Religion",
            },
            {
                id: "6",
                value: false,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: false,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },
    {
        id: "6", name: "Usman Basit", age: "08", cast: "Caucasian", image: PersonImg, progress: "80", type: "BEST MATCH", progressColor: "#198754", icon: <TagFacesIcon sx={styles.icon} />,
        recommondationResultsCheckbox: [
            {
                id: "1",
                value: false,
                label: "Ethinicity",
            },
            {
                id: "2",
                value: false,
                label: "Connected Person",
            },
            {
                id: "3",
                value: false,
                label: "Language",
            },
            {
                id: "4",
                value: true,
                label: "Preference of the Child",
            },
            {
                id: "5",
                value: true,
                label: "Religion",
            },
            {
                id: "6",
                value: true,
                label: "Foster Carers Availability",
            },
            {
                id: "7",
                value: true,
                label: "Locality",
            },
            {
                id: "8",
                value: true,
                label: "Preference of the Carer",
            },
        ]

    },

]