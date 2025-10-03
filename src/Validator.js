class Validator {
  static validateUsername(username) {
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) return false;

    if (/\d{4,}/.test(username)) return false;

    if (/^[\d_-]/.test(username)) return false;

    if (/[_-]$/.test(username)) return false;

    return true;
  }
}

export default Validator;
