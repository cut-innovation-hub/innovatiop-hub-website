/* eslint-disable react/no-unescaped-entities */
import CustomAccordion from '@components/custom-accordion/CustomAccordion'
import React from 'react'

function FaqSection() {
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
          {new Array(4).fill(4).map((item, index) => (
            <CustomAccordion
              key={index}
              title="Iam a question"
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit delectus voluptatibus earum ut sint reiciendis voluptates recusandae harum. Inventore, officia? Eum mollitia molestiae adipisci quia sed natus tenetur minima."
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection