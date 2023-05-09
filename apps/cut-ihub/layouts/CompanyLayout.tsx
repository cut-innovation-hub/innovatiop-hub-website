/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import { Avatar, Button, useDisclosure } from "@chakra-ui/react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import GeneralLayout from "./GeneralLayout";
import { data } from "@utils/data";
import Image from "next/image";
import GridGallery from "@components/grid-gallery/GridGallery";
import { getFromArray } from "@helpers/arrayMethods";
import CustomAccordion from "@components/custom-accordion/CustomAccordion";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { useRouter } from "next/router";

type Props = {};

function CompanyLayout({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useRouter()
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState(`I'm interested in your company.`);
  const [loading, setLoading] = useState(false);

  const new_url = location.pathname.split("/");

  const company_dets = getFromArray(data.companies, new_url[2]);

  const send_message = async () => {
    try {
      setLoading(true);
      // do call logic here
      setLoading(false);
      setMessage("");
      setPhoneNumber("");
      setEmail("");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <GeneralLayout>
      <div className="min-h-screen bg-slate-100 pt-16">
        <div className="flex flex-col">
          <div className="relative bg-white  h-96 overflow-hidden">
            <Image
              src={company_dets.image}
              alt=""
              className=" h-96 object-cover w-full"
            />
            <div
              onClick={onOpen}
              className="absolute right-3 bottom-3 p-2 cursor-pointer bg-white shadow rounded-lg text-slate-700 font-semibold"
            >
              View Photos
            </div>
            <Modal size="6xl" isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Listing Images</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <GridGallery images={new Array(5).fill(company_dets.image)} />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>

          <div className="grid-companies max-w-7xl mx-auto w-full gap-8 py-16 px-2">
            <div className="col-span-2 flex flex-col space-y-8 pb-8">
              <div className="flex bg-white p-4 rounded-lg flex-col space-y-2">
                <p className="text-slate-900 capitalize font-semibold text-lg">
                  {company_dets.name}
                </p>
                <div className="flex flex-row space-x-1 text-slate-500">
                  <MapPinIcon height={20} width={20} />
                  <p>{company_dets.location}</p>
                </div>
              </div>
              <CustomAccordion
                title="Description"
                content={company_dets.summary}
              />
              <CustomAccordion
                title="Nature Of Products"
                content={
                  <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-2">
                    {company_dets.products?.map((item: any, index: number) => (
                      <FeatureComponent
                        key={index}
                        heading={item.name}
                        details={item.status}
                      />
                    ))}
                  </div>
                }
              />
              <CustomAccordion
                title="Location"
                content={
                  <>
                    <p className="text-center">Show On Map</p>
                  </>
                }
              />
              {/* <CustomAccordion title="Property Video" content={lorem} /> */}
              <CustomAccordion
                title="Gallery"
                content={
                  <div className="grid grid-cols-3 gap-2 rounded-lg overflow-hidden">
                    {[1, 2, 3, 4, 5, 6].map((item: any, index: number) => (
                      <div key={index} className="flex bg-slate-100">
                        <Image
                          src={company_dets.image}
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                }
              />
            </div>
            <div className="col-span-1 ">
              <div className="">
                <div className="flex flex-col bg-white sapce-y-2 rounded-lg">
                  <div className="bg-secondary-original p-4 rounded-t-lg flex flex-row items-center space-x-2">
                    <Avatar
                      src={company_dets.image}
                      bg={"white"}
                      name="First Team Propperties"
                    />
                    <div className="flex flex-col space-y-1">
                      <p className="text-white  font-semibold text-lg">
                        {company_dets.name}
                      </p>
                      <p className="text-white ">{"data.contact_info.phone"}</p>
                    </div>
                  </div>
                  <div className="flex p-4 flex-col space-y-6">
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-700 font-semibold border-none outline-none">
                        Email
                      </p>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-slate-100 rounded-lg p-2 text-lg"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-700 font-semibold border-none outline-none">
                        Phone
                      </p>
                      <input
                        type="text"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="bg-slate-100 rounded-lg p-2 text-lg"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-700 font-semibold border-none outline-none">
                        Message
                      </p>
                      <textarea
                        rows={5}
                        value={message}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="bg-slate-100 rounded-lg p-2 text-lg"
                        placeholder="Email"
                      />
                    </div>

                    <PrimaryButton text={"Send Message"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )
     } */}
      </div>
    </GeneralLayout>
  );
}



interface FeatureItemProps {
  heading: string;
  details: string;
}

const FeatureComponent = ({ heading, details }: FeatureItemProps) => {
  return (
    <div className="flex col-span-1 flex-row items-center">
      <p className="text-slate-700 font-semibold">
        {heading}:{" "}
        <span className="font-medium text-slate-400 text-sm">{details}</span>
      </p>
    </div>
  );
};

export default CompanyLayout;
