import { formatAccessibleMath } from '../utils/accessible-math.utils';

const MOCK_TRANSLATIONS: Readonly<Record<string, string>> = {
  'ACCESSIBLE_MATH.MULTIPLY': 'vezes',
  'ACCESSIBLE_MATH.DIVIDE': 'dividido por',
  'ACCESSIBLE_MATH.ADD': 'mais',
  'ACCESSIBLE_MATH.SUBTRACT': 'menos',
  'ACCESSIBLE_MATH.GREATER': 'maior que',
  'ACCESSIBLE_MATH.LESS': 'menor que',
  'ACCESSIBLE_MATH.GREATER_EQUAL': 'maior ou igual a',
  'ACCESSIBLE_MATH.LESS_EQUAL': 'menor ou igual a',
  'ACCESSIBLE_MATH.EQUAL': 'é igual a',
  'ACCESSIBLE_MATH.NOT_EQUAL': 'diferente de',
  'ACCESSIBLE_MATH.RECEIVE': 'recebe',
  'ACCESSIBLE_MATH.SEMICOLON': 'ponto e vírgula'
};

const mockTranslate = (key: string): string => MOCK_TRANSLATIONS[key] ?? key;

describe('AccessibleMathPipe / formatAccessibleMath', () => {
  it('deve retornar string vazia para entrada vazia', () => {
    expect(formatAccessibleMath('', mockTranslate)).toBe('');
  });

  it('deve formatar subtração, divisão, atribuição e ponto e vírgula sem corromper o HTML gerado', () => {
    const result = formatAccessibleMath('subtrai <- x - y / z ;', mockTranslate);

    expect(result).toContain('<span aria-hidden="true">&lt;-</span><span class="sr-only"> recebe </span>');
    expect(result).toContain('<span aria-hidden="true">-</span><span class="sr-only"> menos </span>');
    expect(result).toContain('<span aria-hidden="true">/</span><span class="sr-only"> dividido por </span>');
    expect(result).toContain('<span aria-hidden="true">;</span><span class="sr-only"> ponto e vírgula </span>');
    expect(result).not.toContain('menoshidden');
    expect(result).not.toContain('menosonly');
    expect(result).not.toContain('dividido por span');
  });

  it('deve priorizar operadores compostos (>=, <=, ==, !=, <-) e escapar < e >', () => {
    const result = formatAccessibleMath('a >= b && c <= d && e < f && g > h && i == j && k != l', mockTranslate);

    expect(result).toContain('<span aria-hidden="true">&gt;=</span><span class="sr-only"> maior ou igual a </span>');
    expect(result).toContain('<span aria-hidden="true">&lt;=</span><span class="sr-only"> menor ou igual a </span>');
    expect(result).toContain('<span aria-hidden="true">&lt;</span><span class="sr-only"> menor que </span>');
    expect(result).toContain('<span aria-hidden="true">&gt;</span><span class="sr-only"> maior que </span>');
    expect(result).toContain('<span aria-hidden="true">==</span><span class="sr-only"> é igual a </span>');
    expect(result).toContain('<span aria-hidden="true">!=</span><span class="sr-only"> diferente de </span>');
  });

  it('deve formatar soma e multiplicação em passagem única', () => {
    const result = formatAccessibleMath('a + b * c', mockTranslate);

    expect(result).toBe(
      'a <span aria-hidden="true">+</span><span class="sr-only"> mais </span> b <span aria-hidden="true">*</span><span class="sr-only"> vezes </span> c'
    );
  });
});
