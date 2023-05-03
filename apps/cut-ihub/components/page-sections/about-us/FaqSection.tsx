/* eslint-disable react/no-unescaped-entities */
import CustomAccordion from '@components/custom-accordion/CustomAccordion';
import React from 'react';

function FaqSection() {
  const faqs = [
    {
      question: 'Who decides where/how Hub investment funds are spent?',
      answer:
        'A third-party investment committee/external to university will recommend investments.',
    },
    {
      question:
        'How is the Innovation Hub different from other programs/state offerings?',
      answer:
        'Very early stage technology commercialization funds are extremely limited in the WNY region. This is the most difficult money to raise because, as first money in, it has higher risks and takes longer to bring a return on investment. While there are some entrepreneur support programs currently at UB including Blackstone Launchpad entrepreneur center, NSF I-Corps Site Program and the Baird Technology Incubator, they are not at the scale necessary to provide the depth of outreach and support needed. UB’s incubators, especially wet lab space, is almost full and there is demand for additional space. This complements other programs in WNY and continues to build the entrepreneur ecosystem.',
    },
    {
      question: 'How do i join the innovation hub',
      answer:
        'You can apply through the main website contact page, then the directors will review your application and decide whether to call you or not',
    },
    {
      question: 'What happens after I contact the Innovation Hub?',
      answer:
        'Once we receive your email, our team in the Innovation Hub will work with experts across the different fields to help answer your questions by email, phone, or at an in-person meeting if appropriate. We aim to acknowledge all initial queries within two working days.',
    },
  ];

  return (
    <div className="flex flex-col bg-slate-100 mt-8">
      <div className="flex flex-col py-16 flex-1 max-w-7xl mx-auto w-full">
        <p className="text-center font-semibold text-slate-800 py-4">FAQs</p>
        <p className="text-center font-semibold text-2xl text-slate-800">
          Frequently asked questions
        </p>
        <p className="text-slate-400 text-center text-sm py-4">
          Have questions? We're here to help
        </p>

        <div className="flex flex-col space-y-2">
          {faqs.map((item, index) => (
            <CustomAccordion
              key={index}
              title={item.question}
              content={
                item.answer
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
