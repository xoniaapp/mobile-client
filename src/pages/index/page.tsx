// UI related stuff
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../../components/Button/component';
import Seperator from '../../components/Seperator/component';
import Text from '../../components/Text/component';
import './styling.css';
import '../../globalClasses.css';

function signup() { window.location.href = '/pages/signup'; }

function signin() { window.location.href = '/pages/signin'; }

const Index: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><Text className="centered" text="Xonia" /></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="centered">
          <img src={`${process.env.PUBLIC_URL}/assets/img/mainlogo.png`} alt="" />
          <Button color="dark" text="Sign up" onClick={signup} />
          <Seperator size="4" />
          <Button color="red" text="Sign in" onClick={signin} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Index;
