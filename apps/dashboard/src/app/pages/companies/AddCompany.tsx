/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';
import BlueButton from '../../components/buttons/BlueButton';
import DashboardLayout from '../../layouts/DashboardLayout';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl';
import { getMessage } from '../../utils/getMessage';
import FileUploadComponent from '../../components/upload-component/FileUploadComponent';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { firebaseApp } from '../../config/firebase';
import TagsComponent from '../../components/tags/TagsComponent';
import { multipleImageUploader } from '../../helpers/multipleImageUploader';

type Props = {};

const AddCompany = (props: Props) => {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [picture, setPicture] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [site, setSite] = useState('');
  const [pictures_for_upload, setPicturesForUpload] = useState<any>([]);
  const [progress, setProgress] = useState<any>();
  const [urls, setURLs] = useState<any>([]);
  const [variations, setVariations] = useState<any>([]);

  // setting selected pictures to upload
  const selectedPictures = (pictures: any) => {
    setPicturesForUpload(pictures);
  };

  const toast = useToast();

  const storage = getStorage(firebaseApp);
  // storage ref for manually selected thumbnail

  // console.log(process.env.REACT_APP_API_URL);

  const selectedTags = (tags: any) => {
    setVariations(tags);
  };

  const add_company_Handler = async () => {
    setLoading(true);
    try {
      const promises: any = [];
      pictures_for_upload.map((file: any) => {
        console.log('loop');

        const sotrageRef = ref(storage, `${'companies'}/${file.name}`);

        const uploadTask = uploadBytesResumable(sotrageRef, file);
        promises.push(uploadTask);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (error) => console.log(error),
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURLs) => {
                setURLs((prevState: any) => [...prevState, downloadURLs]);
              }
            );
          }
        );
      });

      await Promise.all(promises);
      const { data } = await axios.post(`${apiUrl}/companies/create`, {
        name,
        phone,
        email,
        description,
        gallery: urls,
        location: address,
        site: site,
        nature_of_products: variations,
      });

      toast({
        title: 'Post created.',
        description: getMessage(data),
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast({
        title: 'Failed to post.',
        description: getMessage(error),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="py-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded md:p-8 p-4 mx-auto">
          <p className="text-gray-700 text-lg font-semibold text-center">
            Add a new company
          </p>

          <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Details
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      This information will be viewed by everyone who visits the
                      website.
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Company name <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="username"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            id="first-name"
                            autoComplete="first-name"
                            className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Company email <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email"
                            autoComplete="email"
                            className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Company Phone <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="phonne"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            id="phone"
                            autoComplete="phone"
                            className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Company address <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="address"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            id="address"
                            autoComplete="address"
                            className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Company Site{' '}
                        <span className="text-slate-600">(optional)</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="site"
                            onChange={(e) => setSite(e.target.value)}
                            value={site}
                            id="site"
                            autoComplete="site"
                            className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Nature Of Products{' '}
                        <span className="text-slate-600">(optional)</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <TagsComponent
                          selectedTags={selectedTags}
                          className=""
                        />
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Description <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <ReactQuill
                          theme="snow"
                          value={description}
                          onChange={setDescription}
                        />
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Company display picture{' '}
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <FileUploadComponent
                          selectedPictures={selectedPictures}
                          multiple
                        />
                        {/* {pictures_for_upload.length >= 1 && (
                          <div
                            onClick={upload_images}
                            className="flex bg-black hover:bg-slate-900 cursor-pointer text-white w-full p-2 rounded text-center"
                          >
                            <div className="w-full flex flex-row justify-center ml-auto">
                              <ArrowUpOnSquareIcon height={20} width={20} />
                              <p className="text-center w-full">
                                Upload Images
                              </p>
                            </div>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col">
            <BlueButton
              onClick={add_company_Handler}
              loading={loading}
              text={'Create Post'}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddCompany;
