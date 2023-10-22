import { Navigation } from "../../components/nav";

export default function Projects() {
  return (
    <div className="bg-gradient-to-t from-blue-500 to-bg-black/20 pb-16 min-h-screen">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 mt-10 sm:mt-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Privacy Policy
          </h2>
          <p className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
            Effective Date: October 22, 2023
          </p>
          <p className="mt-4 text-zinc-300">
            This Privacy Policy is provided to inform you that we do not collect
            any user data when you use our mobile application, Rapid Dots. We
            are committed to ensuring your privacy, and you can use our app with
            the assurance that no personal or sensitive data is collected.
          </p>
          <ol className="list-decimal pl-5 mt-4">
            <li className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
              Introduction
              <p className="text-sm font-normal tracking-normal mt-4 text-zinc-300">
                This Privacy Policy applies to Rapid Dots, which is owned and
                operated by Blake Reimer, hereinafter referred to as "we," "us,"
                or "our." In this Privacy Policy, "you" refers to the user of
                our mobile application.
              </p>
            </li>
            <li className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
              Privacy Point of Contact
              <p className="text-sm font-normal tracking-normal mt-4 text-zinc-300">
                If you have any questions or concerns regarding your privacy or
                our privacy practices, please contact us at the following email
                address: sobeksea@gmail.com.
              </p>
            </li>
            <li className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
              Privacy Policy Labeling
              <p className="text-sm font-normal tracking-normal mt-4 text-zinc-300">
                This document serves as our official Privacy Policy and can be
                accessed in the Google Play Store listing page.
              </p>
            </li>
            <li className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
              Accessibility
              <p className="text-sm font-normal tracking-normal mt-4 text-zinc-300">
                Our Privacy Policy is accessible via a standard web browser
                without the need for any plugins or special handlers. It is
                provided in a format that is easily readable and comprehensible.
              </p>
            </li>
            <li className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
              Non-Editable
              <p className="text-sm font-normal tracking-normal mt-4 text-zinc-300">
                This Privacy Policy is non-editable. Any updates or changes to
                our policy will be reflected on the same URL and clearly dated.
              </p>
            </li>
            <li className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
              No Data Collection
              <p className="text-sm font-normal tracking-normal mt-4 text-zinc-300">
                We want to reassure you that we do not collect any personal or
                sensitive user data while you use Rapid Dots. Your privacy is of
                utmost importance to us.
              </p>
            </li>
            <li className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl mt-4">
              Changes to this policy
              <p className="text-sm font-normal tracking-normal mt-4 text-zinc-300">
                We may update this Privacy Policy from time to time. When we
                make changes, we will revise the "Effective Date" at the
                beginning of this policy. We encourage you to periodically
                review this policy to stay informed about how we are protecting
                your privacy.
              </p>
            </li>
          </ol>
          <p className="mt-4 text-zinc-300">
            By using Rapid Dots, you consent to the terms outlined in this
            Privacy Policy, which confirm that no user data is collected. Thank
            you for choosing Rapid Dots!
          </p>
          <p className="mt-4 text-zinc-300">Blake Reimer</p>
          <p className="text-zinc-300">sobeksea@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
