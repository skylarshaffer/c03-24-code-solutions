import { useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('FormControlled:', { username, password });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            name="username"
            type="text"
            value={username}></input>
        </label>
        <label>
          Password
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            name="password"
            type="password"
            value={password}></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
