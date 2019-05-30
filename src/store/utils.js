import React from 'react';

import { Iterable } from 'immutable';
export const toJS = WC => Wcps => {
  const propsJS = Object.entries(Wcps).reduce((newProps, [key, val]) => {
    newProps[key] = Iterable.isIterable(val) ? val.toJS() : val;
    return newProps;
  }, {});
  return <WC {...propsJS} />;
};
