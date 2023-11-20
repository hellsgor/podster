import {showDropdown} from 'UIKit/form-select/_show-dropdown';
import {isMobileDevice} from 'Utils/isMobileDevice.mjs';

document.querySelectorAll('.form-select').forEach((select) => {
  const dropdown = select.querySelector('.form-select__dropdown');
  const dropdownChecks = dropdown.querySelectorAll('.form-check');
  const arrowDesktop = select.querySelector(
    'button.form-select__select .form-select__arrow'
  );
  const realSelect = select.querySelector('select');

  if (isMobileDevice()) {
    select
      .querySelector('.form-select__desktop')
      .classList.add('visually-hidden');
    select
      .querySelector('.form-select__mobile')
      .classList.remove('visually-hidden');
    realSelect.addEventListener('change', () => {
      if (!realSelect.hasAttribute('multiple')) {
        select.querySelector('.form-select__placeholder').textContent =
          realSelect.querySelector(`option[value="${realSelect.value}"]`).text;
      }
    });
  } else {
    select
      .querySelector('.form-select__mobile')
      .classList.add('visually-hidden');
    select
      .querySelector('button.form-select__select')
      .addEventListener('click', (event) => {
        event.preventDefault();
        showDropdown(dropdown, arrowDesktop);
      });
  }

  dropdown.querySelectorAll('input.form-check__box').forEach((formCheck) => {
    formCheck.removeAttribute('name');
  });

  dropdownChecks.forEach((dropdownCheck) => {
    dropdownCheck.addEventListener('change', (event) => {
      if (select.querySelector('select').multiple === true) {
        select
          .querySelector(
            `select option[value="${event.target.dataset.optionValue}"]`
          )
          .setAttribute('selected', '');
      } else {
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
          showDropdown(dropdown, arrowDesktop);
        }, 150);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.classList.contains('visually-hidden') && !isMobileDevice()) {
      if (event.composedPath().includes(select) === false) {
        showDropdown(dropdown, arrowDesktop);
      }
    }
  });
});
