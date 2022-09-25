import React from 'react';
import {Extendable} from "../../types";
import classnames from "classnames";

const Layout = (props: Extendable) => {
  return (
    <div {...props} className={classnames('h-[100vh] overflow-y-scroll px-12 pt-4', props.className)}>
      {props.children}
    </div>
  );
};

export default Layout;