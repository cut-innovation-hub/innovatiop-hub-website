/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CompaniesTable from '../../components/tables/CompaniesTable';
import { Store } from '../../context/Store';
import DashboardLayout from '../../layouts/DashboardLayout';
import { data } from '../../utils/data';

type Props = {};

const PER_PAGE = 8;

const Companies = (props: Props) => {
  const history = useNavigate();
  const [search_query, setSearchQuery] = useState<string>('');
  const [products, setProducts] = useState<any>([]);
  // @ts-ignore
  const { state } = useContext(Store);
  const [page, setPage] = useState(1);
  const { ihub_user: userInfo } = state;
  const prod_page = page ? page : 1;

  // useEffect(() => {
  //   setProducts(all_products?.data)
  // }, [all_products])

  // console.log(products)
  const delete_item_from_table = (id: any) => {
    setProducts(products.filter((item: any) => item._id !== id));
  };
  return (
    <DashboardLayout>
      <div className="flex max-w-7xl flex-col py-8 px-2 mx-auto w-full">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="search..."
            className="border border-slate-200 flex-1 p-2 rounded"
          />
          <div className="flex bg-blue-800 hover:bg-blue-900 font-semibold cursor-pointer text-white items-center content-center p-2 rounded-lg">
            Add Company
          </div>
        </div>
        <Link to="/dashboard/create-company" className="py-8">
          <p className="text-slate-900 font-semibold text-lg pb-8">All Companies</p>
          <CompaniesTable
            products={data?.companies}
            PER_PAGE={PER_PAGE}
            delete_item_from_table={delete_item_from_table}
            data_info={products?.meta}
            setPage={setPage}
            page={page}
          />
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default Companies;
