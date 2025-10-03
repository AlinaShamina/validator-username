import Validator from '../Validator';

describe('Validator.validateUsername', () => {
  test('valid usernames', () => {
    expect(Validator.validateUsername('Ivan_Ivanov')).toBe(true);
    expect(Validator.validateUsername('Oleg-123')).toBe(true);
    expect(Validator.validateUsername('A1B2C3')).toBe(true);
  });

  test('invalid due to bad characters', () => {
    expect(Validator.validateUsername('Ivan!Ivanov')).toBe(false);
    expect(Validator.validateUsername('Иван')).toBe(false);
    expect(Validator.validateUsername('User@Name')).toBe(false);
  });

  test('invalid: starts or ends with digit/_/-', () => {
    expect(Validator.validateUsername('2Ivan')).toBe(false);
    expect(Validator.validateUsername('_Oleg')).toBe(false);
    expect(Validator.validateUsername('Egor-')).toBe(false);
  });

  test('invalid: more than three digits in a row', () => {
    expect(Validator.validateUsername('User12345Name')).toBe(false);
    expect(Validator.validateUsername('A1B2345')).toBe(false);
  });

  test('edge cases', () => {
    expect(Validator.validateUsername('A')).toBe(true);
    expect(Validator.validateUsername('Ab1')).toBe(true);
    expect(Validator.validateUsername('Ab_1-2')).toBe(true);
  });
});
