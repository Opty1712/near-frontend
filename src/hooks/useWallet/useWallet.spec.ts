import { getNearBalance } from './useWallet';

describe(nameof(getNearBalance), () => {
  it('returns zero for empty data', () => {
    expect(getNearBalance()).toBe('0.00000');
  });

  it('returns zero for small data', () => {
    expect(getNearBalance('1')).toBe('0.00000');
  });

  it('returns rounded balance', () => {
    expect(getNearBalance('123456789012345678901234')).toBe('0.12346');
  });

  it('returns bigger balance', () => {
    expect(getNearBalance('123456789012345000000000000')).toBe('123.45679');
  });
});
