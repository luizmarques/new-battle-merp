import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as uuidValidate } from 'uuid';

describe ('UUID Unit Test', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');
  it('should throw error when uuid is inva;id', () => {
    expect(() => new Uuid('invalid-uuid')).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })

  it('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })

  it('should create a valid uuid with given id', () => {
    const uuid = new Uuid('123e4567-e89b-12d3-a456-426614174000');
    expect(uuid.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })
})