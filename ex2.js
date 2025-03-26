function MultiplicarMatrizesInvestimento(matrizA, matrizB) {
    // Verificando se as matrizes podem ser multiplicadas
    if (matrizA[0].length !== matrizB.length) {
        throw new Error("As matrizes não podem ser multiplicadas. O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.");
    }

    const linhasA = matrizA.length;
    const colunasB = matrizB[0].length;
    const colunasA = matrizA[0].length;
    const matrizResultado = [];

    // Calculandocada elemento da matriz resultado
    for (let i = 0; i < linhasA; i++) {
        matrizResultado[i] = []; // Inicializando a linha
        for (let j = 0; j < colunasB; j++) {
            let soma = 0;
            for (let k = 0; k < colunasA; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            matrizResultado[i][j] = soma;
        }
    }

    return matrizResultado;
}

// Função auxiliar para imprimir matrizes formatadas
function imprimirMatriz(matriz) {
    console.log("[");
    for (let linha of matriz) {
        console.log("  " + JSON.stringify(linha) + ",");
    }
    console.log("]");
}

// Exemplo de uso
const investimentos = [
    [1000, 2000],  // Investimentos do tipo 1 nos períodos 1 e 2
    [1500, 2500]   // Investimentos do tipo 2 nos períodos 1 e 2
];

const fatoresCrescimento = [
    [1.1, 1.2],    // Fatores de crescimento para o período 1
    [0.9, 1.0]     // Fatores de crescimento para o período 2
];

console.log("Matriz de Investimentos:");
imprimirMatriz(investimentos);

console.log("\nMatriz de Fatores de Crescimento:");
imprimirMatriz(fatoresCrescimento);

try {
    const resultado = MultiplicarMatrizesInvestimento(investimentos, fatoresCrescimento);
    console.log("\nResultado da Multiplicação (Investimentos × Fatores de Crescimento):");
    imprimirMatriz(resultado);
} catch (error) {
    console.error("\nErro:", error.message);
}