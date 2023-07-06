import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Privacy = () => {
  return (
    <div className="bg-black text-white p-4">
      <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
      <p className="mb-4">
        We at DevComm ("we," "us," or "our") are committed to protecting the privacy and security of your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you access our website [Your Website URL] (the "Website") or use our program (the "Program").
      </p>
      <p className="mb-4">
        Please read this Privacy Policy carefully. By accessing the Website or using the Program, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
        If you do not agree with this Privacy Policy, please do not access the Website or use the Program.
      </p>
      <h3 className="text-xl font-bold mt-6">1. Information We Collect</h3>
      <h4 className="text-lg font-bold mt-4">1.1 Personal Information</h4>
      <p className="mb-4">
        We may collect personal information that you voluntarily provide to us, such as your name, email address, contact information, and any other information you provide when you register an account or communicate with us.
      </p>
      <h4 className="text-lg font-bold mt-4">1.2 Log Data</h4>
      <p className="mb-4">
        We may automatically collect certain information when you access the Website or use the Program.
        This information may include your IP address, browser type, operating system, referring URLs, pages viewed, and other browsing information.
        We may also collect information about your use of the Program, including your interactions, queries, and settings.
      </p>
      <h4 className="text-lg font-bold mt-4">1.3 Cookies and Similar Technologies</h4>
      <p className="mb-6">
        We may use cookies and similar tracking technologies to track and collect information about your activities on the Website and within the Program.
        Cookies are small files that a website or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the website's or service provider's systems to recognize your browser and capture and remember certain information.
      </p>
      <h3 className="text-xl font-bold mt-6">2. How We Use Your Information</h3>
      <h4 className="text-lg font-bold mt-4">2.1 Provide and Improve the Program</h4>
      <p className="mb-4">
        We may use the information we collect to provide and improve the Program, personalize your experience, and respond to your inquiries or requests.
        This may include analyzing usage trends, diagnosing technical issues, and enhancing the functionality and security of the Program.
      </p>
      <h4 className="text-lg font-bold mt-4">2.2 Communication</h4>
      <p className="mb-4">
        We may use your contact information to send you administrative or promotional communications, including updates, newsletters, and marketing materials related to the Program.
        You have the option to opt-out of receiving such communications.
      </p>
      <h4 className="text-lg font-bold mt-4">2.3 Aggregate Data</h4>
      <p className="mb-6">
        We may aggregate and anonymize the information we collect to generate statistical or other aggregated data for various purposes.
        This aggregated data will not personally identify you or any other user.
      </p>
      <h3 className="text-xl font-bold mt-6">3. How We Share Your Information</h3>
      <h4 className="text-lg font-bold mt-4">3.1 Service Providers</h4>
      <p className="mb-4">
        We may engage trusted third-party service providers to assist us in operating, maintaining, and improving the Website and Program.
        These service providers may have access to your personal information for performing tasks on our behalf and are obligated not to disclose or use it for any other purpose.
      </p>
      <h4 className="text-lg font-bold mt-4">3.2 Compliance with Laws</h4>
      <p className="mb-4">
        We may disclose your personal information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, prevent fraud, or act in urgent circumstances to protect the personal safety of users of the Website or the public.
      </p>
      <h4 className="text-lg font-bold mt-4">3.3 Business Transfers</h4>
      <p className="mb-6">
        In the event of a merger, acquisition, sale of assets, or bankruptcy, your personal information may be transferred to a successor entity or acquired by a third party.
        You acknowledge that such transfers may occur and that the transferee may continue to use your personal information as set forth in this Privacy Policy.
      </p>
      <h3 className="text-xl font-bold mt-6">4. Data Security</h3>
      <p className="mb-4">
        We implement reasonable security measures to protect the confidentiality and integrity of your personal information.
        However, no method of transmission or storage is completely secure.
        Therefore, we cannot guarantee the absolute security of your information.
      </p>
      <h3 className="text-xl font-bold mt-6">5. Children's Privacy</h3>
      <p className="mb-4">
        The Website and Program are not intended for children under the age of 13.
        We do not knowingly collect or solicit personal information from anyone under the age of 13.
        If you are under 13, please do not use the Website or Program or provide any personal information.
        If we learn that we have collected personal information from a child under 13 without parental consent, we will promptly delete that information.
      </p>
      <h3 className="text-xl font-bold mt-6">6. Third-Party Links</h3>
      <p className="mb-4">
        The Website or Program may contain links to third-party websites or services that are not owned or controlled by us.
        We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
        We encourage you to review the privacy policies of those third parties before providing any personal information or engaging in any transactions.
      </p>
      <h3 className="text-xl font-bold mt-6">7. Changes to the Privacy Policy</h3>
      <p className="mb-4">
        We reserve the right to modify this Privacy Policy at any time.
        Any changes will be effective immediately upon posting the updated Privacy Policy on the Website.
        Your continued use of the Website or Program after any such changes constitutes your acceptance of the revised Privacy Policy.
      </p>
      <h3 className="text-xl font-bold mt-6">8. Contact Us</h3>
      <p className="mb-6">
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@devcomm.app" className="text-blue-500">info@devcomm.app</a>.
        We will make reasonable efforts to address your inquiries in a timely manner.
      </p>
      <p className="text-sm">By accessing the Website or using the Program, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein.</p>
    </div>
  );
}

export default Privacy;
