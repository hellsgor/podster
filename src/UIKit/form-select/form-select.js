import {showDropdown} from 'UIKit/form-select/_show-dropdown';
import {isMobileDevice} from 'Utils/isMobileDevice.mjs';

document.querySelectorAll('.form-select').forEach((select) => {
  const dropdown = select.querySelector('.form-select__dropdown');
  const dropdownChecks = dropdown.querySelectorAll('.form-check');
  const arrowDesktop = select.querySelector(
    '.form-select__desktop .form-select__arrow'
  );
  const realSelect = select.querySelector('select');
  const pseudoSelect = select.querySelector('button.form-select__select');
  const realSelectPlaceholder = select.querySelector(
    '.form-select__mobile .form-select__placeholder'
  );

  if (isMobileDevice()) {
    select
      .querySelector('.form-select__desktop')
      .classList.add('visually-hidden');
    select
      .querySelector('.form-select__mobile')
      .classList.remove('visually-hidden');
    realSelect.addEventListener('change', () => {
      if (!realSelect.hasAttribute('multiple')) {
        realSelectPlaceholder.textContent = realSelect.querySelector(
          `option[value="${realSelect.value}"]`
        ).text;
        realSelectPlaceholder.classList.remove(
          'form-select__select_not-selected'
        );
      } else {
        if (
          Array.from(realSelect.querySelectorAll('option')).filter(
            (option) => option.selected
          ).length > 0
        ) {
          realSelect.classList.remove('form-select__select_not-selected');
        } else {
          realSelect.classList.add('form-select__select_not-selected');
        }
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
      realSelect.classList.remove('form-select__select_not-selected');
      select
        .querySelector('button.form-select__select')
        .classList.remove('form-select__select_not-selected');

      if (realSelect.multiple === true) {
        realSelect
          .querySelector(
            `select option[value="${event.target.dataset.optionValue}"]`
          )
          .setAttribute('selected', '');
        const selectedOptions = realSelect.querySelectorAll('option[selected]');
        pseudoSelect.textContent =
          selectedOptions.length > 0 && selectedOptions.length <= 1
            ? selectedOptions[0].text
            : `Выбрано: ${selectedOptions.length}`;
      } else {
        select.querySelectorAll('select option').forEach((option) => {
          if (option.hasAttribute('selected')) {
            option.removeAttribute('selected');
          }
          if (option.value === event.target.dataset.optionValue) {
            option.setAttribute('selected', '');
            pseudoSelect.textContent = realSelect.querySelector(
              `option[value="${realSelect.value}"]`
            ).text;
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
