import React from 'react';
import MessageBox from './MessageBox';

function App() {
  return (
    <div>
      <MessageBox variant="success">Operation completed successfully!</MessageBox>
      <MessageBox variant="danger">An error occurred. Please try again.</MessageBox>
      <MessageBox>Default info message</MessageBox>
    </div>
  );
}

export default App;
