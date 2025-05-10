import React, { useEffect } from "react";
import Footer from "./Footer";
import Nabbar from "./Nabbar";

const Privacy = () => {

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <Nabbar />

      <div className="h-44 flex relative">
        <img
          src="/Blog-jpg/Our-Blog (2).jpg"
          className=" w-full object-cover"
        />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>Privacy / Policy</p>
        </div>
      </div>

      <div className="px-10 py-12 flex flex-col gap-4">
        <div className="py-6 flex flex-col gap-2">
          <span className="text-4xl font-bold text-indigo-800 ">
            Privacy Policy
          </span>
          <span>Effective date: November 28, 2018</span>

          <span className="text-gray-500 ">
            ACS ("us", "we", or "our") operates the website (the "Service").
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data. We use your data to
            provide and improve the Service. By using the Service, you agree to
            the collection and use of information in accordance with this
            policy.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-indigo-900">
            Information Collection And Use
          </span>
          <span>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-indigo-900">
            Types of Data Collected
          </span>
          <span className="font-semibold">Personal Data</span>
          <span className="text-gray-500 ">
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you ("Personal Data"). Personally identifiable information
            may include, but is not limited to:
          </span>

          <span className="text-gray-500 ">
            Email address First name and last name Phone number Address, State,
            Province, ZIP/Postal code, City Cookies and Usage Data
          </span>

          <span className="font-semibold">Usage Data</span>
          <span>
            We may also collect information how the Service is accessed and used
            ("Usage Data"). This Usage Data may include information such as your
            computer's Internet Protocol address (e.g. IP address), browser
            type, browser version, the pages of our Service that you visit, the
            time and date of your visit, the time spent on those pages, unique
            device identifiers and other diagnostic data.
          </span>
          <span className="font-semibold">Tracking & Cookies Data</span>
          <span>
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information. Cookies are
            files with small amount of data which may include an anonymous
            unique identifier. Cookies are sent to your browser from a website
            and stored on your device. Tracking technologies also used are
            beacons, tags, and scripts to collect and track information and to
            improve and analyze our Service. You can instruct your browser to
            refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use
            some portions of our Service. Examples of Cookies we use:
          </span>

          <div>
            <span className="font-semibold">Session Cookies.</span>
            <span>We use Session Cookies to operate our Service.</span>
          </div>

          <div>
            <span className="font-semibold">Preference Cookies.</span>
            <span>
              We use Preference Cookies to remember your preferences and various
              settings.
            </span>
          </div>

          <div>
            <span className="font-semibold">Security Cookies.</span>
            <span>We use Security Cookies for security purposes.</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Use of Data
          </span>

          <div className="flex flex-col">
            <span>ACS uses the collected data for various purposes:</span>
            <span>To provide and maintain the Service</span>
            <span>To notify you about changes to our Service</span>
            <span>
              To allow you to participate in interactive features of our Service
              when you choose to do so
            </span>
            <span>To provide customer care and support</span>
            <span>
              To provide analysis or valuable information so that we can improve
              the Service
            </span>
            <span>To monitor the usage of the Service</span>
            <span>To detect, prevent and address technical issues</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Security Of Data
          </span>
          <span>
            The security of your data is important to us, but remember that no
            method of transmission over the Internet, or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Service Providers
          </span>
          <span>
            We may employ third party companies and individuals to facilitate
            our Service ("Service Providers"), to provide the Service on our
            behalf, to perform Service-related services or to assist us in
            analyzing how our Service is used. These third parties have access
            to your Personal Data only to perform these tasks on our behalf and
            are obligated not to disclose or use it for any other purpose.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Analytics
          </span>
          <span>
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Google Analytics
          </span>
          <span>
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualize and personalize the ads of its own advertising
            network. You can opt-out of having made your activity on the Service
            available to Google Analytics by installing the Google Analytics
            opt-out browser add-on. The add-on prevents the Google Analytics
            JavaScript (ga.js, analytics.js, and dc.js) from sharing information
            with Google Analytics about visits activity. For more information on
            the privacy practices of Google, please visit the Google Privacy &
            Terms web page:
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Links To Other Sites
          </span>
          <span>
            Our Service may contain links to other sites that are not operated
            by us. If you click on a third party link, you will be directed to
            that third party's site. We strongly advise you to review the
            Privacy Policy of every site you visit. We have no control over and
            assume no responsibility for the content, privacy policies or
            practices of any third party sites or services.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Children's Privacy
          </span>
          <span>
            Our Service does not address anyone under the age of 18
            ("Children"). We do not knowingly collect personally identifiable
            information from anyone under the age of 18. If you are a parent or
            guardian and you are aware that your Children has provided us with
            Personal Data, please contact us. If we become aware that we have
            collected Personal Data from children without verification of
            parental consent, we take steps to remove that information from our
            servers.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Changes To This Privacy Policy
          </span>
          <span>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            We will let you know via email and/or a prominent notice on our
            Service, prior to the change becoming effective and update the
            "effective date" at the top of this Privacy Policy. You are advised
            to review this Privacy Policy periodically for any changes. Changes
            to this Privacy Policy are effective when they are posted on this
            page.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold text-indigo-900">
            Contact Us
          </span>
          <span>
            If you have any questions about this Privacy Policy, please contact
            us: By visiting this page on our website:
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
