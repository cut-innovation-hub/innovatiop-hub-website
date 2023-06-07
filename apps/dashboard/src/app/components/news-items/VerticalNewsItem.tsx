/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from '@chakra-ui/react';
import {
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';

interface NewsProps {
  date: any;
  news: string;
  picture: any;
  _id: string
}

function VerticalNewsItem({ date, news, picture, _id }: NewsProps) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col space-y-2 bg-white rounded-xl">
        <Link
          to="/dashboard/single-news"
          className="relative img h-40 w-full rounded-t-lg overflow-hidden bg-slate-100 "
        >
          <img src={picture} alt="News-Pic" className="object-cover" />
        </Link>
        <div className="flex flex-col p-4 ">
          <p className="text-xs text-slate-500">{date}</p>
          <Text
            noOfLines={3}
            className=" font-semibold text-lg text-primary-original"
          >
            {news}
          </Text>
          <div className="flex flex-row  self-end space-x-4 items-center">
           
            <div className="flex">
              <Menu>
                <MenuButton className="rounded-full p-2 hover:bg-slate-100">
                  <span >
                    <EllipsisVerticalIcon height={16} width={16} />
                  </span>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => navigate(`/dashboard/edit-news/?id=${_id}`)}>Edit</MenuItem>
                  <MenuItem>View</MenuItem>
                  <MenuDivider />
                  <MenuItem>Publish</MenuItem>
                  <MenuItem>make headline</MenuItem>
                  <MenuItem>Hide from blog</MenuItem>
                  <MenuDivider />
                  <MenuItem>Delete</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalNewsItem;
