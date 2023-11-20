import {showDropdown} from 'UIKit/form-select/_show-dropdown';

document.querySelectorAll('.form-select').forEach((select) => {
  const dropdown = select.querySelector('.form-select__dropdown');
  const dropdownChecks = dropdown.querySelectorAll('.form-check');
  const arrow = select.querySelector('.form-select__arrow');

  select
    .querySelector('.form-select__pseudo')
    .addEventListener('click', (event) => {
      event.preventDefault();
      showDropdown(dropdown, arrow);
    });

  dropdown.querySelectorAll('input.form-check__box').forEach((formCheck) => {
    formCheck.removeAttribute('name');
  });

  dropdownChecks.forEach((dropdownCheck) => {
    dropdownCheck.addEventListener('change', (event) => {
      if (select.querySelector('select').multiple === true) {
        console.log('multiple');
        select
          .querySelector(
            `select option[value="${event.target.dataset.optionValue}"]`
          )
          .setAttribute('selected', '');
      } else {
        console.log('mono');
        select.querySelectorAll('select option').forEach((option) => {
          if (option.hasAttribute('selected')) {
            option.removeAttribute('selected');
          }
          if (option.value === event.target.dataset.optionValue) {
            option.setAttribute('selected', '');
          }
        });
        dropdownChecks.forEach((dropdownCheck) => {
          if (
            dropdownCheck.querySelector('input[type=checkbox]') !== event.target
          ) {
            dropdownCheck.querySelector('input[type=checkbox]').checked = false;
          }
        });
        setTimeout(() => {
          showDropdown(dropdown, arrow);
        }, 150);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.classList.contains('visually-hidden')) {
      if (event.composedPath().includes(select) === false) {
        showDropdown(dropdown, arrow);
      }
    }
  });
});
