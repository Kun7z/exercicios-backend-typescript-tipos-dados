const produto: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}
const etiquetas: string[] = [];

const producaoEtiqueta = (produto: { produto: string, lote: number, ano: number, qtd: number }): string => {
    const lote: string = `${produto.lote}`;
    const qtd: string = `${produto.qtd}`;
    return `${lote.padStart(3, '0')}-${produto.ano}-${qtd.padStart(3, '0')}`;
}

console.log(producaoEtiqueta(produto));