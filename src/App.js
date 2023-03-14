import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './components/Home';
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import './theme/bootstrap.min.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => (
  <IonReactRouter>
    <IonRouterOutlet id="main">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/landing" />} />
        <Route exect path="/landing" component={Home} />
        <Route exect path="/Dashboard" component={Dashboard} />
        <Route exect path="/Details" component={Details} />
        {/* End of Book an appointment Routes */}
      </Switch>
    </IonRouterOutlet>
  </IonReactRouter>
);

export default App;
