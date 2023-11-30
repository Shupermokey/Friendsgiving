import { useProvider } from "../contexts/GroupProvider";

export const Group = () => {
  //Get the list of everyone in the group
  const {groupMembers} = useProvider();


  const sendEmails = () => {

  }

  return(
    <div>
      <h1>Group</h1>
      {
       //iterate through the people in the list
       groupMembers.map((person, id) => (
          <div key={id}>
            {person.name} : {person.email}
          </div>
        ))
      }
      <button onClick={sendEmails}>Send</button>
    </div>
  )
  
}
