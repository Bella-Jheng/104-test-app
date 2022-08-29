import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
const onAddMeetup =(meetupData)=>{
    console.log(meetupData)
}

    return <NewMeetupForm addMeetupHandler={onAddMeetup}></NewMeetupForm>
}

export default NewMeetupPage;