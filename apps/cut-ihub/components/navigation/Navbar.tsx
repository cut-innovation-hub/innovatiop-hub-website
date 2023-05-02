/* eslint-disable @typescript-eslint/ban-types */
// import logo from "../../public/logo.png";
import logo from '../../public/logo.png'
import { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { data } from '@utils/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SCROLL_POS = 100;

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useRouter();
  const { pathname } = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrollPosition >= SCROLL_POS
          ? `transition ease-in-out delay-150 bg-white duration-100 shadow `
          : `${pathname === '/' ? '' : 'bg-white'}`
      } fixed w-full z-50`}
    >
      <div className="flex flex-col w-full max-w-7xl mx-auto p-2 h-16 justify-center ">
        <div className="flex flex-row w-full items-center justify-between mx-auto flex-1">
          <Link
            href="/"
            className="flex text-white flex-col items-center pr-4 font-semibold text-xs"
          >
            <Image className="h-16 w-16" src={logo} alt="site logo" />
            {/* logo */}
            <p
              className={`${
                scrollPosition >= SCROLL_POS
                  ? 'text-slate-700 '
                  : `${pathname === '/' ? '' : 'text-gray-700'} text-white`
              }`}
            >
              {/* Innovation Hub */}
            </p>
          </Link>
          <div
            className={`${
              scrollPosition >= SCROLL_POS
                ? 'text-slate-700 '
                : `${pathname === '/' ? 'text-white ' : 'text-slate-700'}  `
            } md:flex hidden flex-row items-center space-x-8  capitalize`}
          >
            {data.nav_links.middle.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="flex cursor-pointer font-semibold"
              >
                {item.name}
              </Link>
            ))}
            <Menu isOpen={isOpen}>
              <MenuButton
                onClick={() => navigate.push('/companies')}
                className={`${
                  scrollPosition >= SCROLL_POS
                    ? 'text-slate-700 '
                    : `${pathname === '/' ? 'text-white ' : 'text-slate-700'}  `
                } md:flex hidden flex-row font-semibold items-center space-x-8  capitalize`}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <p className="font-semibold">Companies</p> {isOpen ? '' : ''}
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                {data.companies.map((item, index) => (
                  <MenuItem
                    onClick={() => navigate.push(`/companies/${item.value}`)}
                    className="flex flex-row justify-between text-slate-700 hover:bg-slate-100 items-center"
                    textColor={'gray-700'}
                    key={index}
                  >
                    {item.name} <ChevronRightIcon height={12} width={12} />
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>

          <Link
            href="/contact"
            className={`${
              scrollPosition >= SCROLL_POS
                ? 'text-primary-original  border-primary-original md:flex hidden hover:bg-primary-original hover:text-white  '
                : `${
                    pathname === '/'
                      ? ''
                      : 'border text-primary-original md:flex hidden border-primary-original hover:bg-primary-original hover:text-white '
                  } text-white md:flex hidden hover:text-primary-original`
            }flex  rounded-full border  px-3 py-1  cursor-pointer capitalize font-semibold`}
          >
            contact
          </Link>
          <div className="md:hidden flex mr-2">
            <Bars3Icon
              height={24}
              width={24}
              className={`${
                scrollPosition >= SCROLL_POS ? 'text-slate-900 ' : 'text-white '
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
