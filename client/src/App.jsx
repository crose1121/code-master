import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from './components/views/Home';
import Equipment from './components/views/Equipment-Select';
import WeaponView from './components/views/Weapons';
import ArmorView from './components/views/Armor';
import CharmView from './components/views/Charms'
import WeaponDetails from './components/views/Details/WeaponDetails';
import ArmorDetails from './components/views/Details/ArmorDetails';
import CharmDetails from './components/views/Details/CharmDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link className='mainLink' to={'/'}>home</Link>
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/equip_select'}>
            <Equipment />
          </Route>
          <Route exact path={'/weapons/:weapon_type'}>
            <WeaponView />
          </Route>
          <Route exact path={'/armors/:armor_type'}>
            <ArmorView />
          </Route>
          <Route exact path={'/charms'}>
            <CharmView />
          </Route>
          <Route exact path={'/weapon/:equipment'}>
            <WeaponDetails />
          </Route>
          <Route exact path={'/armor/:equipment'}>
            <ArmorDetails />
          </Route>
          <Route exact path={'/charm/:equipment'}>
            <CharmDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;