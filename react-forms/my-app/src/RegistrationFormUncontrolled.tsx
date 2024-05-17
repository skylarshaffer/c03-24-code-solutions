export function RegistrationFormUncontrolled() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { username, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );
    console.log('FormUncontrolled:', { username, password });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username<input name="username" type="text"></input>
        </label>
        <label>
          Password<input name="password" type="password"></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
