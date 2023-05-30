/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import DashboardLayout from '../../layouts/DashboardLayout';
import BlueButton from '../../components/buttons/BlueButton';
import { getMessage } from '../../utils/getMessage';
import { Progress, useToast } from '@chakra-ui/react';
import { apiUrl } from '../../utils/apiUrl';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Fragment, useState } from 'react';
import axios from 'axios';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes
} from 'firebase/storage';
import { firebaseApp } from '../../config/firebase';
import { generateId } from '../../helpers/generateId';

type Props = {};

const AddNews = (props: Props) => {
  const [description, setDescription] = useState('');
  const [heading, setHeading] = useState('');
  const [sub_heading, setSubHeading] = useState('');
  const [picture, setPicture] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<any>();
  const [upload_started, setUploadStarted] = useState(false);
  const [url, setURL] = useState('');

  const toast = useToast();

  const on_picture_select = (e: any) => {
    try {
      const id = generateId(10)
      // setPicture(e.target.files[0]);
      setUploadStarted(true);
      const storage = getStorage(firebaseApp);
      const sotrageRef = ref(storage, `${'news'}/${id}`)
      const uploadTask = uploadBytesResumable(sotrageRef, e.target.files[0]);
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
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
            setURL(downloadURLs);
          });
        }
      );
    } catch (error) {
      setUploadStarted(true);
      console.log(error);
    }
  };

  // console.log(url)

  const add_news = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/news/create`, {
        heading,
        sub_heading,
        main_pic: url,
        description
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
            Create a new blog post?
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
                        Heading <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="username"
                            onChange={(e) => setHeading(e.target.value)}
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
                        Sub-Heading <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="username"
                            onChange={(e) => setSubHeading(e.target.value)}
                            id="last-name"
                            autoComplete="last-name"
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
                        Select Post Picture{' '}
                        <span className="text-red-600">*</span>
                      </label>
                      {upload_started ? (
                        <Fragment>
                          {url ? (
                            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-col w-full">
                             <img src={url} alt="" className='h-96 w-96' />
                            </div>
                          ) : (
                            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-col w-full">
                              <p>Uploading...</p>
                              <Progress
                                hasStripe
                                size="sm"
                                value={progress}
                                className="w-full"
                              />
                            </div>
                          )}
                        </Fragment>
                      ) : (
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <div className="max-w-lg flex rounded-md shadow-sm">
                            <div className="mb-3">
                              <label
                                htmlFor="formFile"
                                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                              >
                                Media
                              </label>
                              <input
                                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                onChange={on_picture_select}
                                id="formFile"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col">
            <BlueButton
              onClick={add_news}
              loading={loading}
              text={'Create Post'}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddNews;
