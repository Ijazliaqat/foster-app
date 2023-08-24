
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CriteriaIcon from '../../../../../assets/svg/criteria.svg'
import PersonOne from '../../../../../assets/svg/personOne.svg'
import PersonTwo from '../../../../../assets/svg/personTwo.svg'
import CompareResults from '../../../../../assets/svg/compareResults.svg'

interface RowData {
    criteria: string;
    personOne: string;
    personTwo: string;
    CancelIcon?: React.ReactElement;
    CheckCircleSharpIcon?: React.ReactElement;
}

function createData(criteria: string, personOne: string, personTwo: string, CancelIcon?: React.ReactElement, CheckCircleSharpIcon?: React.ReactElement): RowData {
    return { criteria, personOne, personTwo, CancelIcon, CheckCircleSharpIcon };
}

export const compareMatchData: RowData[] = [
    createData('Ethinicity', 'Asian', "Caucasian", <CancelIcon style={{ color: "#C82333" }} />),
    createData('Language', 'English', "English", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Religion', 'Christian', "Hindu", <CancelIcon style={{ color: "#C82333" }} />),
    createData('Locality', 'Burwood', "Burwood", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Placement with Siblings', 'Yes', "Yes", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Connected Person', '----------', "----------", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Adoption Consideration', '----------', "----------", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Age of the Child', '5-13', "8", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Preference of the Child', '----------', "----------", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Foster Carers Availability', 'Yes', "----------", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Child Family History', '----------', "----------", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Child Family Life Story', '----------', "----------", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),
    createData('Child Developmental Needs', '----------', "----------", <CheckCircleSharpIcon style={{ color: "#28a745" }} />),

];

export const compareMatchHeader = [
    {
        id: "1",
        title: "Criteria",
        img: CriteriaIcon
    },
    {
        id: "2",
        title: "Gloria Bell",
        img: PersonOne
    },
    {
        id: "3",
        title: "Shawn Murphy",
        img: PersonTwo
    },
    {
        id: "4",
        title: "Compare Results",
        img: CompareResults
    }
]



