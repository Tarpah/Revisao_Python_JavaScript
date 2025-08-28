salario = 1500
nome_corretor = input('Nome do Corretor:')
qnt_imoveis_vendidos = int(input('Quantidade de Imoveis Vendidos:'))
valor_total_vendas = float(input('Valor total em vendas do vendedor:'))

salario = salario + (200 * qnt_imoveis_vendidos) + (5/100 * valor_total_vendas)

print(f'Salario de {nome_corretor}: {salario}')