const multiplicacao = (a: number, b: number): number => {
    return a * b
}

const tabuadaArray = (array: number[]): string => {
    let resultado: string = '';

    for (const numero of array) {
        let contador: number = 0;
        for (let i = 0; i < 11; i++) {
            resultado += `${numero} x ${contador} = ${multiplicacao(numero, contador)}\n`
            contador++
        }
        resultado += `-------------------------------------\n`
    }
    return resultado;
}

console.log(tabuadaArray([1, 2, 5]))