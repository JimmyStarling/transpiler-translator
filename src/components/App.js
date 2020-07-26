import React from 'react';

import AppLayout from './AppLayout';
import Store from '../store/Store';

function App() {
  return (
    <Store>
      <div className="App">
        <AppLayout/>
      </div>
    </Store>
  );
}

export default App;
