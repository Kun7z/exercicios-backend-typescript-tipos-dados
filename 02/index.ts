const filtraUsuarios = (lista: { nome: string, idade: number, status: boolean }[], nome: string) => {
    const nomeMinusculo: string = nome.toLowerCase();


    const encontraUsuario: { nome: string, idade: number, status: boolean }[] = lista.filter((item): boolean => {

        const itemNomeMinusculo: string = item.nome.toLowerCase();

        return itemNomeMinusculo.includes(nomeMinusculo)
    })

    return encontraUsuario;


}

const usuarios2 = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

console.log(filtraUsuarios(usuarios2, 'da'))