import { useHistory } from "react-router-dom";
import NewMeetupForm from "../meetup/NewMeetupForm";
function NewMeetup() {

  const history = useHistory();
  
  function addMeetupHandler(meetupData) {
    fetch('https://react-meetups-c6366-default-rtdb.firebaseio.com/meetups.json', 
    {
      method : 'POST',
      body : JSON.stringify(meetupData),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    ).then(() => {
      history.replace('/')
    });
  }

  return (

    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
