export function Input() {
  function handleInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    switch (true) {
      case !event.target.value:
        event.target.setCustomValidity('A password is required.');
        break;
      case !/[A-Z]/.test(event.target.value):
        event.target.setCustomValidity(
          'Your password does not contain a capital letter.'
        );
        break;
      case !/[0-9]/.test(event.target.value):
        event.target.setCustomValidity(
          'Your password does not contain a number.'
        );
        break;
      case !/[!@#$%^&*()]/.test(event.target.value):
        event.target.setCustomValidity(
          'Your password does not contain a special character (!, @, #, $, %, ^, &, (, ), or *).'
        );
        break;
      case event.target.value.length < 8:
        event.target.setCustomValidity(
          'Your password is too short (at least 8 characters).'
        );
        break;
    }
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    event.target.checkValidity();
    event.target.reportValidity();
  }

  return (
    <>
      <label htmlFor="input">Password</label>
      <input
        required
        id="password"
        type="password"
        pattern="^.{8,}$"
        onInvalid={handleInvalid}
        onChange={handleInput}
      />
    </>
  );
}
