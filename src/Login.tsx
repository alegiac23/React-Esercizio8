// Crea un componente Login contenente tre input: un input per il username, un input per la password e una checkbox per remember. Tutti e tre gli input dovrebbero essere componenti controllati.

import { useState } from "react";
import { type LoginData } from "./InteractiveWelcome";

// Aggiungi un pulsante "login" al componente Login. Questo pulsante dovrebbe essere disabilitato finché gli input username e password sono vuoti. Quando cliccato, il gestore di eventi allegato al pulsante dovrebbe chiamare una funzione onLogin passata come prop al componente Login, passando lo stato.

// Aggiungi un pulsante "reset" al componente Login che cancella il contenuto di tutti e tre gli input quando cliccato.

type LoginProps = {
  onLogin: (data: LoginData) => void;
};

export function Login({ onLogin }: LoginProps) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;

    setData((c) => ({
      ...c,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleLogin(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    onLogin(data);
    console.log(data);
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username</label>
        <input
          type="username"
          name="username"
          value={data.username}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Remember</label>
        <input
          type="checkbox"
          name="remeber"
          checked={data.remember}
          onChange={handleChange}
        ></input>
      </div>
      <button
        type="submit"
        disabled={!data.username.trim() || !data.password.trim()}
      >
        Login
      </button>
      <button type="submit" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

// Consigli soluzione

// Errore nel nome della prop della checkbox: "name="remeber"" invece di "remember". Questo causa la disconnessione dello stato tra l'input e l'oggetto dati, impedendo il funzionamento corretto della checkbox. Correzione: <input ... name="remember" ... />

// Tipo di input errato per username: viene utilizzato "type="username"", che non è un tipo HTML valido. Deve essere "text". Correzione: <input type="text" name="username" ... />

// Il pulsante Reset ha type="submit", quindi esegue erroneamente il submit del form. Deve avere type="button" per solo azzerare i campi. Correzione: <button type="button" onClick={handleReset}>Reset</button>

// Nel gestore di submit del form, il tipo dell'evento è indicato come React.ChangeEvent<HTMLFormElement>, ma per gli eventi di submit è consigliabile usare React.FormEvent<HTMLFormElement> per coerenza e sicurezza di tipo. Correzione: function handleLogin(event: React.FormEvent<HTMLFormElement>) { ... }

// Suggerimento: Per migliorare la chiarezza e tipo del codice, puoi tipizzare lo stato data con <LoginData>: const [data, setData] = useState<LoginData>({ ... });
