import React from 'react';
import {Extendable} from "../../types";
import classnames from "classnames";

const Card = (props: Extendable) => {
  return (
    <div {...props} className={
      classnames(
        'inline-block px-6 py-4 drop-shadow-md transition-all bg-white rounded-lg',
        props.className
      )
    }>
      {props.children}
    </div>
  );
};

export default Card;