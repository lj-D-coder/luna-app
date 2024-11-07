import React from "react";
import Contact from './contact';

const AccountDelete = () => {
  return (
    <div className="container w-full md:w-2/3 bg-gray-100 p-6  rounded-lg my-20">
      <h1 className="text-4xl font-bold mb-4">
        Account Deletion Request
      </h1>
      <div className="p-4">
      <p className="mt-4 mb-4">
      To delete your Luna Naanna account and associated data, please use the <strong>Delete Account</strong> button available in the app’s <strong>Settings</strong> page.
      </p>
      <p className="mb-4">
      Once you initiate the deletion process, all your data will be permanently deleted within 15 days. If you wish to reactivate your account within this period, please contact our support team.
      </p>
      <p className="mb-4">
      For reactivation or assistance, reach out to us at <a href="mailto:support@lunanaanna.com">support@lunanaanna.com</a>.
      </p>
      </div>
      <Contact/>
    </div>
  );
};

export default AccountDelete;







