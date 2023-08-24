import ApprovalPendingIcon from "../../../../assets/svg/deregistration/ApprovalPending.svg";
import CancelcrossIcon from "../../../../assets/svg/deregistration/CancelcrossIcon.svg";
import ApprovalDone from "../../../../assets/svg/deregistration/ApprovalDone.svg";
import ProgressBar from "../../../../assets/svg/deregistration/progressBar.svg";

export const remaindersAndNotificationsData = [
    {
        id: "1",
        img: ApprovalPendingIcon,
        background: "linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)",
        title: "Approval Pending",
        titleColor: "#FFFFFF",
        discription: "Ritta needs approval from Fostering Panel",
        discriptionColor: "#FFFFFF"


    },
    {
        id: "2",
        img: ProgressBar,
        background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
        title: "Assessment Pending",
        titleColor: "#FFFFFF",
        discription: "from Social Worker",
        discriptionColor: "#FFFFFF"

    },
    {
        id: "3",
        img: CancelcrossIcon,
        background: "#FFFFFF",
        title: "Assessment Rejected",
        titleColor: "#0E918C",
        discription: "by Social Worker",
        border: "1px solid #0E918C",
        discriptionColor: "#212529"


    },
    {
        id: "4",
        img: ApprovalDone,
        background: "#FFFFFF",
        title: "Approval Done",
        titleColor: "#0E918C",
        link: "View Details",
        border: "1px solid #0E918C",
        linkColor: "#212529"


    },
    {
        id: "5",
        img: ApprovalDone,
        background: "#FFFFFF",
        title: "Audit Done ",
        titleColor: "#0E918C",
        link: "View Details",
        border: "1px solid #0E918C",
        linkColor: "#212529"


    },
    {
        id: "6",
        img: ApprovalPendingIcon,
        background: "#FFFFFF",
        title: "Review Pending",
        titleColor: "#0E918C",
        link: "View Details",
        border: "1px solid #0E918C",
        linkColor: "#212529"

    },
]