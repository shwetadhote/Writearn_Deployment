import Head from "next/head";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardLink,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import styles from "./styles.module.css";

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Writearn</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="writearn.in" />
        <link rel="canonical" href="https://www.writearn.in/" />
      </Head>
      <Card className={styles.cardHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          Terms & Conditions
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            Contact Us
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
      <Container>
        <Card className={`fw-bold ${styles.cardBody}`} body>
          <CardTitle tag="h4">1. Introduction</CardTitle>
          <CardText>
            Welcome to writearn{"'"}s terms of services. Read these Terms of
            Services carefully as it will govern your use of our website located
            at <CardLink href="/">writearn.in</CardLink> operated by writearn.
          </CardText>
          <br />
          <CardText>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages.
          </CardText>
          <br />
          <CardText>
            Your agreement with us includes these Terms and our Privacy Policy.
            You acknowledge that you have read and understood Agreements, and
            agree to be bound by them.
          </CardText>
          <br />
          <CardText>
            If you do not agree with (or cannot comply with) Agreements, then
            you may not use the Service, but please let us know by emailing at{" "}
            <CardLink
              href="mailto:contact@writearn.in"
              target="__blank"
              className="fw-bold"
            >
              contact@writearn.in
            </CardLink>{" "}
            so we can try to find a solution. These Terms apply to all visitors,
            users and others who wish to access or use Service.
          </CardText>
          <br />
          <CardTitle tag="h4">2. Communications</CardTitle>
          <CardText>
            You may send and receive mails by e-mailing at{" "}
            <CardLink href="mailto:contact@writearn.in">
              <b>contact@writearn.in</b>
            </CardLink>
            .
          </CardText>
          <br />
          <CardTitle tag="h4">3. Content</CardTitle>
          <CardText>
            Our Service allows you to post, store, share certain information,
            text, graphics, videos, or other content. You are responsible for
            Content that you post on a website including its legality,
            reliability, and appropriateness.
          </CardText>
          <br />
          <CardText>
            By posting Content on or through Service, You represent and warrant
            that:
          </CardText>
          <br />
          <CardText>
            Content is yours /or you have the right to use it and the right to
            grant us the rights and license as provided in these Terms.
          </CardText>
          <br />
          <CardText>
            that the posting of your Content on or through Service does not
            violate the privacy rights, publicity rights, copyrights, contract
            rights or any other rights of any person or entity. We reserve the
            right to terminate the account of anyone found to be infringing on a
            copyright.
          </CardText>
          <br />
          <CardText>
            You retain any and all of your rights to any Content you submit,
            post or display on or through Service and you are responsible for
            protecting those rights. We take no responsibility and assume no
            liability for Content you or any third party posts on or through
            Service.
          </CardText>
          <br />
          <CardText>
            writearn has the right but not the obligation to monitor and edit
            all Content provided by users.
          </CardText>
          <br />
          <CardText>
            In addition, Content found on writearn is the property of writearn
            or used with permission. You may not distribute, modify, transmit,
            reuse, download, repost, copy, or use said Content, whether in whole
            or in part, for commercial purposes or for personal gain, without
            express advance written permission from us.
          </CardText>
          <br />
          <CardTitle tag="h4">4. Prohibited Uses</CardTitle>
          <CardText>
            0.1. In any way that violates any applicable national or
            international law or regulation.
          </CardText>{" "}
          <br />
          <CardText>
            0.2. For the purpose of exploiting, harming, or attempting to
            exploit or harm minors in any way by exposing them to inappropriate
            content or otherwise.
          </CardText>{" "}
          <br />
          <CardText>
            0.3. To transmit, or procure the sending of, any advertising or
            promotional material, including any “junk mail”, “chain letter,”
            “spam,” or any other similar solicitation.
          </CardText>{" "}
          <br />
          <CardText>
            0.4. To impersonate or attempt to impersonate Company, a Company
            employee, another user, or any other person or entity.
          </CardText>{" "}
          <br />
          <CardText>
            0.5. In any way that infringes upon the rights of others, or in any
            way is illegal, threatening, fraudulent, or harmful, or in
            connection with any unlawful, illegal, fraudulent, or harmful
            purpose or activity.
          </CardText>{" "}
          <br />
          <CardText>
            0.6. To engage in any other conduct that restricts or inhibits
            anyones use or enjoyment of Service, or which, as determined by us,
            may harm or offend Company or users of Service or expose them to
            liability.
          </CardText>{" "}
          <br />
          <CardText>Additionally, you agree not to:</CardText>
          <CardText>
            0.1. Use Service in any manner that could disable, overburden,
            damage, or impair Service or interfere with any other partys use of
            Service, including their ability to engage in real time activities
            through Service.
          </CardText>{" "}
          <br />
          <CardText>
            0.2. Use any robot, spider, or other automatic device, process, or
            means to access Service for any purpose, including monitoring or
            copying any of the material on Service.
          </CardText>{" "}
          <br />
          <CardText>
            0.3. Use any manual process to monitor or copy any of the material
            on Service or for any other unauthorized purpose without our prior
            written consent.
          </CardText>{" "}
          <br />
          <CardText>
            0.4. Use any device, software, or routine that interferes with the
            proper working of Service.
          </CardText>{" "}
          <br />
          <CardText>
            0.5. Introduce any viruses, trojan horses, worms, logic bombs, or
            other material which is malicious or technologically harmful.
          </CardText>{" "}
          <br />
          <CardText>
            0.6. Attempt to gain unauthorized access to, interfere with, damage,
            or disrupt any parts of Service, the server on which Service is
            stored, or any server, computer, or database connected to Service.
          </CardText>{" "}
          <br />
          <CardText>
            0.7. Attack Service via a denial-of-service attack or a distributed
            denial-of-service attack.
          </CardText>{" "}
          <br />
          <CardText>
            0.8. Take any action that may damage or falsify Company rating.
          </CardText>{" "}
          <br />
          <CardText>
            0.9. Otherwise attempt to interfere with the proper working of
            Service.
          </CardText>{" "}
          <br />
          <CardTitle tag="h4">5. Analytics</CardTitle>
          <CardText>
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
          </CardText>
          <br />
          <CardTitle tag="h4">6. No Use By Minors</CardTitle>
          <CardText>
            Service is intended only for access and use by individuals at least
            eighteen (18) years old. By accessing or using Service, you warrant
            and represent that you are at least eighteen (18) years of age and
            with the full authority, right, and capacity to enter into this
            agreement and abide by all of the terms and conditions of Terms. If
            you are not at least eighteen (18) years old, you are prohibited
            from both the access and usage of Service.
          </CardText>
          <br />
          <CardTitle tag="h4">7. Accounts</CardTitle>
          <CardText>
            When you create an account with us, you guarantee that you are above
            the age of 18, and that the information you provide us is accurate,
            complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on Service.
          </CardText>
          <br />
          <CardText>
            You are responsible for maintaining the confidentiality of your
            account and password, including but not limited to the restriction
            of access to your computer and/or account. You agree to accept
            responsibility for any and all activities or actions that occur
            under your account and/or password, whether your password is with
            our Service or a third-party service. You must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
          </CardText>
          <br />
          <CardText>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you,
            without appropriate authorization. You may not use as a username any
            name that is offensive, vulgar or obscene.
          </CardText>
          <br />
          <CardText>
            We reserve the right to refuse service, terminate accounts, remove
            or edit content, or cancel orders in our sole discretion.
          </CardText>
          <br />
          <CardTitle tag="h4">8. Intellectual Property</CardTitle>
          <CardText>
            Service and its original content (excluding Content provided by
            users), features and functionality are and will remain the exclusive
            property of writearn and its licensors. Service is protected by
            copyright, trademark, and other laws of and foreign countries. Our
            trademarks may not be used in connection with any product or service
            without the prior written consent of writearn.
          </CardText>
          <br />
          <CardTitle tag="h4">9. Copyright Policy</CardTitle>
          <CardText>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on Service
            infringes on the copyright or other intellectual property rights
            (“Infringement”) of any person or entity.
          </CardText>
          <br />
          <CardText>
            If you are a copyright owner, or authorized on behalf of one, and
            you believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement, please submit your claim via
            email to{" "}
            <CardLink href="mailto:contact@writearn.in">
              contact@writearn.in
            </CardLink>{" "}
            with the subject line: “Copyright Infringement” and include in your
            claim a detailed description of the alleged Infringement as detailed
            below, under “DMCA Notice and Procedure for Copyright Infringement
            Claims.
          </CardText>
          <br />
          <CardText>
            You may be held accountable for damages (including costs and
            attorneys fees) for misrepresentation or bad-faith claims on the
            infringement of any Content found on and/or through Service on your
            copyright.
          </CardText>
          <br />
          <CardTitle tag="h4">
            10. DMCA Notice and Procedure for Copyright Infringement Claims
          </CardTitle>
          <CardText>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our Copyright Agent with the
            following information in writing (see 17 U.S.C 512(c)(3) for further
            detail):
          </CardText>
          <br />
          <CardText>
            0.1. an electronic or physical signature of the person authorized to
            act on behalf of the owner of the copyright’s interest;
          </CardText>
          <br />
          <CardText>
            0.2. a description of the copyrighted work that you claim has been
            infringed, including the URL (i.e., web page address) of the
            location where the copyrighted work exists or a copy of the
            copyrighted work;
          </CardText>
          <br />
          <CardText>
            0.3. identification of the URL or other specific location on Service
            where the material that you claim is infringing is located;
          </CardText>
          <br />
          <CardText>
            0.4. your address, telephone number, and email address;
          </CardText>
          <br />
          <CardText>
            0.5. a statement by you that you have a good faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law;
          </CardText>
          <br />
          <CardText>
            0.6. a statement by you, made under penalty of perjury, that the
            above information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner’s
            behalf.
          </CardText>
          <br />
          <CardText>
            You can contact our Copyright Agent via email at{" "}
            <CardLink href="mailto:contact@writearn.in">
              contact@writearn.in
            </CardLink>
          </CardText>
          <CardTitle tag="h4">11. Error Reporting and Feedback</CardTitle>
          <CardText>
            You may provide us either directly at{" "}
            <CardLink href="mailto:contact@writearn.in">
              contact@writearn.in
            </CardLink>{" "}
            or via third party sites and tools with information and feedback
            concerning errors, suggestions for improvements, ideas, problems,
            complaints, and other matters related to our Service (“Feedback”).
            You acknowledge and agree that: (i) You shall not retain, acquire or
            assert any intellectual property right or other right, title or
            interest in or to the Feedback; (ii) Company may have development
            ideas similar to the Feedback; (iii) Feedback does not contain
            confidential information or proprietary information from you or any
            third party; and (iv) Company is not under any obligation of
            confidentiality with respect to the Feedback. In the event the
            transfer of the ownership to the Feedback is not possible due to
            applicable mandatory laws, you grant Company and its affiliates an
            exclusive, transferable, irrevocable, free-of-charge,
            sub-licensable, unlimited and perpetual right to use (including
            copy, modify, create derivative works, publish, distribute and
            commercialize) Feedback in any manner and for any purpose.
          </CardText>
          <br />
          <CardTitle tag="h4">12. Links To Other Websites</CardTitle>
          <CardText>
            Our Service may contain links to third party web sites or services
            that are not owned or controlled by Writearn.
          </CardText>
          <br />
          <CardText>
            Writearn has no control over, and assumes no responsibility for the
            content, privacy policies, or practices of any third party web sites
            or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
          </CardText>
          <br />
          <CardText>
            YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR
            LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
            ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON
            ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH
            THIRD PARTY WEB SITES OR SERVICES.
          </CardText>
          <br />
          <CardText>
            WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
            POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
          </CardText>
          <br />
          <CardTitle tag="h4">13. Disclaimer Of Warranty</CardTitle>
          <CardText>
            THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS
            AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF
            ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES,
            OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU
            EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND
            ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
          </CardText>
          <br />
          <CardText>
            NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY
            WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
            SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
            SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE
            ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES,
            THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED,
            THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT
            MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS
            OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </CardText>
          <br />
          <CardText>
            COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
            OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
            ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
            PARTICULAR PURPOSE.
          </CardText>
          <br />
          <CardText>
            WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
            POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
          </CardText>
          <br />
          <CardText>
            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
            EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
          </CardText>
          <br />
          <CardTitle tag="h4">14. Limitation Of Liability</CardTitle>
          <CardText>
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
            PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT
            ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES
            OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY,
            WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN
            AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR
            ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING
            WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE,
            ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL,
            STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF
            COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON
            THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE
            PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE
            CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE
            EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL
            DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
          </CardText>
          <br />
          <CardTitle tag="h4">15. Termination</CardTitle>
          <CardText>
            We may terminate or suspend your account and bar access to Service
            immediately, without prior notice or liability, under our sole
            discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of Terms.
          </CardText>
          <br />
          <CardText>
            If you wish to terminate your account, you may simply discontinue
            using Service.
          </CardText>
          <br />
          <CardText>
            All provisions of Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </CardText>
          <br />
          <CardTitle tag="h4">16. Governing Law</CardTitle>
          <CardText>
            These Terms shall be governed and construed in accordance with the
            laws of India, which governing law applies to agreement without
            regard to its conflict of law provisions.
          </CardText>
          <br />
          <CardText>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service and supersede and replace any prior agreements we might have
            had between us regarding Service.
          </CardText>
          <br />
          <CardTitle tag="h4">17. Changes To Service</CardTitle>
          <CardText>
            We reserve the right to withdraw or amend our Service, and any
            service or material we provide via Service, in our sole discretion
            without notice. We will not be liable if for any reason all or any
            part of Service is unavailable at any time or for any period. From
            time to time, we may restrict access to some parts of Service, or
            the entire Service, to users, including registered users.
          </CardText>
          <br />
          <CardTitle tag="h4">18. Amendments To Terms</CardTitle>
          <CardText>
            We may amend Terms at any time by posting the amended terms on this
            site. It is your responsibility to review these Terms periodically.
          </CardText>
          <br />
          <CardText>
            Your continued use of the Platform following the posting of revised
            Terms means that you accept and agree to the changes. You are
            expected to check this page frequently so you are aware of any
            changes, as they are binding on you.
          </CardText>
          <br />
          <CardText>
            By continuing to access or use our Service after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            Service.
          </CardText>
          <br />
          <CardTitle tag="h4">19. Waiver And Severability</CardTitle>
          <CardText>
            No waiver by Company of any term or condition set forth in Terms
            shall be deemed a further or continuing waiver of such term or
            condition or a waiver of any other term or condition, and any
            failure of Company to assert a right or provision under Terms shall
            not constitute a waiver of such right or provision.
          </CardText>
          <br />
          <CardText>
            If any provision of Terms is held by a court or other tribunal of
            competent jurisdiction to be invalid, illegal or unenforceable for
            any reason, such provision shall be eliminated or limited to the
            minimum extent such that the remaining provisions of Terms will
            continue in full force and effect.
          </CardText>
          <br />
          <CardTitle tag="h4">20. Acknowledgement</CardTitle>
          <CardText>
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
            THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
            THEM.
          </CardText>
          <br />
          <CardTitle tag="h4">21. Contact Us</CardTitle>
          <CardText>
            Please send your feedback, comments, requests for technical support
            by email:{" "}
            <CardLink href="mailto:contact@writearn.in">
              contact@writearn.in
            </CardLink>
          </CardText>
          <br />
        </Card>
      </Container>
    </>
  );
};

export default TermsAndConditions;
