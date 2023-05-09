/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
import { useToast } from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlueButton from '../../components/buttons/BlueButton';
import { getMessage } from '../../utils/getMessage';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl';
import { Store } from '../../context/Store';

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [show_password, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  // @ts-ignore
  const { dispatch } = useContext(Store);

  const history = useNavigate();

  const login_user_handler = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      setTimeout(() => {
        history('/dashboard');
      }, 1000);
      setLoading(false);
      toast({
        title: 'Login successful.',
        status: 'success',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      });
    } catch (error: any) {
      setLoading(false);
      //@ts-ignore
      toast({
        title: getMessage(error),
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 dark:bg-gray-800 py-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        {/* <img src={logo} alt="login page indicator of website" className="mx-auto self-center h-16 m-4" /> */}
        <h1 className="mt-2 text-center text-lg font-extrabold text-gray-900 dark:text-gray-200 md:text-3xl">
          Welcome back
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white dark:bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={login_user_handler}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="block w-full appearance-none text-gray-700 dark:text-gray-400 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none  sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="mt-1">
                <div className="flex flex-row items-center rounded-md border border-gray-300 dark:border-gray-600 px-3 shadow-sm ">
                  <input
                    id="password"
                    name="password"
                    type={show_password ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full appearance-none py-2 text-gray-700 dark:text-gray-400  placeholder-gray-400 focus:outline-none sm:text-sm"
                  />
                  {show_password ? (
                    <div onClick={() => setShowPassword(false)}>
                      <EyeSlashIcon
                        height={20}
                        width={20}
                        className="text-gray-400"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => setShowPassword(true)}
                      className="cursor-pointer"
                    >
                      <EyeIcon
                        height={20}
                        width={20}
                        className="text-gray-400"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div className="flex items-center">
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900 dark:text-white"
                >
                  <span
                    className=" text-green-600 font-semibold text-end"
                    onClick={() => history('/termsandconditions')}
                  >
                    forgot password
                  </span>
                </label>
              </div>
            </div>

            <div>
              <BlueButton
                text="Login"
                onClick={login_user_handler}
                className="w-full"
                loading={loading}
              />
            </div>
            <p
              onClick={() => history(`/register`)}
              className="my-4 cursor-pointer text-center text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-300"
            >
              Iam new here? Register instead!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
