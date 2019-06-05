import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '@/store/utils';
import { Actions as AC } from '@/views/Login/model';
import { CreateIndexHooks } from './model/hooks';

function Index(props) {
  const { num, add } = props;
  const { count, minus } = CreateIndexHooks();
  return (
    <div>
      <h3>redux</h3>
      <button onClick={add}>+++</button>
      <p>{num}</p>
      <h3>hooks</h3>
      <button onClick={minus}>---</button>
      <p>{count}</p>
    </div>
  );
}

export default connect(
  state => ({
    num: state.getIn(['login', 'num']),
  }),
  {
    add: AC.add,
  }
)(toJS(Index));
