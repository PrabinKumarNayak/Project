import { BrowserRouter } from 'react-router-dom';

import AppLayout from './app/AppLayout';
import AppRouting from './app/routes/AppRouting';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRouting />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
