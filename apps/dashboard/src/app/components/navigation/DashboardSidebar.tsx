import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CogIcon,
  XMarkIcon,
  HomeIcon,
  UserGroupIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import DashboardSidebarLink from "../links/DashboardSidebarLink";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: false },
  {
    name: "Companies",
    href: "/dashboard/companies",
    icon: UserGroupIcon,
    current: false,
  },
  { name: "News", href: "/dashboard/news", icon: MapIcon, current: false },

 
 
];
const secondaryNavigation = [
  { name: "Account Settings", href: "/password", icon: CogIcon },
];

interface Props {
  sidebarOpen: any;
  setSidebarOpen: any;
}

function DashboardSidebar({ sidebarOpen, setSidebarOpen }: Props) {
    const location = useLocation();
  const { pathname } = location;
  const router = useNavigate();

  return (
    <div className="h-screen bg-blue-800">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div
                onClick={() => router("/")}
                className="cursor pointer flex-shrink-0 flex items-center px-4"
              >
                <div className="relative self-center mx-auto h-32 w-32 my-4">
                  {/* <Image layout="fill" src={logo} alt="dashboard indicator of site name" /> */}
                  logo
                </div>
              </div>

              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-blue-dark overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <DashboardSidebarLink key={item.name} pathname={pathname} item={item} />
                  ))}
                </div>

                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <DashboardSidebarLink key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-blue-800 pt-5 pb-4 overflow-y-auto">
            <div
              onClick={() => router("/")}
              className="flex items-center flex-shrink-0"
            >
              <div className="relative py-2 h-40 self-center mx-auto">
                {/* <Image  objectFit="contain" src={logo} alt="dashboard indicator of site name" /> */}
                logo
              </div>
            </div>

            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-blue-dark overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <DashboardSidebarLink
                    key={item.name}
                    pathname={pathname}
                    item={item}
                  />
                ))}
              </div>

              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <DashboardSidebarLink
                      key={item.name}
                      pathname={pathname}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
