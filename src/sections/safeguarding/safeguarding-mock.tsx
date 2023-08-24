import Protection from '../../assets/svg/safeguarding/protection.svg';
import Tools from '../../assets/svg/safeguarding/tools.svg';
import Policy from '../../assets/svg/safeguarding/policy.svg';
import ThirdParty from '../../assets/svg/safeguarding/third-parties.svg';
import Child1 from '../../assets/svg/safeguarding/child-abuse.svg';
import Child2 from '../../assets/svg/safeguarding/child-allegation.svg';
import Child3 from '../../assets/svg/safeguarding/child-incident.svg';
import Child4 from '../../assets/svg/safeguarding/child-contact.svg';
import Child5 from '../../assets/svg/safeguarding/child-advocacy.svg';
import Child6 from '../../assets/svg/safeguarding/child-contextual.svg';
import AssessmentTool from '../../assets/svg/safeguarding/safeguarding-tool.svg';
import CheckList from '../../assets/svg/safeguarding/safeguarding-checklist.svg';
import SafeGuardingChild from '../../assets/svg/safeguarding/safeguarding-child.svg';
import SafeGuardingMeasure from '../../assets/svg/safeguarding/safeguarding-mesaures.svg';
import SafeGuardingRevision from '../../assets/svg/safeguarding/safeguarding-revision.svg';
import SafeGuardingTraning from '../../assets/svg/safeguarding/safeguarding-traning.svg';
import SafeGuardingPolicy from '../../assets/svg/safeguarding/safeguarding-policy.svg';
import SafeGuardingTemplate from '../../assets/svg/safeguarding/safeguarding-template.svg';
import SafeGuardingCaring from '../../assets/svg/safeguarding/safeguarding-caring.svg';
import SafeGuardingSupport from '../../assets/svg/safeguarding/safeguarding-support.svg';
import SafeGuardingLegislation from '../../assets/svg/safeguarding/safeguarding-legislation.svg';
import Barnardos from '../../assets/svg/safeguarding/third-branardo.svg';
import Foster from '../../assets/svg/safeguarding/third-foster.svg';
import Voice from '../../assets/svg/safeguarding/third-caram.svg';
import Services from '../../assets/svg/safeguarding/third-service.svg';
import ThirdSociety from '../../assets/svg/safeguarding/third-society.svg';
import Call from "../../assets/svg/safeguarding/call.svg"
import Mail from "../../assets/svg/safeguarding/mail.svg"
import Add from "../../assets/svg/safeguarding/add.svg";
import Location from "../../assets/svg/safeguarding/location.svg"
import Barmados from '../../assets/svg/safeguarding/barmados.svg';
import FosterTalk from '../../assets/svg/safeguarding/fostertalk.svg';
import CormVoice from '../../assets/svg/safeguarding/coram.svg';
import Emergency from '../../assets/svg/safeguarding/emergency.svg';
import NSPC from '../../assets/svg/safeguarding/nspc.svg';


const barnados = {
    helpline: [
        { icon: Call, text: "Call us on ", subText: '0121 758 501' },
        { icon: Mail, text: "Email us on ", subText: 'enquiries@fostertalk.org' },
    ],
    services: [
        { text: 'Protect, support and nurture the UK most vulnerable children' },
        { text: 'Fostering and adoption' },
        { text: 'Helping Families' },
        { text: 'Supoorting Virtual People' },
        { text: 'Protecting Children' },
        { text: 'Voice and influence on young people' },
    ]
}
const fosterTalk = {
    helpline: [
        { icon: Call, text: "Call us on ", subText: '0121 758 501' },
        { icon: Mail, text: "Email us on ", subText: 'enquiries@fostertalk.org' },
        { icon: Location, text: "Located on S Highfield, Edgbaston, Birmingon BIS JED" },
    ],
    services: [
        { text: 'Protect, support and nurture the UK most vulnerable children' },
        { text: 'Fostering and adoption' },
        { text: 'Helping Families' },
        { text: 'Supoorting Virtual People' },
        { text: 'Protecting Children' },
        { text: 'Voice and influence on young people' },
    ]
}
const coram = {
    helpline: [

        { icon: Call, text: "Advocacy Helpline: call us on ",subText:'0808 800 5792. Tel: 020 7833 5792' },
        { icon: Mail, text: "Email us on ",subText:'info@coramvoice.org.uk' },
        { icon: Location,text:"", subText: "Coram Voice, Coram Campus, 41 Brunswick Square, London WC1N 1AZ." },
    ],
    services: [
        { text: 'Deliver high quality advice and support' },
        { text: 'Seek out those who need our help most' },
        { text: 'Work as a problem solving partner' },
        { text: 'Work as a problem solving partner' },
        { text: 'Provide a platform for A National Voice for children and young people' },
        { text: 'Is part of the Coram Group of charities.' },
    ]
}
const emergency = {
    helpline: [

        { icon: Call, text: "Call us on 999Link to Phone Directory Tab (EDT Tab ).Redbridge control centre: 0208 5545000Waltham Forest control centre: 0208 4963000Barking control centre: 0208 5948356Havering control centre: 017084339999" },
        { icon: Add, text: "Add Another Council" }
    ],
    services: [
        { text: 'Emergency social care service outside of normal office hours' },
        { text: 'Deals with emergency situations' },
        { text: 'Professionals can contact the team if a carer or a vulnerable adult is in urgent need' },
    ]
}
const nspc = {
    helpline: [
        { icon: Call, text: "Help for adults concerned about - Call us on 0808 800 5000.Help for children and young people - Call Childline on 0800 1111. For supporter, donation and fundraising queries - Call us on 020 7825. 2505." },
        { icon: Mail, text: "Email us on enquiries@fostertalk.org" },
    ],
    services: [
        { text: 'UK’s leading children’s Charity' },
        { text: 'Prevent Child Abuse' },
        { text: 'Rebuilf Chldren’s lives ' },
        { text: 'Support Families' },
        { text: 'Working with School' },
        { text: 'Therapeutic Services' },
        { text: 'Research' },
        { text: 'Support and advice for families' },
        { text: "Campaigning for change" }
    ]
}

export const SAFEGUARDING_ARRAY = [
    {
        id: '1',
        title: 'Child Protection And Safeguarding',
        icon: Protection,
        background: 'linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)',
        subArray: [
            {
                id: '1',
                icon: Child2,
                title: 'Child Abuse and Exploitation Management',
                path: '/safeguarding/child-protection/child-abuse-and-expolitation-management'
            },
            {
                id: '2',
                icon: Child3,
                title: 'Allegation Management',
                path: '/safeguarding/child-protection/allegation-management'
            },
            {
                id: '3',
                icon: Child4,
                title: 'Incident Management',
                path: '/safeguarding/child-protection/incident-management'
            },
            {
                id: '4',
                icon: Child5,
                title: 'Agency Safeguarding Officer / Contact',
                path: '/safeguarding/child-protection/agency-safeguarding-officer-contact'
            },
            {
                id: '5',
                icon: Child6,
                title: 'Safeguarding - Child Advocacy',
                path: '/safeguarding/child-protection/safeguarding-child-advocacy'
            },
            {
                id: '6',
                icon: Child1,
                title: 'Contextual Safeguarding Operational Group Information Form',
                path: '/safeguarding/child-protection/contextual-safeguarding'
            },
        ]
    },
    {
        id: '2',
        title: 'Safeguarding Tools',
        icon: Tools,
        background: 'linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)',
        subArray: [
            {
                id: '1',
                icon: AssessmentTool,
                title: 'Safeguarding Assessment Tool ',
                path: '/safeguarding/safeguarding-tools/safeguarding-assessment-tool'
            },
            {
                id: '2',
                icon: CheckList,
                title: 'Safeguarding Checklist',
                path: '/safeguarding/safeguarding-tools/safeguarding-checklist'
            },
            {
                id: '3',
                icon: SafeGuardingMeasure,
                title: 'Safeguarding Measures to be Taken Before a Child is Placed',
                path: '/safeguarding/safeguarding-tools/safeguarding-measures-to-be-taken'
            },
            {
                id: '4',
                icon: SafeGuardingChild,
                title: 'Safeguarding Measures When a Child is Placed',
                path: '/safeguarding/safeguarding-tools/safeguarding-measures-child-placed'
            },
            {
                id: '5',
                icon: SafeGuardingRevision,
                title: 'Safeguarding Meetings / Policy Revision Meetings',
                path: '/safeguarding/safeguarding-tools/safeguarding-meetings'
            },
            {
                id: '6',
                icon: SafeGuardingTraning,
                title: 'Safeguarding Training ',
                path: '/safeguarding/safeguarding-tools/safeguarding-training'
            },
        ]
    },
    {
        id: '3',
        title: 'Safeguarding Policy, Guide Templates',
        icon: Policy,
        background: 'linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)',
        subArray: [
            {
                id: '1',
                icon: SafeGuardingPolicy,
                title: 'Agency Safeguarding Policy',
                path: '/safeguarding/policy-guide-templates/agency-policy'
            },
            {
                id: '2',
                icon: SafeGuardingTemplate,
                title: 'Safeguarding Templates',
                path: '/safeguarding/policy-guide-templates/safeguarding-template'
            },
            {
                id: '3',
                icon: SafeGuardingCaring,
                title: 'Safe Caring Policy for Looked After Children ',
                path: '/safeguarding/policy-guide-templates/safe-caring'
            },
            {
                id: '4',
                icon: SafeGuardingSupport,
                title: 'Support for Carers  → Support for parents ',
                path: '/safeguarding/policy-guide-templates/support-carers'
            },
            {
                id: '5',
                icon: SafeGuardingLegislation,
                title: 'Safeguarding Legislation',
                path: '/safeguarding/policy-guide-templates/legislation'
            },
        ]
    },
    {
        id: '4',
        title: 'Safeguarding-Third Parties',
        icon: ThirdParty,
        background: 'linear-gradient(106.35deg, #1A202E 0%, #424E68 100%)',
        subArray: [
            {
                id: '1',
                icon: Barnardos,
                title: "Barnardo's",
                path: '/safeguarding/third-parties',
                subData: barnados,
                companyLogo: Barmados,
            },
            {
                id: '2',
                icon: Foster,
                title: "Foster Talk",
                path: '/safeguarding/third-parties',
                subData: fosterTalk,
                companyLogo: FosterTalk,
            },
            {
                id: '3',
                icon: Voice,
                title: "Coram Voice",
                path: '/safeguarding/third-parties',
                subData: coram,
                companyLogo: CormVoice,
            },
            {
                id: '4',
                icon: Services,
                title: "Emergency Duty Team",
                path: '/safeguarding/third-parties',
                subData: emergency,
                companyLogo: Emergency,
            },
            {
                id: '5',
                icon: ThirdSociety,
                title: "NSPCC - National Society for the Prevention of Cruelty to Children",
                path: '/safeguarding/third-parties',
                subData: nspc,
                companyLogo: NSPC,
            },
        ]
    }
]