import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react';
import styles from "./custom.css";
import logo from "../assets/logo1.png";
import back from "../assets/back.svg";
import home from "../assets/home.svg";
import call from "../assets/call.svg";
import licence from "../assets/licence.svg";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Details = () => {
    const location = useLocation();
    const [data, setData] = useState(location.state.data)
    // useEffect(() => {
    //     debugger
    //     setData(location.)
    //    console.log(location.pathname); // result: '/secondpage'
    //    console.log(location.search); // result: '?query=abc'
    //    console.log(location.state.detail); // result: 'some_value'
    // }, [location]);
    return (
        <IonPage className={styles.home} >
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color="light">
                            <img src={back} alt="avatar" />
                        </IonButton>
                    </IonButtons>

                    <IonButtons slot="end">

                        <IonButton color="light">
                            <img src={back} alt="avatar" />
                            {/* <IonIcon icon={ellipsisHorizontal} /> */}
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <div className={styles.topHeader}></div>

                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
                            <IonCard className={styles.profileHeader}>
                                <IonCardContent>
                                    <IonRow style={{ marginTop: "20px" }}>
                                        <IonCol size="4">
                                            <img src={logo} alt="avatar" className={styles.avatar} />
                                        </IonCol>
                                        <IonCol size="8">
                                            <IonRow className={styles.profileInfo}>
                                                <IonCol size="12">
                                                    <IonText color="dark" className={styles.profileName}>
                                                        <p>{data.name}</p>
                                                    </IonText>
                                                    <IonText color="medium">
                                                        <p>{data.owner_name}</p>
                                                    </IonText>
                                                </IonCol>
                                            </IonRow>
                                            <IonRow className={styles.profileStats}>
                                                <IonCol className={styles.profileStat}>
                                                    <IonCardTitle>109</IonCardTitle>
                                                    <IonCardSubtitle>Followinig</IonCardSubtitle>
                                                </IonCol>

                                                <IonCol className={styles.profileStat}>
                                                    <IonCardTitle>1.2k</IonCardTitle>
                                                    <IonCardSubtitle>Followers</IonCardSubtitle>
                                                </IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                        <IonCol size="6">
                                            <IonButton fill="outline" expand="block">
                                                Message
                                            </IonButton>
                                        </IonCol>

                                        <IonCol size="6">
                                            <IonButton color='green' style={{ background: "#521550" }} expand="block">
                                                Follow
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow className={styles.profileStatusContainer}>
                        <IonCol size="12">
                            <IonCard className={styles.profileCard}>
                                <IonCardHeader>
                                    <IonRow className={styles.profileStatus}>
                                        {/* <IonIcon icon={chatboxEllipsesOutline} /> */}
                                        <img src={home} alt="avatar" style={{ width: "20px" }} />
                                        <IonCardSubtitle style={{ fontSize: "13px", fontWeight: "bold" }}>Address</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>{data.address}</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow style={{ marginTop: "15px" }}>
                        <IonCol size="6">
                            <IonCard className={styles.profileCard}>
                                <IonCardHeader>
                                    <IonRow className={styles.profileStatus}>
                                        <img src={call} alt="avatar" style={{ width: "20px" }} />
                                        <IonCardSubtitle style={{ fontSize: "13px", fontWeight: "bold" }}>Contact Info</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <div style={{display: "flex"}}>
                                        <span>Landline: </span><span>{data.phone}</span>
                                    </div>
                                    <div style={{display: "flex"}}>
                                        <span>Intercom: </span><span>{data.intercom}</span>
                                    </div>
                                    <div style={{display: "flex"}}>
                                        <span>Mobile: </span><span>{data.mobile}</span>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6">
                            <IonCard className={styles.profileCard}>
                                <IonCardHeader>
                                    <IonRow className={styles.profileStatus}>
                                        <img src={licence} alt="avatar" style={{ width: "20px" }} />
                                        <IonCardSubtitle style={{ fontSize: "13px", fontWeight: "bold" }}>D.L Number</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>{data.dl_number}</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};
export default Details;
