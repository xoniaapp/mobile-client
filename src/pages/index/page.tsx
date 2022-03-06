import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DarkButton from '../../components/DarkButton/component';
import GreenButton from '../../components/RedButton/component';
import Seperator from '../../components/Seperator/component';
import './styling.css';

function signup() {
  window.location.href = '/pages/signup';
}

function signin() {
  window.location.href = '/pages/signin';
}

const Index: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p className="centered">Xonia</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="centered">
          <img src={`${process.env.PUBLIC_URL}/assets/img/mainlogo.png`} alt="" />
          <DarkButton text="Sign up" onClick={signup} />
          <Seperator size="4" />
          <GreenButton text="Sign in" onClick={signin} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Index;
