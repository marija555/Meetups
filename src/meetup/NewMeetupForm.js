import { useRef } from "react";
import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetup(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function sumbitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDesc
        };
        props.onAddMeetup(meetupData);
    }

  return (
    <Card>
      <form className={classes.form} onSubmit={sumbitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref= {imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref = {addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="desc"> Description </label>
          <textarea id="desc" rows="5" required  ref={descInputRef}/>
        </div>
        <div className={classes.actions}>
          <button> Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetup;
