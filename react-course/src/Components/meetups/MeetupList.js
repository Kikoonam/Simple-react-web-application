import MeetupItems from "./MeetupItem";
import classes from "./MeetupsList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetups) => (
        <MeetupItems
          key={meetups.id}
          image={meetups.image}
          title={meetups.title}
          address={meetups.address}
          description ={meetups.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
