import React from "react";
import AuthorInfo from "./components/AuthorInfo";
import { userInfo } from "./utils/thread";

const App = () => {
  return (
    <>
      <AuthorInfo userInfo={userInfo} />
    </>
  );
};

const styles = {};

export default App;
