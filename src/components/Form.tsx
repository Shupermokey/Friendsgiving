import { useState } from "react";
import { useProvider } from "../contexts/GroupProvider";
import { Person } from "../Types";

export const Form = () => {
  const { groupMembers, setGroupMembers } = useProvider();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);



  // function checkIfValid(checkEmail:string) {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  //   setIsValid(emailRegex.test(checkEmail));
  //   console.log(isValid);
  // }

  function addPerson(name: string, email : string) {
    // checkIfValid(email);
      // if(name !== null && isValid === true){
        const person: Person = {
          name,
          email
        }
        const groupMembersClone = groupMembers.slice()
        groupMembersClone.push(person)
        setGroupMembers(groupMembersClone);
      // }

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
