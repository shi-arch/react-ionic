import React, { useEffect, useState } from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { useHistory } from "react-router-dom";
const data = [
  {
    "id": 1,
    "name": "A.B.C. Pharmaceuticals",
    "address": "3507, Street No-14, New Shiva Ji Nagar, Ludhiana",
    "owner_name": "Sushil Kumar Bajaj",
    "phone": "5045534",
    "mobile": "",
    "intercom": "4212",
    "dl_number": "20B-18841 OW, 21B-18639W"
  },
  {
    "id": 2,
    "name": "A.G. Enterprises",
    "address": "216, Mohar Singh Nagar, Ludhiana",
    "owner_name": "Gurpreet Singh, Tajinder Singh",
    "phone": "5024643",
    "mobile": "98884-0022",
    "intercom": "4643",
    "dl_number": "20B-14208 OW, 21B-14025 W"
  },
  {
    "id": 3,
    "name": "A.P. Medical Store",
    "address": "32, lind Floor, Takkar Complex, Pindi Street, Ludhiana",
    "owner_name": "Pardeep Goyal, Vaneet Goyal",
    "phone": "5050554",
    "mobile": "98148-5349",
    "intercom": "4554",
    "dl_number": "20B-18542 OW, 21B-18340 W"
  },
  {
    "id": 4,
    "name": "A.S. Medicos",
    "address": "Shop No. 22, 1st Floor, Panch Rattan Complex, Pindi Street, Ludhiana",
    "owner_name": "Rainish Kumar",
    "phone": "",
    "mobile": "98787-21268",
    "intercom": "",
    "dl_number": "20B-20754 OW, 21B-20551 W"
  },
  {
    "id": 5,
    "name": "Adarsh Medical Hall",
    "address": "Pindi Street, Ludhiana",
    "owner_name": "Ramesh Miglani",
    "phone": "2726417",
    "mobile": "98764-07684",
    "intercom": "",
    "dl_number": "20-B 7741 OW, 21-B 7517W"
  },
  {
    "id": 6,
    "name": "Adarsh Pharma Distributors",
    "address": "4, Ist Floor, Luxmi Market, Pindi Street, Ludhiana",
    "owner_name": "Rakesh Jindal, Surinder Singh",
    "phone": "5010341",
    "mobile": "98884-85356",
    "intercom": "524",
    "dl_number": "20B-14069 OW, 21B-13886 W"
  },
  {
    "id": 7,
    "name": "Aggarwal Agencies",
    "address": "Shop No-4, Basement National Plaza Complex, Pindi Street, Ludhiana",
    "owner_name": "Jaswant Aggarwal",
    "phone": "5057378",
    "mobile": "92176-96991",
    "intercom": "7378",
    "dl_number": "20B-15550 OW, 21B-15362W"
  },
  {
    "id": 8,
    "name": "Aggarwal Enterprises",
    "address": "35 lst Floor, Friends Complex, Pindi Street, Ludhiana",
    "owner_name": "Rekha Aggarwal",
    "phone": "2720802, 5013802",
    "mobile": "99141-13802",
    "intercom": "459",
    "dl_number": "20-B-17484 OW, 21-B-17285 W"
  },
  {
    "id": 9,
    "name": "Aggarwal Medicos",
    "address": "Pindi Street, Ludhiana",
    "owner_name": "Rajesh Aggarwal",
    "phone": "2726028, 5059082",
    "mobile": "",
    "intercom": "467",
    "dl_number": "20B-14943 OW, 21B-14758 W"
  },
  {
    "id": 10,
    "name": "Aggarwal Vaccines House",
    "address": "Shop No-34, Friends Complex, Ist Floor, Pindi Street, Ludhiana",
    "owner_name": "Rekha Aggarwal",
    "phone": "5013802",
    "mobile": "98147-77694, 99141-13802",
    "intercom": "459",
    "dl_number": "20-B-18807 OW, 21-B-18605 W"
  },
  {
    "id": 11,
    "name": "Ajay Enterprises",
    "address": "270-Model Gram, Malwa School Road, Ludhiana",
    "owner_name": "Ajay Gupta",
    "phone": "2772584",
    "mobile": "99888-40584",
    "intercom": "",
    "dl_number": "20B-11552-OW, 21B-11297-W"
  },
  {
    "id": 12,
    "name": "Allied Pharma",
    "address": "Shop No. 19, G.S. Complex, Pindi Street, Ludhiana",
    "owner_name": "Ashwani Juneja, Gaurav Juneja (Ram)",
    "phone": "5010854",
    "mobile": "98155-00854",
    "intercom": "8879",
    "dl_number": "20B-20249 OW, 21B-20047W"
  },
  {
    "id": 13,
    "name": "Aman Enterprises",
    "address": "Shop No-5 (Basement), V.T. Complex, Pindi Street, Ludhiana",
    "owner_name": "Aman Syal",
    "phone": "5036874",
    "mobile": "",
    "intercom": "502",
    "dl_number": "20B-20161 OW, 21B-19957W"
  },
  {
    "id": 14,
    "name": "Amar Medical Agencies",
    "address": "Pindi Street, Ludhiana",
    "owner_name": "Amar Singh",
    "phone": "5034107, 2726416",
    "mobile": "",
    "intercom": "573",
    "dl_number": "20B-15194 OW, 21B-15009 W"
  },
  {
    "id": 15,
    "name": "Amit Medicos",
    "address": "Saheed Bhagat Singh Nagar, Near Joseph School, Dugri, Ludhiana",
    "owner_name": "Amit Gupta",
    "phone": "2406616, 2405165, 5036616",
    "mobile": "",
    "intercom": "",
    "dl_number": "20B-20183 OW, 21B-19978 W"
  },
  {
    "id": 16,
    "name": "Amit Pharma Distributors",
    "address": "Saheed Bhagat Singh Nagar, Near Joseph School, Dugri, Ludhiana",
    "owner_name": "Jiwan Gupta",
    "phone": "5010554, 5036616",
    "mobile": "",
    "intercom": "",
    "dl_number": ",20B-20182 OW, 21B-19978W"
  },
  {
    "id": 17,
    "name": "Amrit Jiwan Pharmacy",
    "address": "Pindi Street, Ludhiana",
    "owner_name": "Raiesh Sood, Gautam Sood",
    "phone": "2726437, 5054126",
    "mobile": "98155-42182",
    "intercom": "417",
    "dl_number": "20B-10721 OW, 21B-10474 W"
  },
  {
    "id": 18,
    "name": "Amrit Medicos",
    "address": "620 Ist Floor, Sadar Bazar, Pindi Street, Ludhiana",
    "owner_name": "Kuldeep S. Khurana , Manjeet S. Khurana",
    "phone": "5047322, 5094242",
    "mobile": "98766-55131",
    "intercom": "816, 4242",
    "dl_number": "20B-18028 OW, 21B-17826 W"
  },
  {
    "id": 19,
    "name": "Anand Enterprises",
    "address": "7 V.T. Complex, Pindi Street, Ludhiana",
    "owner_name": "Vineet Anand",
    "phone": "5052740, 2726010 ",
    "mobile": "",
    "intercom": "408",
    "dl_number": "20B-15023 OW, 21B-14838 W"
  },
  {
    "id": 20,
    "name": "Anand Medicos",
    "address": "Ranjit Complex, Ist Floor, Shop No-7, Pindi Street, Ludhiana",
    "owner_name": "Jatin Malhotra",
    "phone": "5036108",
    "mobile": "98721-30108",
    "intercom": "6108",
    "dl_number": "20B-20221 OW, 21B-20017 W"
  },
  {
    "id": 21,
    "name": "Anmol Medi Shop",
    "address": "Shop No-40, Ist Floor, National Plaza, Pindi Street, Ludhiana ",
    "owner_name": "Amit Munjal, Shekhar Munjal",
    "phone": "5013683",
    "mobile": "98140-12683",
    "intercom": "8684",
    "dl_number": "20B-19578 OW, 21B-19376 W"
  },
  {
    "id": 22,
    "name": "Annpurna Enterprises",
    "address": "B-VIL 398, Dr. Saggar Market, Ludhiana",
    "owner_name": "Maninder Singh, Nishant Arora",
    "phone": "5065999, 2762601",
    "mobile": "98151-59420",
    "intercom": "601, 2601",
    "dl_number": "20-B 18608 OW, 21-B 18406 W"
  },
  {
    "id": 23,
    "name": "Arjun Medicos",
    "address": "Pindi Street, Ludhiana",
    "owner_name": "Bhupinder Singh, Taranjit Singh (Sadhu)",
    "phone": "5087847, 5034358",
    "mobile": "97797-00537",
    "intercom": "847, 4358",
    "dl_number": "20B-15854 OW, 21B-15664 W"
  },
  {
    "id": 24,
    "name": "Armaan Pharma Distributors",
    "address": "Pindi Street, Ludhiana",
    "owner_name": "Sanjeev Kumar, Ajay Kumar",
    "phone": "2726110, 5086110",
    "mobile": "",
    "intercom": "617",
    "dl_number": "20B-16570 OW, 21B-16374 W"
  },
  {
    "id": 25,
    "name": "Arora Medical Agencies",
    "address": "Pindi Street, Ludhiana ",
    "owner_name": "Pawan Arora",
    "phone": "2726384, 5034384",
    "mobile": "",
    "intercom": "497",
    "dl_number": "20B-5453 OW, 21B-5233 W"
  },
  {
    "id": 26,
    "name": "Arora Medicos",
    "address": "Shop No-8, G.S. Complex, Pindi Street, Ludhiana",
    "owner_name": "Satish Arora, Sonu Arora, Sunny Arora",
    "phone": "5036847",
    "mobile": "99145-00693",
    "intercom": "7847, 6847",
    "dl_number": "20B-18593 OW, 21B-18391 W"
  },
  {
    "id": 27,
    "name": "Arora Pharmacy",
    "address": "Mahmohan Market, Pindi Street, Ludhiana",
    "owner_name": "Arun Kumar",
    "phone": "5010349",
    "mobile": "98143-04858",
    "intercom": "539",
    "dl_number": "20B-10495 OW, 21B-10251 W"
  },
  {
    "id": 28,
    "name": "Arpan Enterprises",
    "address": "Shop No-111, Duggal Complex, Pindi Street, Ludhiana",
    "owner_name": "Raj Chopra",
    "phone": "5088420",
    "mobile": "98726-94420",
    "intercom": "422, 720",
    "dl_number": "20B-16304 OW, 21B-16109 W"
  },
  {
    "id": 29,
    "name": "Aruna Agencies",
    "address": "B-VII, 264, Classic Complex, Pindi Street, Ludhiana",
    "owner_name": "Rajeev Soi, Varun Soi",
    "phone": "5035010, 2726142",
    "mobile": "98156-03500",
    "intercom": "5010",
    "dl_number": "20B-10435 OW, 21B-10189 W"
  },
  {
    "id": 30,
    "name": "Ashwani Medicaments",
    "address": "Manmoham Market, Pindi Street, Ludhiana",
    "owner_name": "Ashwani Kumar, Kamal Soni",
    "phone": "5024249",
    "mobile": "9915728456",
    "intercom": "6249",
    "dl_number": "20B-10844 OW, 21B-10596 W"
  },
  {
    "id": 31,
    "name": "Asian Sales Corp.",
    "address": "Shop No-203, Duggal Complex, Pindi Street, Ludhiana",
    "owner_name": "Nishant Arora",
    "phone": "5099420",
    "mobile": "98151-59420",
    "intercom": "720",
    "dl_number": "20B-19493 OW, 21B-19291 W"
  },
  {
    "id": 32,
    "name": "Atma Singh & Sons",
    "address": "48, Guru Nanak Complex, Dr. Gujjar Mal Road, Ludhiana",
    "owner_name": "Harpreet Singh",
    "phone": "5058165",
    "mobile": "98141-63996",
    "intercom": "8870",
    "dl_number": "20B-11927 OW, 21B-11667 W"
  },
  {
    "id": 33,
    "name": "Avis Pharmaceuticals",
    "address": "15 Floor, Capital Market, Gale Sat Sudan Pindi Street, Ludhiana",
    "owner_name": "Jaspal Singh",
    "phone": "5021030, 5022030",
    "mobile": "99145-33030",
    "intercom": "4530",
    "dl_number": "20B-20548 OW, 21B-20346W"
  },
  {
    "id": 34,
    "name": "Aviv Pharma Distributors",
    "address": "216, Mohar Singh Nagar, Street No-4, Ludhiana ",
    "owner_name": "Ajit Singh",
    "phone": "5024643",
    "mobile": "",
    "intercom": "4643",
    "dl_number": "20B-18255 OW, 21B-18053W"
  },
  {
    "id": 35,
    "name": "Avon Distributors",
    "address": "Manmohan Mkt. Pindi Street, Ludhiana",
    "owner_name": "Pardeep Sood",
    "phone": "5065047",
    "mobile": "98728-26171",
    "intercom": "7379",
    "dl_number": "20B-7073 OW, 21B-6860 W"
  }
]

const Dashboard = () => {
  const history = useHistory();
  return (
    <ion-content>
      <div className="container-fluid nouch_device bg-theme h-100">
        <div className="row">
          <div class="justify-content-center bg-theme">
            <div class="col-md-6 col-sm-8 col-lg-4 px-1">
              <div className="text-center p-4 ">
                <p className="p_wel bold" style={{fontWeight: "600px", fontSize: "22px", color: "white", marginBottom: "0px"}}>
                  Doctors list view
                </p>
              </div>
              <div className="text-center pt-4">
                {
                  data.map((o) => {
                    let arr = o.name.split(" ");
                    let str = ""
                    for (let data of arr) {
                      str = str + Array.from(data)[0].toUpperCase()
                    } 
                    return (
                      <div onClick={() => {
                        history.push('/details', { data: o });
                      }} style={{ background: "#fff", borderRadius: "10px", padding: "10px", marginBottom: "12px" }}>
                        <div style={{ display: "flex" }}>
                          <div style={{ background: "#521550", color: "#fff", padding: "15px", borderRadius: "100%", fontWeight: "" }}>{str}</div>
                          <span style={{ margin: "15px 0px 0px 20px" }}>{o.name}</span>
                        </div>
                        <div style={{ display: "flex", marginTop: "5px" }}>
                          <span style={{ fontWeight: "bold", fontSize: "14px", color: "#521550" }}>Address: &nbsp; </span><span style={{fontSize: "12px", marginTop: "2px"}}>{o.address}</span>
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  );
};
export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import {
//   IonContent,
//   IonInfiniteScroll,
//   IonInfiniteScrollContent,
//   IonList,
//   IonItem,
//   IonAvatar,
//   IonLabel,
// } from '@ionic/react';

// function LoginScreen() {
//   const [items, setItems] = useState([]);

//   const generateItems = () => {
//     const newItems = [];
//     for (let i = 0; i < 50; i++) {
//       newItems.push(`Item ${1 + items.length + i}`);
//     }
//     setItems([...items, ...newItems]);
//   };

//   useEffect(() => {
//     generateItems();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <IonContent>
//       <IonList>
//         {items.map((item, index) => (
//           <IonItem key={item}>
//             <IonAvatar slot="start">
//               <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
//             </IonAvatar>
//             <IonLabel>{item}</IonLabel>
//           </IonItem>
//         ))}
//       </IonList>
//       <IonInfiniteScroll
//         onIonInfinite={(ev) => {
//           generateItems();
//           setTimeout(() => ev.target.complete(), 500);
//         }}
//       >
//         <IonInfiniteScrollContent></IonInfiniteScrollContent>
//       </IonInfiniteScroll>
//     </IonContent>
//   );
// }
// export default LoginScreen;
