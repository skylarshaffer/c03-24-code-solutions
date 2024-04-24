//  Extended interface
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

//  Dom queries
const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

//  Error coverage
if (!$contactForm) throw new Error('The $contactForm query failed');

//  Callback Functions
function handleSubmit(event: Event): void {
  event.preventDefault();
  const $formElements: FormElements = $contactForm.elements as FormElements;
  const formSubmission = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formSubmission);
}

//  handleSubmit
$contactForm.addEventListener('submit', handleSubmit);
