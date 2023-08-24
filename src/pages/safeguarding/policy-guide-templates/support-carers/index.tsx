import Layout from '@root/layouts';
import React, { useState } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import SupportCarersCard from '@root/sections/safeguarding/policy-guide-templates/support-carers/support-carers-card/SupportCarersCard';

export const SUPPORT_CARERS_CARDS = [
  {
    title: "Baby parenting Tips",
    link: "/baby-parenting-tips",
    bgColor: "#eb9411"
  },
  {
    title: "How to cope with tantrums",
    link: "/how-to-cope-with-tantrums",
    bgColor: "#20be60"
  },  
  {
    title: "Working from Home",
    link: "/working-from-home",
    bgColor: "#0e918c"
  },
  {
    title: "Talking to children about racism",
    link: "/talking-to-chilren-about-racism",
    bgColor: "#10b0c6"
  },
  {
    title: "Separation and Divorce",
    link: "/separation-and-divorce",
    bgColor: "#20be60"
  },
  {
    title: "Mental health and Parenting",
    link: "/mental-health-and-parenting",
    bgColor: "#0e918c"
  },  
  {
    title: "Alcohol, Drugs and Parenting",
    link: "/alcolol-drugs-and-parenting",
    bgColor: "#10b0c6"
  },
  {
    title: "PANTS:The Underwear rule",
    link: "/the-underwear-rule",
    bgColor: "#465987"
  },
  {
    title: "Talking about difficult topics",
    link: "/talking-about-difficult-topics",
    bgColor: "#0e918c"
  },
  {
    title: "Look Say Sing Play",
    link: "/look-say-sing-play",
    bgColor: "#10b0c6"
  },
]

const PAGE_TITLE = "Safeguarding Templates";

SupportCarers.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Support for parents",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SupportCarers() {
  const [data, setData] = useState(SUPPORT_CARERS_CARDS)
  return ( 
    <Page title={PAGE_TITLE}>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {
          data.map((item:any, idx:any)=>{
            return(
              <SupportCarersCard key={idx} title={item.title} bgColor={item.bgColor} link={item.link}/>
            )
          })
        }
      </Box>
    </Page>
  );
}