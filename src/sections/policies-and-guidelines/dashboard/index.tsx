import OrganisationalPoliciesIcon from '../../../assets/svg/policy-guidelines/organisational-policies-icon'
import AgencyGuidelinesIcon from '../../../assets/svg/policy-guidelines/agency-guidlines-icon'
import GovtLegislationsIcon from '../../../assets/svg/policy-guidelines/govt-legislations-icon'
import HandbooksIcon from '../../../assets/svg/policy-guidelines/handbooks-icon'
import TemplatesIcon from '../../../assets/svg/policy-guidelines/templates-icon'
import CheckListsIcon from '../../../assets/svg/policy-guidelines/checkLists-icon'
import CyberEssentialsIcon from '../../../assets/svg/policy-guidelines/cyber-essentials-icon'
import OtherPoliciesIcon from '../../../assets/svg/policy-guidelines/other-policies-icon'

// Expandable cards icons
import RecentlyAccessedActivitiesIcon from '../../../assets/svg/policy-guidelines/Recently-Accessed-Policy.svg'
import PolicyInDraftIcon from '../../../assets/svg/policy-guidelines/Policy-in-Draft.svg'
import ReminderAndNotificationsIcon from '../../../assets/svg/policy-guidelines/Reminder-and-Notifications.svg'

export const policyGuidelineCardsData = [
    {
        id: "1",
        title: "Organisational Policies",
        icon: <OrganisationalPoliciesIcon />,
        link: '/policies-and-guidelines/organisational-policies'
    },
    {
        id: "2",
        title: "Agency Guidelines",
        icon: <AgencyGuidelinesIcon />,
        link: 'policies-and-guidelines/agency-guidelines'
    },
    {
        id: "3",
        title: "Govt. Legislations and Regulations",
        icon: <GovtLegislationsIcon />,
        link: 'policies-and-guidelines/govt-legislations'
    },
    {
        id: "4",
        title: "Handbooks",
        icon: <HandbooksIcon />,
        link: 'policies-and-guidelines/handbooks'
    },
    {
        id: "5",
        title: "Templates",
        icon: <TemplatesIcon />,
        link: 'policies-and-guidelines/templates'
    },
    {
        id: "6",
        title: "CheckLists",
        icon: <CheckListsIcon />,
        link: 'policies-and-guidelines/checklists'
    },
    {
        id: "7",
        title: "Cyber Essentials",
        icon: <CyberEssentialsIcon />,
        link: 'policies-and-guidelines/cyber-essentials'
    },
    {
        id: "8",
        title: "Other Policies",
        icon: <OtherPoliciesIcon />,
        link: 'policies-and-guidelines/other-policies'
    },
]

export const ExpandableCardsData = [
    {
        title: "Recently Accessed Policy",
        color: '#F6830F',
        img: RecentlyAccessedActivitiesIcon,
        subData: [
            {
                heading: 'Tuesday, 12 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Govt. Legislations and Regulations',
                        href: '/policies-and-guidelines/govt-legislations',
                    },
                ]
            },
            {
                heading: 'Monday, 11 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                ]
            },
            {
                heading: 'Monday, 11 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                ]
            },
            {
                heading: 'Monday, 11 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                ]
            },
        ]
    },
    {
        title: "Policy in Draft",
        color: '#487399',
        img: PolicyInDraftIcon,
        subData: [
            {
                title: 'Cyber Essentials',
                href: '/policies-and-guidelines/cyber-essentials',
            },
            {
                title: 'CheckLists',
                href: '/policies-and-guidelines/checklists'
            }
        ]
    },
    {
        title: "Reminder and Notifications",
        color: '#DC3545',
        img: ReminderAndNotificationsIcon,
        subData: [
            {
                title: 'Upload Handbook',
                href: '/policies-and-guidelines/handbooks/handbooks-form',
            },
            {
                title: 'Policy not Approved',
                href: '/policies-and-guidelines'
            },
            {
                title: 'Add Educational Policies',
                href: '/policies-and-guidelines',
            },
            {
                title: 'Complete Adding New Policy',
                href: '/policies-and-guidelines'
            },
            {
                title: 'eSignature of Approver Required',
                href: '/policies-and-guidelines',
            },
            {
                title: 'CheckLists',
                href: '/policies-and-guidelines'
            },
        ]
    },
]