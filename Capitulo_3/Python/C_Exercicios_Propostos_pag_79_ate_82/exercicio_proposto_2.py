num_1 = int(input('Digite o primeiro valor:'))
num_2 = int(input('Digite o segundo valor:'))

print('1. Média ponderada, com pesos 2 e 3 respectivamente\n'
      '2. Quadrado da soma dos 2 números\n'
      '3. Cubo do menor número\n')

opcao = int(input('Escolha uma opção:'))

if opcao < 1 or opcao > 3:
    print('Opção Inválida')
else:
    match opcao:
        case 1:
            print(f'Média ponderada: {((num_1*2)+(num_2*3))/5}')
        case 2:
            print(f'Quadrado da soma: {(num_1**2)+(num_2**2)}')
        case 3:
            if num_1 < num_2:
                print(f'Cubo do menor numero: {num_1**3}')
            else:
                print(f'Cubo do menor numero: {num_2**3}')
                