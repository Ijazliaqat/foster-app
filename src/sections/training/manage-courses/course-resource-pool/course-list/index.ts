import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from 'yup';

export const initialValues = {
  reason: 'reason',
  notes: 'nil',
  waitingList: true
}

export const formSchema = Yup.object().shape({
  reason: Yup.string().required('Field is required'),
  notes: Yup.string().required('Field is required'),
  waitingList: Yup.string().required('Field is required'),
})

export const archiveCourseData = {
  author: [
    { author: 'neil armstrong', label: 'Author' },
    { author: 'neil armstrong', label: 'Instructor' },
  ],
  archivedCourse: [
    {
      label: 'User ID:',
      value: '837',
    },
    {
      label: 'Date:',
      value: '01/20/2022  15:58:57',
    },
    {
      label: 'User Name:',
      value: 'phil moses',
    },
    {
      label: 'Reason:',
      value: '01/20/2022  15:58:57',
    },
    {
      label: 'Note:',
      value: 'Course was cancelled due to lack of interest',
    },
  ],
  learn: [
    {
      id: '1',
      title: 'To explore child protection and safeguarding children and young people procedures'
    },
    {
      id: '2',
      title: 'To gain a clear understanding of the signs and symptoms of physical, emotional, and sexual abuse, as well as neglect and the witnessing of domestic violence'
    },
    {
      id: '3',
      title: 'To understand the contribution that carers may be asked to make to the Common Assessment Framework'
    },
    {
      id: '4',
      title: 'Understand your legal responsibilities when caring for children and young people'
    },
    {
      id: '5',
      title: 'To learn what to do when a child discloses abuse'
    }
  ],
  requirements: [
    {
      id: '1',
      title: "To explore child protection and safeguarding children and young people procedures"
    },
    {
      id: '2',
      title: "To gain an understanding of multi-professional principles of working together, in order to enhance the skills and confidence of carers"
    },
  ],
  description: [
    {
      id: '1',
      title: 'There are two aspects to the course. In the first one the emphasis is on how to recognize abuse, what tell tale signs to look out for. It introduces a helpful framework to guide you in knowing what to look out for and what to do if abuse seems to be possible or likely. In the second aspect, the focus switches to what needs to happen after abuse has come to light and a protection plan needs to be developed and implemented.'
    },
    {
      id: '2',
      title: 'We owe it to abused children to get it right whenever we can, and so this course has an important part to play in making sure that people involved in child protection services are well informed and confident in their approach.'
    },
    {
      id: '3',
      title: 'This course will be of immense value in reducing anxiety and offering clear practice guidance.It offers important insights into the complex world of child protection.'
    }

  ],
  courses: [
    {
      id: '1',
      title: 'Safeguarding Essentials',
      component: [
        { id: '1', type: 'video', title: 'introduction', duration: '23:46' },
        { id: '2', type: 'pdf', title: 'intro to safeguarding essentials', pages: '1' },
      ]
    },
    {
      id: '2',
      title: 'Safer recruitment',
      component: [
        { id: '1', type: 'video', title: 'introduction', duration: '10:46' },
        { id: '2', type: 'video', title: 'introduction', duration: '02:46' },
        { id: '3', type: 'video', title: 'introduction', duration: '05:46' },
        { id: '4', type: 'video', title: 'introduction', duration: '07:46' },
        { id: '5', type: 'video', title: 'introduction', duration: '10:03' },
        { id: '6', type: 'pdf', title: 'intro to safeguarding essentials', pages: '2' },
      ]
    }
  ],
  formDataArr: [
    {
      gridLength: 12,
      title: 'Reason',
      otherOptions: {
        name: 'reason',
        fullWidth: true,
        select: true,
        options: [
          { value: 'applicable', label: 'applicable' },
          { value: 'not applicable', label: 'not applicable' },
        ]
      },
      component: RHFSelect
    },
    {
      gridLength: 12,
      title: 'Notes',
      otherOptions: {
        name: 'notes',
        multiline: true,
        rows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'waitingList',
        label: 'Add to Waiting List',
        sx: { mt: '-40px', }
      },
      component: RHFCheckbox
    }
  ]
}