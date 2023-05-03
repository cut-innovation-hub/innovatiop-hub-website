/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../context/Store";

interface Props {
  Component: any;
}

const AuthRoute = ({ Component }: Props) => {
  // @ts-ignore
  const { state } = useContext(Store);
  const { ihub_user } = state;

  return ihub_user ? Component : <Navigate to={`/`} />;
};

export default AuthRoute;