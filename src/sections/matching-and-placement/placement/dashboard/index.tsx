import PlacementStatusIcon from '../../../../assets/svg/placement/placement-status.svg'
import MakePlacementIcon from '../../../../assets/svg/placement/make-placement.svg'
import TransferPlacementIcon from '../../../../assets/svg/placement/tansfer-placement.svg'
import RespitePlacementIcon from '../../../../assets/svg/placement/respite-placement.svg'
import DischargePlacementIcon from '../../../../assets/svg/placement/discharge-placement.svg'
import EndPlacementIcon from '../../../../assets/svg/placement/end-placement.svg'
import RejectionsIcon from '../../../../assets/svg/placement/rejections.svg'
import PlacementChecklistsIcon from '../../../../assets/svg/placement/placement-checklists.svg'
import PlacementMeetingIcon from '../../../../assets/svg/placement/placement-meetings.svg'
import WarningIcon from '../../../../assets/svg/placement/warning.svg'
import InfoIcon from '../../../../assets/svg/placement/info.svg'
import DangerIcon from '../../../../assets/svg/placement/danger.svg'
import * as Yup from 'yup';
import { RHFSelect, RHFTextField } from '@root/components/hook-form'
import RHFDatePicker from '@root/components/hook-form/RHFDatePicker'


export const placementCardsData = [
    {
        id: "1",
        title: "Placement Status",
        icon: PlacementStatusIcon,
        link: 'placement/status',
        bgColor: "#0E918C",
    },
    {
        id: "2",
        title: "Make Placement",
        icon: MakePlacementIcon,
        link: 'placement/make',
        bgColor: "#0E918C",
    },
    {
        id: "3",
        title: "Transfer Placement",
        icon: TransferPlacementIcon,
        link: 'placement/transfer',
        bgColor: "#0E918C",
    },
    {
        id: "4",
        title: "Respite Placement",
        icon: RespitePlacementIcon,
        link: 'placement/respite',
        bgColor: "#523C87",
    },
    {
        id: "5",
        title: "Discharge Placement",
        icon: DischargePlacementIcon,
        link: 'placement/discharge',
        bgColor: "#523C87",
    },
    {
        id: "6",
        title: "End Placement",
        icon: EndPlacementIcon,
        link: 'placement/end',
        bgColor: "#523C87",
    },
    {
        id: "7",
        title: "Rejections",
        icon: RejectionsIcon,
        link: 'placement/rejections',
        bgColor: "#23183D",
    },
    {
        id: "8",
        title: "Placement Checklist",
        icon: PlacementChecklistsIcon,
        link: 'placement/checklists',
        bgColor: "#23183D",
    },
    {
        id: "8",
        title: "Placement Meeting record",
        icon: PlacementMeetingIcon,
        link: 'placement/meeting-record',
        bgColor: "#23183D",
    },
]

export const remaindersAndNotificationsData = [
    {
        id: "1",
        img: WarningIcon,
        background: "linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)",
        text: "Expires in 15 days Draco Malfoy Placement",
    },
    {
        id: "2",
        img: InfoIcon,
        background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
        text: "Bella Lestrange has signed the Placement Agreement",
    },
    {
        id: "3",
        img: DangerIcon,
        background: "linear-gradient(106.35deg, #0E918C 0%, #23E0D9 100%)",
        text: "Tom Hanks has not taken Safeguarding  Training ",
    },
]

export const data = [
    {
        id: "1",
        task: "Task 1",
        priority: "High",
        date: "July 6, 2023"
    },
    {
        id: "2",
        task: "Task 2",
        priority: "Low",
        date: "July 6, 2023"
    },

]

export const chartTitles = [
    { title: "Local Authority 1", color: "#E07601", percentage: 12 },
    { title: "Local Authority 2", color: "#78BFAA", percentage: 30 },
    { title: "Local Authority 3", color: "#4A797E", percentage: 40 },
    { title: "Local Authority 4", color: "#FFB600", percentage: 18 },
    { title: "Local Authority 5", color: "#5BA316", percentage: 10 },
];


///////////////////////////// Tasks Modal Data ///////////////////////

export const initialValues: any = {
    title: '',
    priority: '',
    updatePhoto: null,
    date: null
}
export const formSchema = Yup.object().shape({
    title: Yup.string().required('Field is required'),
    priority: Yup.string().required('Field is required'),
    updatePhoto: Yup.string().required('Field is required'),
    date: Yup.string().required('Field is required'),
})

export const addTaskFormData = [
    {
        gridLength: 6,
        otherOptions: { name: "title", label: "Task Title", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Priority",
            name: "priority",
            fullWidth: true,
            select: true,
        },
        options: [
            { value: "High", label: "High" },
            { value: "Low", label: "Low" },
        ],
        component: RHFSelect,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Upload Image",
            name: "updatePhoto",
            fullWidth: true,
        },
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Date",
            name: "date",
            fullWidth: true,
        },
        component: RHFDatePicker,
    },

]