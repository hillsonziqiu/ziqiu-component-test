
## Btn

Demo:

```tsx
import React from 'react';
import { Btn } from 'fir';

export default () => {

  const handleClick = (e) => {
    alert('123')
    console.log(e)
  }

  return <Btn onClick={handleClick} />
};
```

