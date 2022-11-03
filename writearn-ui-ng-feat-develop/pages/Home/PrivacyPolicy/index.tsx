import Head from "next/head";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  Container,
  List,
  ListGroupItem,
} from "reactstrap";
import styles from "./styles.module.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Writearn</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="writearn.in" />
        <link rel="canonical" href="https://www.writearn.in/" />
      </Head>
      <Card className={styles.cardHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          Privacy Policy
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            Privacy Policy
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
      <Container>
        <Card body className={styles.cardBody}>
          <CardBody>
            <CardText tag="h6">
              At writearn.in, accessible from Writearn, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by writearn.in and how we use it.
            </CardText>
            <br />
            <CardText tag="h6">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us at{" "}
              <CardLink
                href="mailto:contact@writearn.in"
                target="__blank"
                className="text-secondary fw-bold"
              >
                contact@writearn.in
              </CardLink>
            </CardText>
            <br />
            <CardText tag="h6">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in writearn.in. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </CardText>
            <br />
            <CardTitle tag="h4">Consent</CardTitle>
            <CardText tag="h6">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </CardText>
            <br />
            <CardTitle tag="h4">Information we collect</CardTitle>
            <CardText tag="h6">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </CardText>
            <br />
            <CardText tag="h6">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </CardText>
            <br />
            <CardText tag="h6">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </CardText>
            <br />
            <CardTitle tag="h4">How we use your information</CardTitle>
            <CardText tag="h6">
              We use the information we collect in various ways, including to:
            </CardText>
            <br />
            <List tag="h6">
              <ListGroupItem>
                Provide, operate, and maintain our website
              </ListGroupItem>
              <ListGroupItem>
                Improve, personalize, and expand our website
              </ListGroupItem>
              <ListGroupItem>
                Understand and analyze how you use our website
              </ListGroupItem>
              <ListGroupItem>
                Develop new products, services, features, and functionality
              </ListGroupItem>
              <ListGroupItem>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </ListGroupItem>
              <ListGroupItem>Send you emails</ListGroupItem>
              <ListGroupItem>Find and prevent fraud</ListGroupItem>
            </List>
            <br />
            <CardTitle tag="h4">Log Files</CardTitle>
            <CardText tag="h6">
              writearn.in follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users movement on the
              website, and gathering demographic information.
            </CardText>
            <br />
            <CardTitle tag="h4">Cookies and Web Beacons</CardTitle>
            <CardText tag="h6">
              Like any other website, writearn.in uses cookies. These cookies
              are used to store information including visitors preferences, and
              the pages on the website that the visitor accessed or visited. The
              information is used to optimize the users experience by
              customizing our web page content based on visitors browser type
              and/or other information.
            </CardText>
            <br />
            <CardTitle tag="h4">Google DoubleClick DART Cookie</CardTitle>
            <CardText tag="h6">
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to{" "}
              <CardLink href="https://www.website.com/">
                www.website.com
              </CardLink>{" "}
              and other sites on the internet. However, visitors may choose to
              decline the use of DART cookies by visiting the Google ad and
              content network Privacy Policy at the following URL {"–"}{" "}
            </CardText>
            <br />
            <CardTitle tag="h4">Our Advertising Partners</CardTitle>
            <CardText tag="h6">
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below.
            </CardText>
            <br />
            <List tag="h6">
              <ListGroupItem>
                <CardText tag="h6">Google</CardText>
                <CardText></CardText>
              </ListGroupItem>
            </List>
            <br />
            <CardTitle tag="h6">
              Advertising Partners Privacy Policies
            </CardTitle>
            <CardText tag="h6">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of{" "}
              <CardLink href="/">writearn.in</CardLink>.
            </CardText>
            <br />

            <CardText tag="h6">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on{" "}
              <CardLink href="/">writearn.in</CardLink>, which are sent directly
              to users browser. They automatically receive your IP address when
              this occurs. These technologies are used to measure the
              effectiveness of their advertising campaigns and/or to personalize
              the advertising content that you see on websites that you visit.
            </CardText>
            <br />
            <CardText tag="h6">
              Note that <CardLink href="/">writearn.in</CardLink> has no access
              to or control over these cookies that are used by third-party
              advertisers.
            </CardText>
            <br />
            <CardTitle tag="h4">Third Party Privacy Policies</CardTitle>
            <CardText tag="h6">
              Writearn.in Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.{" "}
            </CardText>
            <br />
            <CardText tag="h6">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers
              respective websites.
            </CardText>
            <br />
            <CardTitle tag="h6">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </CardTitle>
            <CardText tag="h6">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </CardText>
            <br />
            <CardText tag="h6">
              Request that a business that collects a consumers personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </CardText>
            <br />
            <CardText tag="h6">
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </CardText>
            <br />
            <CardText tag="h6">
              Request that a business that sells a consumers personal data, not
              sell the consumers personal data.
            </CardText>
            <br />
            <CardText tag="h6">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </CardText>
            <br />
            <CardTitle tag="h4">GDPR Data Protection Rights</CardTitle>
            <CardText tag="h6">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </CardText>
            <br />
            <CardText tag="h6">
              The right to access {"–"} You have the right to request copies of
              your personal data. We may charge you a small fee for this
              service.
            </CardText>
            <br />
            <CardText tag="h6">
              The right to rectification {"–"} You have the right to request
              that we correct any information you believe is inaccurate. You
              also have the right to request that we complete the information
              you believe is incomplete.
            </CardText>
            <br />
            <CardText tag="h6">
              The right to erasure {"–"} You have the right to request that we
              erase your personal data, under certain conditions.
            </CardText>
            <br />
            <CardText tag="h6">
              The right to restrict processing {"–"} You have the right to
              request that we restrict the processing of your personal data,
              under certain conditions.
            </CardText>
            <br />
            <CardText tag="h6">
              The right to object to processing {"–"} You have the right to
              object to our processing of your personal data, under certain
              conditions.
            </CardText>
            <br />
            <CardText tag="h6">
              The right to data portability {"–"} You have the right to request
              that we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </CardText>
            <br />
            <CardText tag="h6">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </CardText>
            <br />
            <CardTitle tag="h4">Childrens Information</CardTitle>
            <CardText tag="h6">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </CardText>
            <br />
            <CardText tag="h6">
              <CardLink href="/">writearn.in</CardLink> does not knowingly
              collect any Personal Identifiable Information from children under
              the age of 13. If you think that your child provided this kind of
              information on our website, we strongly encourage you to contact
              us immediately and we will do our best efforts to promptly remove
              such information from our records.
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
