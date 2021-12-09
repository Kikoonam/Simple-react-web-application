import MeetupList from "../Components/meetups/MeetupList";
import { useState,useEffect } from "react";


function AllMeetupsPages() {
  const [isloading, setIsloading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

   useEffect(()=>{
     setIsloading(true);
    fetch(
      "https://react-be0da-default-rtdb.firebaseio.com/meetups.json",
    ).then((response) => {
      return response.json();
  
    })
    .then((data)=>{
      const meetups = [];

      for(const key in data){
        const meetup ={
          id:key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsloading(false);
      setloadedMeetups(meetups);
  
    });

   },[]);

  if(isloading){
    return<section>
      <p>Loading...</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups ={loadedMeetups}/>
    
    </section>
  );
}

export default AllMeetupsPages;
