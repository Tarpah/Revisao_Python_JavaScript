print(f'Tabela de preços:\n'
      'COD 1 - À vista(em espécie)           | 15% de desconto\n'
      'COD 2 - Cartão de débido              | 10% de desconto\n'
      'COD 3 - Cartão de Crédito(vencimento) | 5% de desconto\n')

preco_total = float(input('Digite o preço total da venda:'))
forma_de_pagamento = int(input('Digite o código do Pagamento:'))

if forma_de_pagamento == 1:
    print(f'Valor final a ser pago:{preco_total-(preco_total*(15/100))}')
elif forma_de_pagamento == 2:
    print(f'Valor final a ser pago:{preco_total-(preco_total*(10/100))}')
elif forma_de_pagamento == 3:
    print(f'Valor final a ser pago:{preco_total-(preco_total*(5/100))}')
else:
    print('Forma de pagamento inválido!')
