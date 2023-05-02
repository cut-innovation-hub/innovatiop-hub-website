/* eslint-disable @typescript-eslint/ban-types */
import makena from "../../public/makena.jpeg";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";

type Props = {};

// eslint-disable-next-line no-empty-pattern
function HorizontalNewsItem({}: Props) {
  const navigate = useRouter()
  return (
    <div onClick={() => navigate.push('/single-news')} className="grid grid-cols-5 gap-4">
      <div className="col-span-2 overflow-hidden relative">
        <Image
          src={makena}
          alt=""
          className="w-full h-full absolute object-cover"
        />
      </div>
      <div className="flex col-span-3 flex-col">
        <div className="flex flex-row text-sm text-slate-500 pb-2 w-full justify-between">
          <p>Nov, 12 2022</p>
        </div>
        <Text noOfLines={2} className="text-lg font-semibold text-slate-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum
          ipsam cupiditate, corrupti nemo facere quo delectus natus odio sequi
          neque quam veniam dignissimos! Ea aut ad consequuntur illo similique.
        </Text>
      </div>
    </div>
  );
}

export default HorizontalNewsItem;
