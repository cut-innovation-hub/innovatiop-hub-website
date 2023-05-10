/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { ReactElement, useState, useContext } from 'react'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import moment from 'moment'
import Pagination from '../pagination/Pagination'
import { Store } from '../../context/Store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { data } from '../../utils/data'
// import {data} from '../../utils/da'

interface Props {
  products?: any
  delete_item_from_table?: any
  setPage?: any
  page?: any
  data_info: any
  PER_PAGE: number
}

const CompaniesTable = ({
    products,
    delete_item_from_table,
    setPage,
    page,
    data_info,
    PER_PAGE,
  }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [product_name, setProductName] = useState('')
    const [product_id, setProductId] = useState('')
    const router = useNavigate()
    const [loading, setLoading] = useState(false)
    const toast = useToast()
 
    // @ts-ignore
  const { state } = useContext(Store)
  const { ihub_user : userInfo } = state



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
    <div className="flex w-full flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="w-full overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black text-white">
                <tr>
                  <th
                    scope="col"
                    className="flex flex-row items-center space-x-2 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider "
                  >
                    <p> Name</p>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider "
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 flex flex-row items-cneter space-x-2 py-3 text-left text-xs font-medium uppercase tracking-wider "
                  >
                    <p>Email</p>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider "
                  >
                    site
                  </th>
                 
                  <th
                    scope="col"
                    className="px-6 flex flex-row items-center space-x-2 py-3 text-left text-xs font-medium uppercase tracking-wider "
                  >
                    <p>Date Created</p>
                    
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider "
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <>
                  {products?.map((product: any, index: number) => (
                    <>
                      <tr key={index}>
                        <td
                          className="whitespace-nowrap px-6 py-4"
                         
                        >
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={product.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="max-w-xs overflow-hidden text-sm font-medium text-gray-900">
                                {product.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {product.number}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {product.email}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {product.site}
                          </div>
                        </td>
                       
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {moment(product.createdAt).fromNow()}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <div className="flex flex-row items-center space-x-2">
                            <span
                              onClick={() =>
                                set_delete_item(product._id, product.name)
                              }
                              className="cursor-pointer"
                            >
                              <TrashIcon
                                height={20}
                                width={20}
                                className="text-red-400 "
                              />
                            </span>
                            <span
                              onClick={() =>
                                router(
                                  `/dashboard/inventory/edit/${product?._id}`
                                )
                              }
                              className="cursor-pointer"
                            >
                              <PencilIcon
                                height={20}
                                width={20}
                                className="cursor-pointer text-gray-500"
                              />
                            </span>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </>
              </tbody>
            </table>

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
                    Are you sure you want to delete company and all its contents?{' '}
                    {product_name}
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
        </div>
      </div>
      <>
        <Pagination
          className="flex self-center pt-8"
          onPageChange={(page: number) => setPage(page)}
          pageSize={PER_PAGE}
          totalCount={data_info?.total}
          currentPage={page}
        />
      </>
    </div>
  )
}

export default CompaniesTable