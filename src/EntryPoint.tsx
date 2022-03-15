import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Index from './pages/index/page';
import SignIn from './pages/signin/page';
import App from './pages/app/page';

// Core CSS required for Ionic components to work properly
import '@ionic/react/css/core.css';

// Basic CSS for apps built with Ionic
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Theme variables
import './theme/variables.css';

setupIonicReact();

const EntryPoint: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Index}></Route>
        <Route path="/pages/signin" component={SignIn}></Route>
        <Route path="/pages/signup">
         need sign up page a
        </Route>
        <Route path="/channels/:id" component={App}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default EntryPoint;
