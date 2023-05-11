/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

export const multipleImageUploader = (files: any[], storage: any, folder_name: string) => {
  const promises: any = [];
  const urls: string[] = [];
  files.map((file: any) => {
    console.log('loop');

    const sotrageRef = ref(storage, `${folder_name}/${file.name}`);

    const uploadTask = uploadBytesResumable(sotrageRef, file);
    promises.push(uploadTask);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgress(prog);
      },
      (error) => console.log(error),
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
          // setURLs(prevState => [...prevState, downloadURLs])
          urls.push(downloadURLs);
          console.log('File available at', downloadURLs);
        });
      }
    );
  });
  return {
    urls,
    promises,
  };
};
