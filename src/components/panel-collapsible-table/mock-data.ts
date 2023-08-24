
const subData = [
  {
    id: '1',
    title: 'Panel Outcome',
    href: '/panel/panel-tools/panel-outcome'
  },
  {
    id: '2',
    title: 'Panel Action/ Comments',
    href: '/panel/panel-tools/action-comment'
  },
  {
    id: '3',
    title: 'Panel Agenda',
    href: '/panel/panel-tools/agenda'
  },
  {
    id: '4',
    title: 'Panel Checklist',
    href: '/panel/panel-tools/checklist'
  },
  {
    id: '5',
    title: 'Panel Minutes',
    href: '/panel/panel-tools/panel-minutes'
  },
  {
    id: '6',
    title: 'Panel Member Self- Evaluation Form',
    href: '/panel/panel-evaluation-forms/member-evaluation-form'
  },
  {
    id: '7',
    title: 'Panel Member Review Form',
    href: '/panel/panel-evaluation-forms/member-review-form'
  },
  {
    id: '8',
    title: 'Panel Chair Self- Evaluation Form',
    href: '/panel/panel-evaluation-forms/chair-evaluation-form'
  },
  {
    id: '9',
    title: 'Panel Chair Review Form',
    href: '/panel/panel-evaluation-forms/chair-review-form'
  },
  {
    id: '10',
    title: 'Panel Member Questionnaire',
    href: '/panel/panel-evaluation-forms/member-questionnaire'
  },
]

export const tableDataMock = [
  {
    _id: '1',
    carerName: 'madiha iffat (A123)',
    caseName: 'case 123',
    panelDate: new Date().toDateString(),
    hearingTime: '12:30 PM',
    socialWorker: 'john doe',
    status: 'pending',
    subData: subData,
  },
  {
    _id: '2',
    carerName: 'madiha iffat (A123)',
    caseName: 'case 123',
    panelDate: new Date().toDateString(),
    hearingTime: '12:30 PM',
    socialWorker: 'john doe',
    status: 'pending',
    subData: subData,
  }
]