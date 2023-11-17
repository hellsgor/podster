document
  .querySelectorAll("input[data-ui-kit-id='password']")
  .forEach((passwordControl) => {
    const passwordToggleElement = passwordControl
      .closest('.form-control__wrapper')
      .querySelector('.form-control__password-toggle');
    
    passwordToggleElement.addEventListener('click', () => {
      if (
        passwordToggleElement.classList.contains(
          'form-control__password-toggle_visible'
        )
      ) {
        passwordToggleElement.classList.remove(
          'form-control__password-toggle_visible'
        );
        passwordControl.type = 'password';
      } else {
        passwordToggleElement.classList.add(
          'form-control__password-toggle_visible'
        );
        passwordControl.type = 'text';
      }
    });
  });
