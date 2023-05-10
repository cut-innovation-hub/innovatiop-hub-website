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
} from '@chakra-ui/react'

interface AccordionProps {
  title: string;
  content?: any;
  delete_item_from_table?: any,
  _id: string
}

export default function CustomAccordion({ title, content, delete_item_from_table, _id }: AccordionProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  const [product_name, setProductName] = useState('')
    const [product_id, setProductId] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const confirm_delete_item = async (product_id: string) => {
    try {
      setLoading(true)
    //   const { data } = await axios.delete(
    //     `/api/products/delete?product_id=${product_id}`,
    //     {
    //       headers: {
    //         authorization: userInfo?.token,
    //       },
    //     }
    //   )
    //   console.log(data)
      delete_item_from_table(product_id)
      setLoading(false)
      onClose()
      toast({
        title: 'Sucesfully deleted.',
        description: 'Product successfully deleted!',
        status: 'success',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
      onClose()
      toast({
        title: 'Error Deleting item.',
        description: 'There was an error deleting the item!',
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  const set_delete_item = (id: string, name: string) => {
    onOpen()
    setProductId(id)
    setProductName(name)
  }

  return (
    <div className="shadow-sm cursor-pointer bg-white rounded-lg">
      <div
        onClick={toggleExpanded}
        className="px-6 text-left items-center h-20 select-none flex justify-between flex-row"
      >
        <h5 className="flex-1 text-slate-800 font-semibold">{title}</h5>
        <div className="flex-none pl-2">
          {expanded ? (
            <div className="flex">
              <span className="bg-slate-200 p-2 rounded-full">
                <ChevronUpIcon height={16} width={16} />
              </span>
            </div>
          ) : (
            <div className="flex">
              <span className="bg-slate-200 p-2 rounded-full">
                <ChevronDownIcon height={16} width={16} />
              </span>
            </div>
          )}
        </div>
      </div>
      <div
        className={`px-6 pt-0  overflow-hidden transition-[max-height] duration-200 ease-in ${
          expanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-4 text-left">{content}</p>
        <div className="flex flex-row mb-4 w-full space-x-4">
          <div onClick={() => set_delete_item(_id, _id)} className="bg-slate-100 p-2 rounded-full ml-auto">
            <TrashIcon height={20} width={20} className="text-red-600" />
          </div>
          <div className="bg-slate-100 p-2 rounded-full">
            <PencilIcon height={20} width={20} className="text-blue-600" />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalBody className="flex w-full  flex-col items-center ">
                  <TrashIcon
                    height={80}
                    width={80}
                    className="text-red-600 "
                  />
                  <p className="my-4 text-center text-lg font-semibold text-gray-800">
                    Delete
                  </p>
                  <p className="text-center">
                    Are you sure you want to delete faq?
                  </p>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={() => confirm_delete_item(product_id)}
                    colorScheme="red"
                    isLoading={loading}
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
    </div>
  );
}
