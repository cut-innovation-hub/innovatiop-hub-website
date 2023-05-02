import { useNavigate } from "react-router-dom";

type Props = {
  item: any;
  pathname?: string;
};

function DashboardSidebarLink({ item, pathname }: Props) {
  const router = useNavigate();
  return (
    <div
      onClick={() => router(item.href)}
      key={item.name}
      className={`${
        pathname === item.href ? "bg-blue-900 " : "bg-blue-800 "
      } text-white hover:bg-blue-900 cursor-pointer group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
    >
      <item.icon
        className="mr-4 flex-shrink-0 h-6 w-6 text-white"
        aria-hidden="true"
      />
      {item.name}
    </div>
  );
}

export default DashboardSidebarLink;
