print(f'{4*'*'} TABELA VERDADE {4*'*'}\n'
      '1. Operador AND\n'
      '2. Operador OR\n'
      '3. Operador NOT\n'
      f'{27*'*'}')
opcao = int(input('Escolha uma opção:'))

match opcao:
    case 1:
        num_1 = bool(int(input('Digite o primeiro valor:')))
        num_2 = bool(int(input('Digite o segundo valor:')))

        print(f'Resultado: {num_1 and num_2}')
    
    case 2:
        num_1 = bool(int(input('Digite o primeiro valor:')))
        num_2 = bool(int(input('Digite o segundo valor:')))

        print(f'Resultado: {num_1 or num_2}')

    case 3:
        num_1 = bool(int(input('Digite o primeiro valor:')))

        print(f'Resultado: {not num_1}')