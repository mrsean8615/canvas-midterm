
import { createContext } from 'react';
import { DeleteContent } from './components/common/DeleteContent';
import { DeleteUsers } from './components/common/deleteUsers';
import Router from './components/layout/Router';

const LoggedInContext = createContext(false)


function App() {

  return (
    <div>
      <Router />
      <p>heyo</p>
      <DeleteContent />
      <DeleteUsers />
    </div>

  )
}

export default App
