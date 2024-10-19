
import { DeleteUsers } from './components/common/deleteUsers';
import Router from './components/layout/Router';
import { LoggedProvider } from './context/IsLogged';
import { TrackUser } from './context/TrackUser';


function App() {

  return (
    <div>
      <TrackUser >
        <LoggedProvider>
        <div className='main-container'>
          <div className='main-view'>
            <Router />
          </div>
            <div className='debug-tools'>
              <p>Debug Tools</p>
              <DeleteUsers />
            </div>

          </div>

        </LoggedProvider>
      </TrackUser>


    </div>

  )
}

export default App
