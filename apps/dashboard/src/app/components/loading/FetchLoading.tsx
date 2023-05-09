/* eslint-disable @typescript-eslint/ban-types */
import { Spinner } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const FetchLoading = (props: Props) => {
  return (
    <div className=" w-full my-32 items-center grid justify-center content-center">
      <Spinner size={'xl'} />
    </div>
  );
};

export default FetchLoading;
