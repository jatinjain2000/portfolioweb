import { PaperClipIcon } from '@heroicons/react/20/solid';
import Title from '../layouts/Title';
import { RESUMECDC } from "../../assets/index";

export default function Example() {
  return (
    <section id="resume">
      <div className="my-8">
        <div className="flex justify-center items-center text-center">
          <Title title="" des="My Resume" />
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 lgl:flex-row justify-center">
          <dt className="text-xl font-medium leading-6 text-white-900">Attachments:</dt>
          <dd className="mt-2 text-sm text-white-900 sm:col-span-2 sm:mt-0">
            <ul role="list" className="divide-y divide-white-100 rounded-md border border-white-200">
              <li className="flex flex-col sm:flex-row items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-white-400" aria-hidden="true" />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">Download Resume</span>
                    <span className="flex-shrink-0 text-white-400"></span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a href={RESUMECDC} download className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-white-400" aria-hidden="true" />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">View Resume</span>
                    <span className="flex-shrink-0 text-white-400"></span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a href={RESUMECDC} target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </div>
    </section>
  );
}
