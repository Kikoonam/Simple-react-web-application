import { useNavigate } from "react-router-dom";
import NewMeetup from "../Components/meetups/NewMeetup";

function NewMeetUpPages() {
  const navigate = useNavigate();

  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-be0da-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("../",{replace:true});
    }
  
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetup onAddMeetup={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetUpPages;
