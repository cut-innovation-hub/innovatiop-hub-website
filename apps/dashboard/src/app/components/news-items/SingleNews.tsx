/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  useToast,
} from '@chakra-ui/react';

interface Props {
  title: string;
  content?: any;
  delete_item_from_table?: any;
  _id: string;
}

const SingleNews = ({ title, content, delete_item_from_table, _id }: Props) => {
    
  const [product_name, setProductName] = useState('');
  const [product_id, setProductId] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  return <div></div>;
};

export default SingleNews;
