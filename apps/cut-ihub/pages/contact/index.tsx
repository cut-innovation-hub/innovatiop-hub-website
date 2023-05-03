/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
import GeneralLayout from '@layouts/GeneralLayout';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/solid';
import { data } from '@utils/data';
import { ChatBubbleOvalLeftIcon, MapIcon } from '@heroicons/react/24/outline';
import icon from '../../public/icon.png';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import Image from 'next/image';

type Props = {};

const Contact = (props: Props) => {
  return (
    <GeneralLayout>
      <div className="flex flex-row mih-h-screen max-w-7xl py-32 w-full mx-auto px-2">
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="col-span-1 flex flex-col gap-12">
            <div className="flex flex-row items-center ">
              <Image src={icon} className="h-12 w-12" alt="Logo" />
              <p className="font-bold text-lg text-slate-900 ml-4">
                Innovation Hub
              </p>
            </div>
            <ContactItem
              icon={
                <ChatBubbleOvalLeftIcon
                  width={24}
                  height={24}
                  className="text-slate-600"
                />
              }
              heading="Chat with us"
              description="Our friendly team is here to help"
              contact_info={data.contact_info.email}
            />
            <ContactItem
              icon={
                <MapIcon width={24} height={24} className="text-slate-600" />
              }
              heading="Visit us"
              description="Come say hello at our office HQ"
              contact_info={data.contact_info.address}
            />
            <ContactItem
              icon={
                <PhoneIcon width={24} height={24} className="text-slate-600" />
              }
              heading="Call us"
              description="Monday-Friday 8am to 4pm"
              contact_info={data.contact_info.phone}
            />
            <div className="flex-1"></div>
            <div className="flex flex-row gap-4 ">
              <div className="border border-slate-200 rounded-lg p-3 text-slate-700">
                <FaFacebook height={16} width={16} />
              </div>
              <div className="border border-slate-200 rounded-lg p-3 text-slate-700">
                <IoLogoTwitter height={16} width={16} />
              </div>
              <div className="border border-slate-200 rounded-lg p-3 text-slate-700">
                <FaLinkedin height={16} width={16} />
              </div>
              <div className="border border-slate-200 rounded-lg p-3 text-slate-700">
                <AiFillInstagram height={16} width={16} />
              </div>
            </div>
          </div>
          <div className=" col-span-2 max-w-3xl">
            <div className="flex bg-[#FED7AA] h-full md:p-16 p-8 rounded-2xl flex-col space-y-4">
              <p className="text-3xl font-semibold text-slate-700 max-w-xl">
                Got idead? We've got the skills. Let's team up.
              </p>
              <p className="text-slate-700 font-semibold">
                Tell us more about yourself and what you have in mind.
              </p>
              <form className="pt-8">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-[#FED7AA] border border-slate-900 placeholder-slate-800"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-[#FED7AA] border border-slate-900 placeholder-slate-800"
                      placeholder="Doe"
                    />
                  </div>
                  
                 
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-[#FED7AA] border border-slate-900 placeholder-slate-800"
                    placeholder="john.doe@company.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tell us a little about your project
                  </label>
                  <textarea
                    id="email"
                    rows={5}
                    className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-[#FED7AA] border border-slate-900 placeholder-slate-800"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-slate-900 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

interface ContactItemProps {
  icon: any;
  heading: string;
  description: string;
  contact_info: string;
}

const ContactItem = (props: ContactItemProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex border border-slate-200 p-2 rounded-lg">
          {props.icon}
        </div>
      </div>
      <div className="flex flex-col px-4">
        <p className="font-bold text-slate-900">{props.heading}</p>
        <p className="text-sm text-slate-600">{props.description}</p>
        <div className="font-bold pt-3 text-slate-900 text-sm">
          <p>{props.contact_info}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
