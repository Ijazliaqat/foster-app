/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  listItems,
  introPoints,
  dataCollection,
  personalData,
  thirdPartyData,
  personalDataUse,
  disclosureData,
  legalRights,
  glossary,
} from "./index";
import React from "react";
import Link from "next/link";
import PersonalTable from "./PersonalTable";
import FacebookIcon from "@mui/icons-material/Facebook";
import DataRetentionTable from "./DataRetentionTable";

const PrivacyAndPolicy = () => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={2} sx={{ position: "relative" }}>
          {/* Left Tabs Grid */}
          <Grid item xs={12} lg={12} sx={styles.mainGrid}>
            {listItems.map((item: any) => (
              <Link
                href={`${item.link}`}
                key={item.id}
                style={{
                  color: theme.palette.grey[700],
                  scrollBehavior: "smooth",
                  transition: "all 0.5s ease-out",
                }}
              >
                <List
                  sx={{
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                    p: 0,
                  }}
                >
                  <ListItem sx={{ p: "0 0 15px 20px" }}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle2"
                          sx={{
                            cursor: "pointer",
                            display: "inline-block",
                          }}
                        >
                          {item.title}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Link>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={10}>
          <Card
            sx={{ p: { xs: 2, sm: 3 }, height: "100vh", overflowY: "auto" }}
          >
            <Typography variant="h3" sx={styles.mainTitle}>
              Privacy Policy
            </Typography>
            <Box id="introduction">
              <Typography variant="h4" sx={styles.subHeadings}>
                Introduction
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 2,
                  lineHeight: "30px",
                  mb: 2,
                }}
              >
                {`Welcome to FosterApp privacy notice. FosterApp respects your
                privacy and is committed to protecting your personal data. This
                privacy notice will inform you as to how we look after your
                personal data that you supply to us and tell you about your
                privacy rights and how the law protects you. This privacy notice
                is laid out under manageable sections to make it easier to
                digest and allow you to find specific information quickly. We
                have also included a Glossary to explain the meaning of some of
                the terms used in this privacy notice.`}
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {introPoints.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
            </Box>
            <Box id="who-we-are">
              <Typography variant="h4" sx={styles.subHeadings}>
                1. Important information and{" "}
                <Typography
                  variant="h4"
                  component={"span"}
                  sx={styles.spanTitles}
                >
                  who we are
                </Typography>
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Purpose of this Privacy Notice
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`This privacy notice aims to give you information on how
                FosterApp collects and processes your personal data. It is
                important that you read this privacy notics so that you are
                fully aware of how and why we are using your data.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Controller
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`FosterApp is the controller and responsible for your personal
                data (collectively referred to as FosterApp, "we", "us", or
                "our" in this privacy notice). We have a Data Protection Oficer
                who is responsible for overseeing questions in relation to this
                privacy notice. If you have any questions about this privacy
                notice, including any requests to exercise your legal rights,
                please contact us using the details set out below.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Contact Details
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`Phone Number: (+44) - 750028 - 7504`}
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                Email address for our DPO:{" "}
                <Link href={`mailto:${`contact-us@fosterapp.co.uk`}`}>
                  {" "}
                  contact-us@fosterapp.co.uk
                </Link>
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`Postal Address: 77, Spaces Healthrow Airport, 4 Roundwood
                Avenue, Stockley Park, Uxbridge, UB11 1AF, United Kingdom.`}{" "}
                <br /> <br />{" "}
                {`You have the right to make a complaint at any time
                to the Information Commissioner’s Office (ICO), the UK
                supervisory authority for data protection issues`}
                <Link target="__blank" href="https://ico.org.uk/">
                  {" "}
                  {`(Information Commissioner's Office (ICO)`}
                </Link>{" "}
                {`  We would, however, appreciate the chance to deal with your
                concerns before you approach the ICO, so please contact us in
                the first instance.`}
                {`We would, however,
                appreciate the chance to deal with your concerns before you
                approach the ICO, so please contact us in the first instance.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                {` Changes to the privacy notice and your duty to inform us of
                changes`}
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`This version was last updated in September 2021. `}
                <br /> <br />
                {`It is important that the personal data we hold about you is
                accurate and current. Please keep us informed if your personal
                data changes during your relationship with us.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Third Party Links
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`This website may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                website, we encourage you to read the privacy notice of every
                website you visit.`}
              </Typography>
            </Box>
            {/* Data we collect section started */}
            <Box id="about-us">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                  mb: 2,
                }}
              >
                2. The data we collect about you
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`Personal data, or personal information, means any information
                about an individual from which that person can be identified. It
                does not include data where the identity has been removed
                (anonymous data).`}
                <br /> <br />
                {` We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together follows:`}
                <br />
                <br />
              </Typography>

              <Box component="ul" sx={styles.unorderedList}>
                {dataCollection.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
              <Typography variant="body1" sx={{ lineHeight: "30px", mt: 1 }}>
                {`We also collect, use and share Aggregated Data such as
                statistical or demographic data for any purpose. Aggregated Data
                may be derived from your personal data but is not considered
                personal data in law as this data does not directly or
                indirectly reveal your identity. For example, we may aggregate
                your Usage Data to calculate the percentage of users accessing a
                specific website feature. However, if we combine or connect
                Aggregated Data with your personal data so that it can directly
                or indirectly identify you, we treat the combined data as
                personal data which will be used in accordance with this privacy
                notice.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                If you fail to provide personal data
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "30px" }}>
                {`Where we need to collect personal data by law, or under the
                terms of a contract we have with you, and you fail to provide
                that data when requested, we may not be able to perform the
                contract we have or are trying to enter into with you (for
                example, to proceed with your assessment to become a foster
                carer). In this case, we may have to cancel your enquiry or
                assessment with us, but we will notify you if this is the case
                at the time.`}
                <br />
                <br />
                {`The FosterApp website logs IP addresses and browser types to
                provide you with the best possible user experience and allow us
                insight into consumer behaviour. You can browse our site without
                entering any personal information, and therefore remain
                anonymous during your visit. However, our enquiry form asks for
                personal information such as name, postal address, email address
                and telephone number to enable us to send out the requested
                information, and make any future visits to our site easier.`}
              </Typography>
            </Box>
            {/* Personal Data Collected */}
            <Box id="personal-data-collected">
              <Typography variant="h4" sx={styles.subHeadings}>
                3. How your personal data is collected
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 1, mb: 1 }}
              >
                We use different methods to collect data from and about you
                including through:
              </Typography>
              <Box
                component="ol"
                sx={{
                  listStyleType: "disc",
                  marginLeft: "10px",
                  paddingLeft: "10px",
                  lineHeight: "30px",
                  mb: 1,
                }}
              >
                <li>
                  {`Direct interactions. You may give us your Identity, Contact
                  and Financial Data by filling in forms or by corresponding
                  with us by post, phone, email or otherwise. This includes
                  personal data you provide when you:`}
                </li>
              </Box>
              <Box
                component="ol"
                sx={{
                  listStylePosition: "outside",
                  marginLeft: "10px",
                  paddingLeft: "10px",
                  lineHeight: "30px",
                }}
              >
                {personalData.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
              <Box
                component="ol"
                sx={{
                  listStyleType: "disc",
                  marginLeft: "10px",
                  paddingLeft: "10px",
                  lineHeight: "30px",
                  mb: 1,
                  mt: 1,
                }}
              >
                <li>
                  {` Third parties or publicly available sources. We may receive
                  personal data about you from various third parties and public
                  sources as set out below:- Technical Data from the following
                  parties:`}
                </li>
              </Box>
              <Box
                component="ol"
                sx={{
                  listStyleType: "lower-alpha",
                  listStylePosition: "outside",
                  marginLeft: "10px",
                  paddingLeft: "10px",
                  lineHeight: "30px",
                }}
              >
                {thirdPartyData.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
            </Box>
            {/*-------------
             How we use personal data
             --------- */}
            <Box id="personal-data-use">
              <Typography variant="h4" sx={styles.subHeadings}>
                4. How we use your personal data
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </Typography>
              <Box
                component="ol"
                sx={{
                  listStyleType: "disc",
                  listStylePosition: "outside",
                  marginLeft: "10px",
                  paddingLeft: "10px",
                  lineHeight: "30px",
                }}
              >
                {personalDataUse.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Using your sensitive personal data
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "30px", mt: 2 }}>
                {`If you submit your personal data to us via an enquiry form on
                one of our webpages, we will accept this as consent for us to
                contact you with information regarding fostering.`}
                <br />
                <br />
                {` For purposes outside of our contract, such as sending you
                marketing emails and invitation to events, we will require you
                to provide consent as a legal basis for processing your personal
                data in this way. You have the right to withdraw consent to
                marketing communications at any time by unsubscribing via the
                link within all of our emails, or contacting us directly.`}
                <br />
                <br />
                {`  If a child’s personal data is submitted to us to provide the
                service of foster care, we will process this data in accordance
                with the law.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Purposes for which we will use your personal data
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` We have set out below, in a table format, a description of all
                the ways we plan to use your personal data, and which of the
                legal bases we rely on to do so. We have also identified what
                our legitimate interests are, where appropriate.`}
                <br />
                <br />
                {` Please note that we may process your personal data for more than
                one lawful ground depending on the specific purpose for which we
                are using your data. Please contact us if you require details
                about the specific legal ground we are relying on to process
                your personal data where more than one ground has been set out
                in the table below:`}
              </Typography>
              {/* Personal Use Data Table Component */}
              <PersonalTable />
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Marketing
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`We strive to provide you with choices regarding certain personal
                data uses, particularly around marketing and advertising.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Promotional news and events
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` We may use your Identity, Contact, Technical, Usage and Profile
                Data to form a view on what we think may be of interest to you.
                This is how we decide which services and events may be relevant
                for you (we call this marketing).`}
                <br />
                <br />
                {`You will receive marketing communications from us, including
                information about fostering and invitations to events, if you
                have opted in to receive these communications.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Third Party Marketing
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` We will get your opt-in consent before we share your personal
                data with any company outside of FosterApp, for marketing
                purposes.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Opting Out
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`You can ask us or third parties to stop sending you marketing
                messages at any time following the opt-out links on any
                marketing message sent to you, or by Contacting us at any time.`}
                <br />
                <br />
                {`   Where you opt out of receiving these marketing messages, this
                will not apply to personal data provided to us as a result of a
                service we are providing, such as completing a fostering
                assessment.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Cookies and Webtracking
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 2 }}>
                WHAT ARE COOKIES?
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`Our site uses cookies to keep track of progress and to provide
                our visitors with a tailored user experience. With the help of
                cookies, we can present you with customised content and adverts
                that will be of more interest to you. We also use cookies to
                remember your passwords for you so you don’t have to re-enter
                them each time you visit the site. You have the option of
                setting your browser to reject cookies. However, if certain
                cookies that track your details are rejected then we won’t be
                able to pre-fill any data on the site or direct you to the
                correct stage on your next visit.`}
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`You can ask us or third parties to stop sending you marketing
                messages at any time following the opt-out links on any
                marketing message sent to you, or by Contacting us at any time.`}
                <br />
                <br />
                {`   Where you opt out of receiving these marketing messages, this
                will not apply to personal data provided to us as a result of a
                service we are providing, such as completing a fostering
                assessment.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                COOKIE UPDATES
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`FosterApp uses necessary cookies to make the website easier for
                you to use and to ensure you get the best experience. If you
                choose to continue without changing these settings, you consent
                to this, but should you want to, you can change your settings at
                any time.`}
                <br />
                <br />
                {` We will only read or write cookies for the preference
                level set, cookies set prior to you changing your settings will
                still be on your computer and you can remove them using your
                browser settings.`}
                <br /> <br />
                {`We use a cookie to remember your cookie preferences this has a couple of consequences:`}
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                <li>
                  If you delete all your cookies you will have to update your
                  preferences with us again.
                </li>
                <li>
                  If you use a different device, computer profile or browser you
                  will have to tell us your preferences again.
                </li>
              </Box>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                ADVERTISER COOKIES
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` You may be served cookies from advertisers while visiting our
                site. We do not control, nor do we have access to, any of the
                information they may collect.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                HOW WE USE COOKIES AT FOSTERAPP
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`Please view our Cookie Policy on the website for information on
                how we use Cookies.`}
              </Typography>
              <Typography variant="subtitle2">
                INFORMATION THIS WEBSITE GATHERS/TRACKS
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`As web tracking offers more chances to market to website
                visitors across the Internet, you as a visitor to our agency
                website may be targeted with adverts on other websites. Google
                and third party vendors might show targeted adverts with the
                ability to opt out. First and third party cookies are used to
                provide information and offer improvements to optimise quality
                of adverts served. You can change the cookie management settings
                in your web browser to stop these adverts. If you are a
                registered Facebook user, you may also receive targeted adverts
                from us. You can read about how Facebook works by following this
                link`}{" "}
                <Link
                  target="__blank"
                  href="https://en-gb.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
                >
                  <Typography
                    component={"span"}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <FacebookIcon sx={{ color: "#3b5998" }} /> Meta Cookies
                    Policy
                  </Typography>
                </Link>
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                CHANGE OF PURPOSE
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`  We will only use your personal data for the purposes for which
                we collected it, unless we reasonably consider that we need to
                use it for another reason and that reason is compatible with the
                original purpose. If you wish to get an explanation as to how
                the processing for the new purpose is compatible with the
                original purpose, please contact us.`}
                <br />
                <br />
                {`   If we need to use your personal data for an unrelated purpose,
                we will notify you and we will explain the legal basis which
                allows us to do so.`}
                {` Please note that we may process your personal data without your
                knowledge or consent, in compliance with the above rules, where
                this is required or permitted by law.`}
              </Typography>
            </Box>
            {/* Disclosure Personal Data */}
            <Box id="disclosure-personal-data">
              <Typography variant="h4" sx={styles.subHeadings}>
                5. Disclosures of your personal data
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`We may have to share your personal data with the parties set out
                below for the purposes set out in the table in paragraph 4
                above. Such third parties consist of:`}
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {disclosureData.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with our
                instructions.`}
              </Typography>
            </Box>
            {/* International Transfers */}
            <Box id="international-transfers">
              <Typography variant="h4" sx={styles.subHeadings}>
                6. International Transfers
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` The only circumstances where data may be transferred outside the
                European Economic Area (EEA) is regarding surveys completed in
                Survey Monkey. Survey Monkey transfers some data to the United
                States, however this has a Privacy Shield in place which is
                compliant with GDPR.`}
              </Typography>
            </Box>
            {/* Data Security */}
            <Box id="data-security">
              <Typography variant="h4" sx={styles.subHeadings}>
                7. Data Security
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`  We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorised way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know. They will only process your personal
                data on our instructions and they are subject to a duty of
                confidentiality.`}
                <br />
                <br />
                {` We have put in place procedures to deal with any suspected
                personal data breach and will notify you and any applicable
                regulator of a breach where this is likely to result in a risk
                to the rights and freedoms of any person.`}
              </Typography>
            </Box>
            {/* Data Retention */}
            <Box id="data-retention">
              <Typography variant="h4" sx={styles.subHeadings}>
                8. Data Retention
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                How long will you use my personal data for?
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`FosterApp will only retain your personal data for as long as
                necessary to fulfil the purposes we collected it for, including
                for the purposes of satisfying any legal, accounting, or
                reporting requirements.`}
                <br /> <br />
                {`  To determine the appropriate retention period for personal data,
                we consider the amount, nature, and sensitivity of the personal
                data, the potential risk of harm from unauthorised use or
                disclosure of your personal data, the purposes for which we
                process your personal data and whether we can achieve those
                purposes through other means, and the applicable legal
                requirements.`}
                <br /> <br />
                {`  We have outlined the retention periods for different types of
                personal data in the table below:`}
              </Typography>
              {/* Data Retention Table Component */}
              <DataRetentionTable />
            </Box>
            {/* Legal Rights Section */}
            <Box id="legal-rights">
              <Typography variant="h4" sx={styles.subHeadings}>
                9. Your legal rights
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` Under certain circumstances, you have rights under data
                protection laws in relation to your personal data. Your rights
                include:`}
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {legalRights.map((item: any) => (
                  <Box key={item.id}>
                    <li style={{ fontWeight: 700 }}>{item.title}</li>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "30px", mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` If you wish to exercise any of these rights, please contact
                us, marking your query for the attention of the DPO.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                No fee usually required
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`You will not have to pay a fee to access your personal data (or
                to exercise any of the other rights). However, we may charge a
                reasonable fee if your request is clearly unfounded, repetitive
                or excessive. Alternatively, we may refuse to comply with your
                request in these circumstances.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                What we may need from you
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {`We may need to request specific information from you to help us
                confirm your identity and ensure your right to access your
                personal data (or to exercise any of your other rights). This is
                a security measure to ensure that personal data is not disclosed
                to any person who has no right to receive it. We may also
                contact you to ask you for further information in relation to
                your request to speed up our response.`}
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Time limit to respond
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 2 }}
              >
                {` We try to respond to all legitimate requests within one month.
                Occasionally it may take us longer than a month if your request
                is particularly complex or you have made a number of requests.
                In this case, we will notify you and keep you updated.`}
              </Typography>
            </Box>
            {/* Glossary */}
            <Box id="glossary">
              <Typography variant="h4" sx={styles.subHeadings}>
                10. Glossary
              </Typography>
              <Typography variant="subtitle1" sx={styles.subTitles}>
                Lawful Basis
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {glossary.map((item: any) => (
                  <Box key={item.id}>
                    <li style={{ fontWeight: 700 }}>{item.title}</li>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "30px", mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrivacyAndPolicy;

const styles: any = {
  mainWrapper: {
    px: { xs: 1, sm: 5, md: 3, lg: 10 },
    mb: { xs: 5, sm: 10 },
    mt: { xs: 4, sm: 5, lg: 8 },
  },
  mainTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    display: "inline-block",
    fontWeight: 700,
  }),
  mainGrid: {
    mb: { xs: 3, md: 0 },
    position: "sticky",
    top: "10%",
    left: "8%",
    zIndex: 112,
  },
  spanTitles: (theme: any) => ({
    display: "inline-block",
  }),

  subTitles: (theme: any) => ({
    color: theme.palette.primary.main,
    mt: 2,
    mb: 1,
    textDecoration: "underline",
  }),
  paragraphStyling: {
    lineHeight: "30px",
  },
  unorderedList: {
    listStyleType: "disc",
    marginLeft: "10px",
    paddingLeft: "10px",
    lineHeight: "30px",
  },
  subHeadings: (theme: any) => ({
    color: theme.palette.grey[800],
    mt: 4,
  }),
};
