import Footer from '@components/navigation/Footer';
import Navbar from '@components/navigation/Navbar';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const GeneralLayout = ({children}: Props) => {
  return (
    <div className="flex flex-col w-full antialiased">
      <Navbar />
      <div className="flex flex-col w-full min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
