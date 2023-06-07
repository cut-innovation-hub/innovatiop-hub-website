/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, useDisclosure, useToast } from '@chakra-ui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import NewsModal from '../modals/NewsModal';
import BlueButton from '../buttons/BlueButton';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl';

interface NewsProps {
  date: any;
  news: string;
  picture: any;
  _id: string;
}

function VerticalNewsItem({ date, news, picture, _id }: NewsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalHeading, setModalHeading] = useState('');
  const [actionButton, setActionButton] = useState<ReactNode>();
  const [modalBody, setModalBody] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const make_headline_Handler = async () => {
    try {
      setLoading(true);
      await axios.post(`${apiUrl}/news/make-headline`, {
        id: _id,
      });
      toast({
        title: 'News  made headline',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const make_headline = () => {
    setModalHeading('Make news headline');
    setModalBody('Are your sure you want to make this post as headline?');
    setActionButton(
      <BlueButton
        text={'Proceed'}
        onClick={make_headline_Handler}
      />
    );
    onOpen();
  };

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
                  <span>
                    <EllipsisVerticalIcon height={16} width={16} />
                  </span>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => navigate(`/dashboard/edit-news/?id=${_id}`)}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem>View</MenuItem>
                  <MenuDivider />
                  <MenuItem>Publish</MenuItem>
                  <MenuItem onClick={make_headline}>make headline</MenuItem>
                  <MenuItem>Hide from blog</MenuItem>
                  <MenuDivider />
                  <MenuItem>Delete</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <NewsModal
        heading={modalHeading}
        body={modalBody}
        action_button={actionButton}
        isOpen={isOpen}
        loading={loading}
        onClose={onClose}
      />
    </div>
  );
}

export default VerticalNewsItem;
