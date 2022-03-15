// UI related stuff
import { IonContent, IonPage } from '@ionic/react';
import { Storage } from '@ionic/storage';
//import Button from '../../components/Button/component';
//import Seperator from '../../components/Seperator/component';
//import Text from '../../components/Text/component';
import account from '../../axios/account';
import './styling.css';
import '../../globalClasses.css';

const App: React.FC = (props: any) => {
  const storage = new Storage(); // for getting user credentials
  const UserCredentials = storage.get('UserCredentials'); // get user credentials

  let pageContents: any;

  if (props.match.params.id === 'me') {
    
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default App;
