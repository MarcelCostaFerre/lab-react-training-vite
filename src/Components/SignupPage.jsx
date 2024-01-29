import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [hola, setHola] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  return (
    <>
      <div>
        <p>
          <b>Email</b>
        </p>
        <input
          style={{ width: "50%", border: "2px solid black", borderRadius: 6 }}
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>
          <b>Password</b>
        </p>
        <input
          style={{ width: "50%", border: "2px solid black", borderRadius: 6 }}
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>
          <b>Nationality</b>
        </p>
        <select
          style={{ width: "50%", border: "2px solid black", borderRadius: 6 }}
          name="nationality"
          value={nationality}
          onChange={(e) => {
            setNationality(e.target.value);
          }}
        >
          <option></option>
          <option value={"cat"}>Català</option>
          <option value={"en"}>English</option>
          <option value={"fr"}>François</option>
        </select>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            switch (nationality) {
              case "cat":
                setHola("Hola");
                setEmailMessage(`La teva adreça de mail és: ${email}.`);
                password
                  ? setPasswordMessage("La teva adreça de mail és correcte.")
                  : setPasswordMessage("La teva adreça de mail és incorrecte.");
                break;
              // return (
              //   <div>
              //     <p>Hola</p>
              //     <p>La teva adreça de mail és: {email}</p>
              //     <p>La teva adreça de mail és correcte.</p>
              //   </div>
              // );

              case "en":
                setHola("Hello");
                setEmailMessage(`Your email address is: ${email}.`);
                password
                  ? setPasswordMessage("Your email address is correct.")
                  : setPasswordMessage("Your email address is incorrect.");
                break;
              // return (
              //   <div>
              //     <p>Hello</p>
              //     <p>Your email address is: {email}</p>
              //     <p>Your email address is correct.</p>
              //   </div>
              // );

              case "fr":
                setHola("Bonjour");
                setEmailMessage(`Votre adresse email est: ${email}`);
                password
                  ? setPasswordMessage("Votre adresse e-mail est correcte.")
                  : setPasswordMessage("Votre adresse e-mail est incorrecte.");
                break;
              // return (
              //   <div>
              //     <p>Bonjour</p>
              //     <p>Votre adresse email est: {email}</p>
              //     <p>Votre adresse e-mail est correcte.</p>
              //   </div>
              // );
            }
          }}
          style={{ color: "black" }}
        >
          Sign up
        </button>
      </div>
      <div>
        <h3>{hola}</h3>
        <h3>{emailMessage}</h3>
        <h3>{passwordMessage}</h3>
      </div>
    </>
  );
}

export default SignupPage;
