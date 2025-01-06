import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
const MFE1 = React.lazy(() => import('mfe1/MFE1'));
const MFE2 = React.lazy(() => import('mfe2/MFE2'));

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <div>
      <h1>Insurance App</h1>
      <MFE1 />
      <MFE2 />
    </div>
  </React.Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));
