export function Input() {
  function handleInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    if (!event.target.value) {
      event.target.setCustomValidity('A password is required.');
    } else {
      event.target.setCustomValidity('Your password is too short.');
    }
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    event.target.checkValidity();
    event.target.reportValidity();
  }

  return (
    <input
      required
      type="password"
      pattern="^.{8,}$"
      onInvalid={handleInvalid}
      onChange={handleInput}
    />
  );
}
