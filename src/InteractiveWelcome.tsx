// Crea un componente InteractiveWelcome che renderizza un tag input e il componente Welcome. Passa il contenuto corrente del tag input alla prop name del componente Welcome. Il tag input dovrebbe essere un componente controllato.

import { useState } from "react";
import { Welcome } from "./Welcome";
import { Login } from "./Login";

export type LoginData = {
  username: string;
  password: string;
  remember: boolean;
};

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleLogin(data: LoginData) {
    setName(data.username);
  }

  return (
    <div>
      <input
        placeholder="Inserisci il tuo nome"
        type="text"
        value={name}
        onChange={handleInputChange}
      ></input>
      <Welcome name={name} />
      <Login onLogin={handleLogin} />
    </div>
  );
}
