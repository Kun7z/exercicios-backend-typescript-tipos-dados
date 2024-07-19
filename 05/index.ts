const soletrando = (palavra: string): string => {
    const separaPalavra: string[] = palavra.split('');
    return separaPalavra.join('-')
}

console.log(soletrando('programador'));