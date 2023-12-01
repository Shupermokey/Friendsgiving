import { Person } from "../Types";
import { useProvider } from "../contexts/GroupProvider";

export const Group = () => {
  //Get the list of everyone in the group
  const {groupMembers} = useProvider();


  const sendEmails = async (input:string) => {
    console.log(input);
    const emailData = {
      to: input,
      subject: 'Friendsgiving',
      text: 'Click the link to reveal your friend',
    };

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } 
    
    catch (error) {
      console.error('Error sending email:', error);
    }
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
      <button onClick={() => groupMembers.forEach((person) => {sendEmails(person.email)})}>Send</button>
    </div>
  )
  
}
