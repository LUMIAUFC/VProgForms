import {
  announceBlockBoundaryExit,
  isLeavingBlockBoundary,
  shouldAnnounceBlockExit
} from './block-boundary.utils';

describe('block-boundary.utils', () => {
  it('deve retornar false quando relatedTarget for nulo ou estiver dentro do mesmo bloco', () => {
    const block = document.createElement('div');
    const child = document.createElement('button');
    block.appendChild(child);

    expect(isLeavingBlockBoundary(block, null)).toBeFalse();
    expect(isLeavingBlockBoundary(block, child)).toBeFalse();
  });

  it('deve retornar true quando o foco sair para fora do bloco', () => {
    const block = document.createElement('div');
    const outside = document.createElement('button');

    expect(isLeavingBlockBoundary(block, outside)).toBeTrue();
  });

  it('não deve anunciar saída quando o foco estiver indo para outro bloco marcado com data-block-boundary', () => {
    const currentBlock = document.createElement('div');
    currentBlock.setAttribute('data-block-boundary', 'true');

    const nextBlock = document.createElement('div');
    nextBlock.setAttribute('data-block-boundary', 'true');
    const nextButton = document.createElement('button');
    nextBlock.appendChild(nextButton);

    expect(shouldAnnounceBlockExit(currentBlock, nextButton)).toBeFalse();
  });

  it('deve anunciar saída quando o foco sair para um elemento fora de blocos', () => {
    const currentBlock = document.createElement('div');
    currentBlock.setAttribute('data-block-boundary', 'true');
    const outsideButton = document.createElement('button');

    expect(shouldAnnounceBlockExit(currentBlock, outsideButton)).toBeTrue();
  });

  it('deve atualizar a live region #block-boundary-announcer ao anunciar saída', (done) => {
    const announcer = document.createElement('div');
    announcer.id = 'block-boundary-announcer';
    document.body.appendChild(announcer);

    announceBlockBoundaryExit('Saindo de Bloco Variável x');

    setTimeout(() => {
      expect(announcer.textContent).toBe('Saindo de Bloco Variável x');
      document.body.removeChild(announcer);
      done();
    }, 60);
  });

  it('deve respeitar atraso customizado e sobrescrever anúncio pendente quando chamado em sequência', (done) => {
    const announcer = document.createElement('div');
    announcer.id = 'block-boundary-announcer';
    document.body.appendChild(announcer);

    announceBlockBoundaryExit('Primeiro anúncio', 120);
    announceBlockBoundaryExit('Segundo anúncio', 120);

    setTimeout(() => {
      expect(announcer.textContent).toBe('');
    }, 60);

    setTimeout(() => {
      expect(announcer.textContent).toBe('Segundo anúncio');
      document.body.removeChild(announcer);
      done();
    }, 160);
  });
});
