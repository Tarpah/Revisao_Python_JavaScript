salario = float(input('Digite o salário do funcionário:'))

if salario > 0:
    print('Tabela de cargos:\n'
        '1 - Programador de Sistemas\n'
        '2 - Analista de Sitemas\n'
        '3 - Analista de Banco de Dados\n')
    cargo = int(input('Digite o cargo do funcionário:'))

    match cargo:
        case 1:
            print(f'novo salário:{salario+(salario*(30/100))}')
        case 2:
            print(f'novo salário:{salario+(salario*(20/100))}')
        case 3:
            print(f'novo salário:{salario+(salario*(15/100))}')
        case _:
            print('Cargo inválido')
else:
    print('Salário deve ser maior que zero!')

