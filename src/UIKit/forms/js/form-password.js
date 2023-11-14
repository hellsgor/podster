const InputType = {
  PASSWORD: 'password',
  TEXT: 'text'
};
const passwordInputs = Array.from(document.querySelectorAll('.form-password'));

class formPassword {
  constructor(element) {
    this._element = element;
    this._toggleButton = this._element.querySelector('.form-password__toggle-view');
    this._input = this._element.querySelector('.form-control');
    this._onToggleButtonClick = this._onToggleButtonClick.bind(this);

    this._setHandlers();
  }

  _setHandlers() {
    if (this._toggleButton) {
      this._toggleButton.addEventListener('click', this._onToggleButtonClick);
    }
  }

  _onToggleButtonClick(evt) {
    evt.preventDefault();
    this._input.type = this._input.type === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD;
    this._element.classList.toggle('visible');
  }
}

if (passwordInputs.length) {
  passwordInputs.forEach((item) => {
    new formPassword(item);
  })
}