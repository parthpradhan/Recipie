import React, { useContext } from "react";
import { AuthContext } from "./auth/auth";

const Welcome = () => {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : "";

  return <h2>{`Profile > ${currentUserEmail}`}</h2>;
};

export default Welcome;