/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Select } from '@chakra-ui/react';

export default function TagsComponent(props: {
  selectedTags: (arg0: any[]) => void;
  className: any;
}) {
  const [variations, setVariants] = useState<any>([]);
  const [variant_price, setVariantPrice] = useState<any>(0);
  const [variant_quantity, setVariantQuantity] = useState<any>(0);
  const [variant_name, setVarinatName] = useState<string>('');
  const [availability, setProductAvailability] = useState<any>('');

  const addTags = () => {
    setVariants([
      ...variations,
      {
        variant: variant_name,
        price: variant_price,
        countInStock: variant_quantity,
        availability: availability,
      },
    ]);
    props.selectedTags([
      ...variations,
      {
        variant: variant_name,
        price: variant_price,
        countInStock: variant_quantity,
        availability: availability,
      },
    ]);
    setVariantPrice(0);
    setVariantQuantity(0);
    setProductAvailability('');
    setVarinatName('');
  };

  const removeTags = (index: any) => {
    setVariants([
      ...variations.filter(
        (variation: any) => variations.indexOf(variation) !== index
      ),
    ]);
  };

  return (
    <div className="mt-4 mb-2">
      <div className={`${props.className} tags-input flex-col mb-4`}>
        <ul className="flex flex-col w-full pl-1">
          {
            <>
              {variations.length >= 1 && (
                <div className="grid grid-cols-4 border-b border-gray-200 pb-2 mb-2 gap-2 text-gray-700 text-sm capitalize font-semibold">
                  <p className="col-span-1">name</p>
                  <p className="col-span-1">Availability</p>
                  <p className="col-span-1">quantity</p>
                  <p className="col-span-1">delete</p>
                </div>
              )}
              {variations.map((tag: any, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-4 text-gray-400 text-sm gap-2"
                >
                  <p className="col-span-1">{tag.variant}</p>
                  <p className="col-span-1">{tag.availability}</p>
                  <p className="col-span-1">{tag.countInStock}</p>
                  <div className="flex">
                    <i
                      className="material-icons col-span-1 p-1 bg-gray-100 rounded-full"
                      onClick={() => removeTags(index)}
                    >
                      <XMarkIcon
                        width={16}
                        height={16}
                        className="cursor-pointer text-gray-700"
                      />
                    </i>
                  </div>
                </div>
              ))}
            </>
          }
        </ul>
      </div>
      <div className="col-span-6 mb-2">
        <label
          htmlFor="city"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Enter product name
        </label>
        <input
          type="text"
          name="name"
          value={variant_name}
          onChange={(e) => setVarinatName(e.target.value)}
          id="name"
          autoComplete="name"
          placeholder="e.g size or color"
          className="mt-1 block w-full outline-none sm:text-sm border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex flex-row items-center gap-8 mb-8">
        <div className="col-span-3 ">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-2   "
          >
            Availability
          </label>
          <Select
            placeholder="Availability"
            value={availability}
            onChange={(e) => setProductAvailability(e.target.value)}
          >
            <option value="available">Available</option>
            <option value="not-available">Not Available</option>
          </Select>
        </div>
        {availability === 'available' && (
          <div className="col-span-3 ">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Product quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={variant_quantity}
              //@ts-ignore
              onWheel={(e) => e.target.blur()}
              onChange={(e) => setVariantQuantity(e.target.value)}
              id="quantity"
              autoComplete="quantity"
              placeholder="e.g size or color"
              className="mt-1 block w-full outline-none sm:text-sm border border-gray-300 rounded-md p-2"
            />
          </div>
        )}
      </div>
      <div className="ml-auto w-full justify-end flex items-end">
        <div
          onClick={addTags}
          className="flex p-2 rounded font-semibold bg-black text-sm text-white hover:bg-slate-900"
        >
          Add
        </div>
      </div>
      {/* <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add more"
                className="outline-none p-2 rounded text-sm flex-1 w-full border border-gray-300 my-2"
            /> */}
    </div>
  );
}
