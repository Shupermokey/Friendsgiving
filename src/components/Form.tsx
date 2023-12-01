import { useState } from "react";
import { useProvider } from "../contexts/GroupProvider";
import { Person } from "../Types";
import { isEmailValid } from "../utils";

export const Form = () => {
  const { groupMembers, setGroupMembers } = useProvider();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  


  function addPerson(name: string, emails : string) {
       if(name.length > 0 && isEmailValid(emails)){
        const person: Person = {
          name,
          email: emails
        }
        const groupMembersClone = groupMembers.slice()
        groupMembersClone.push(person)
        setGroupMembers(groupMembersClone);
       }

  }

  const inputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const inputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitName = () => {
      addPerson(name, email);
      setName("");
      setEmail("");
  };

  return (
    <div className="flex">
      <form className="flex-col info-inputs">
        <p>Enter a name:</p>
        <input required type="text" name="name" value={name} onChange={inputNameChange} placeholder="Name..."/>
        <input required type="text" name="email" value={email} onChange={inputEmailChange} placeholder="Email..."/>
        <input onClick={submitName} type="submit" value={"Submit"} />
      </form>
    </div>
  );
};
