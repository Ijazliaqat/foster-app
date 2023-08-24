import React from 'react'
import ThirdPartyCard from './ThirdPartyCard';
import Helpline from '../../../assets/svg/safeguarding/helpline.svg';
import Services from '../../../assets/svg/safeguarding/services.svg';
import SocialMedia from '../../../assets/svg/safeguarding/socialMedia.svg';
import ThirdParty from '../../../assets/svg/safeguarding/third-parties.svg';
import Browser from '../../../assets/svg/safeguarding/browser.svg';
import Facebook from '../../../assets/svg/safeguarding/facebook.svg';
import Youtube from '../../../assets/svg/safeguarding/youtube.svg';
import Twitter from '../../../assets/svg/safeguarding/twitter.svg';
import Linkdin from '../../../assets/svg/safeguarding/linkdin.svg';
import Whatsapp from '../../../assets/svg/safeguarding/whatsapp.svg';
import Instagaram from '../../../assets/svg/safeguarding/instagaram.svg';
import Add from '../../../assets/svg/safeguarding/add.svg';
import Contract from '../../../assets/svg/safeguarding/contracts.svg';
import Membership from '../../../assets/svg/safeguarding/membership.svg';
import Payment from '../../../assets/svg/safeguarding/payments.svg';
import AddBlack from '../../../assets/svg/safeguarding/addBlack.svg';
import Info from '../../../assets/svg/safeguarding/info.svg';
import Share from '../../../assets/svg/safeguarding/share.svg';
import Edit from '../../../assets/svg/safeguarding/edit.svg';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { SAFEGUARDING_ARRAY } from '../safeguarding-mock';
import Index from '@root/pages/dashboard/temp';

const socialMediaData = [
  { icon: Browser, link: '' },
  { icon: Facebook, link: '' },
  { icon: Youtube, link: '' },
  { icon: Twitter, link: '' },
  { icon: Linkdin, link: '' },
  { icon: Whatsapp, link: '' },
  { icon: Instagaram, link: '' },
  { icon: Add, link: '' },

]
const memberShipData = [
  { icon: Contract, title: 'Contracts' },
  { icon: Membership, title: 'Membership' },
  { icon: Payment, title: 'Payment' },
  { icon: AddBlack, title: '' },
]
const shortLink = [
  { icon: Info, type: 'info' },
  { icon: Edit, type: 'edit' },
  { icon: Share, type: 'share' },
]
const ThirdPartySection = ({ id }: any) => {
  const theme = useTheme();
  const [findCompany] = SAFEGUARDING_ARRAY.flatMap(data => data.title === 'Safeguarding-Third Parties' ? data : []);
  const companyData: any = findCompany.subArray.find(obj => obj.id === id);
  const companyInfo = companyData.subData;

  return (
    <>
      <Grid container alignItems={'center'} sx={{ mb: 4 }}>
        <Grid item sm={11} xs={12}>
          <Box display={'flex'} alignItems={'center'} sx={{ gap: 0.5 }}>
            <Typography sx={styles.companyTitle(theme.palette.primary.main)}>
              {companyData.title === 'Emergency Duty Team' ? `${companyData.title} (EDT)` : companyData.title}
              </Typography>
            {shortLink.map(link =>
              <Image
                key={link.type}
                src={link.icon}
                alt={link.type}
                style={styles.img}
                onClick={() => alert(link.type)}
              />)}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Image src={companyData.companyLogo} alt='icon' style={styles.img} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <ThirdPartyCard title='Helpline' icon={Helpline} background='linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)'>
            <Box display="flex" flexDirection="column" gap={4} sx={{ p: '40px 30px' }}>
              {
                companyInfo?.helpline?.map((obj: any) => (
                  <Box sx={styles.flex} key={obj.text} >
                    <Image src={obj?.icon} alt='icon' />
                    <Typography sx={styles.title(theme.palette.mode)}>
                      {obj.text}
                      <Typography
                        sx={{ color: '#FB363E', fontWeight: 700 }}
                        component={'span'}>
                        {obj.subText}
                      </Typography>
                    </Typography>
                  </Box>
                ))}
            </Box>
          </ThirdPartyCard>
        </Grid>
        <Grid item lg={6}>
          <ThirdPartyCard title='Services Offered' icon={Services} background='linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)'>
            <ul style={{ paddingBottom: '25px ', marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: '30px' }}>
              {companyInfo?.services?.map((obj: any,index:number) => (
                <Box key={index}>
                  <Typography component={'li'} key={obj.text} sx={styles.flex}>
                    <Typography sx={styles.box}></Typography>
                    <Typography>{obj.text}</Typography>
                  </Typography>
                </Box>
              ))
              }
            </ul>
          </ThirdPartyCard>
        </Grid>
        <Grid item lg={6}>
          <ThirdPartyCard title='Social Media' icon={SocialMedia} background='linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)'>
            <Grid container spacing={3} sx={{ p: '50px 20px', fontWeight: '500' }}>
              {socialMediaData.map((obj: any,index:number) => (
                <Grid item key={index} lg={3} display={'flex'} alignItems={"center"} justifyContent={'center'} sx={{ my: '20px' }}>
                  <Link href={obj.link} >
                    <Image src={obj.icon} alt='icon' />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </ThirdPartyCard>
        </Grid>
        <Grid item lg={6}>
          <ThirdPartyCard title='Contracts & Memberships' icon={ThirdParty} background='linear-gradient(106.35deg, #1A202E 0%, #424E68 100%)'>
            <Grid container sx={{ p: '20px 40px', display: "flex", alignItems: "center", height: "100%" }}>
              {
                memberShipData.map((obj: any) => (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={obj.title} sx={{ textAlign: 'center' }} display={'flex'} alignItems={"center"} justifyContent={'center'} flexDirection={'column'}>
                    <Image src={obj.icon} alt='icon' style={{ margin: '0 auto' }} />
                    <Typography>{obj.title}</Typography>
                  </Grid>
                ))
              }
            </Grid>
          </ThirdPartyCard>
        </Grid>
      </Grid>
    </>
  )
}

export default ThirdPartySection

const styles: any = {
  flex: { display: 'flex', alignItems: 'center', gap: 3, },
  companyTitle: (color: any) => ({ mr: 3, fontWeight: 600, fontSize: 24, color }),
  title: (mode: any) => ({ fontWeight: 700, color: mode === 'light' ? '#343A40' : mode }),
  box: { background: 'linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)', height: '15px', width: '15px' },
  media: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', justyifyContent: 'space-between' },
  img: { cursor: 'pointer' }
}