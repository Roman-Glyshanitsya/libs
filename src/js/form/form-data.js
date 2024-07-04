const formData = {};

function updateForm() {
  const savedData = localStorage.getItem(KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
    formData.email = email;
    formData.message = message;
  }
}
