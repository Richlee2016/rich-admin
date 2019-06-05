import { useState } from 'react';

export function CreateIndexHooks() {
  const [count, setCount] = useState(0);
  return {
    count,
    minus: () => setCount(count - 1),
  };
}
