import userProfile from '../../../assets/img/userProfile.png';

export const currentReferralData = [
  {
    id: '1',
    profile: userProfile,
    refereeName: 'john doe',
    refereeType: 'foster child',
    DOB: new Date().toDateString(),
    referralDate: new Date().toDateString(),
    localAuthority: 'redbridge',
  },
  {
    id: '2',
    profile: userProfile,
    refereeName: 'john doe',
    refereeType: 'foster carer',
    DOB: new Date().toDateString(),
    referralDate: new Date().toDateString(),
    localAuthority: 'hillingdon',
  },
]