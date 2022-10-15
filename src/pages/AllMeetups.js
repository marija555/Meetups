import { useEffect, useState } from "react";
import MeetupList from "../meetup/MeetupList";

function AllMeetups() {
  const [isLoading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-meetups-c6366-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setLoading(false);
        setLoadedData(meetups);
      });
  }, []);

  if (isLoading) {
    return <div> Loading....</div>;
  }

  return (
    <section>
      <h1> All meetups</h1>
      <MeetupList meetups={loadedData} />
    </section>
  );
}

export default AllMeetups;
