import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './custom.css';
import { useHistory, Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Home = () => {
  return (
    <IonContent>
      <div className="container-fluid nouch_device bg-theme h-100">
        <div className="row">
          <div class="d-flex justify-content-center bg-theme">
            <div class="col-md-6 col-sm-8 col-lg-4 px-1">
              <div className="text-center p-4 ">
              </div>
              <div className="text-center pt-4">
                <img src={logo} style={{width: "200px", borderRadius: "50px"}} className="w-70" alt="" />
                <p className="p-4 mb-5 p_wel bold" style={{fontWeight: "600px", fontSize: "22px", color: "white"}}>
                  Digiriccs
                </p>
                <Link
                  className="btn btn-primary px-5"
                  style={{color: "#521550", background: "white", fontWeight: "bold"}}
                  to="/Dashboard"                  
                >
                  Get Started
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default Home;
