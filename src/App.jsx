
import { DeleteContent } from './components/common/DeleteContent';
import { DeleteUsers } from './components/common/deleteUsers';
import Router from './components/layout/Router';
import { LoggedProvider } from './context/IsLogged';


function App() {

  return (
    <div>
      <LoggedProvider>
      <div className='main-container'>
        <div className='main-view'>
          <Router />
        </div>
          <div className='debug-tools'>
            <p>Debug Tools</p>
            <DeleteContent />
            <DeleteUsers />
          </div>

        </div>

      </LoggedProvider>


    </div>

  )
}

export default App
