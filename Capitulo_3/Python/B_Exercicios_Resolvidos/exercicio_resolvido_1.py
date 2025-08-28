print(48*'*')
print('CÁLCULO DE GRANDEZAS ELÉTRICAS')
print(48*'*')

print('1. Tensão (em Volt)')
print('2. Resistência (em Ohm)')
print('3. Corrente (em Ampére)')
print(48*'*')
opcao = int(input('Qual grandeza deseja calcular?'))

if opcao < 4 and opcao > 0:
    print('Erro: Opção Inválida!')
elif opcao == 1:
    resistencia = int(input('Informe a Resistência:'))
    corrente = int(input('Informe a Corrente:'))
    print(f'Tensão:{resistencia * corrente}V')

elif opcao == 2:
    tensao = int(input('Informe a Tensão:'))
    corrente = int(input('Informe a Corrente:'))
    print(f'Resistência:{tensao / corrente}Ω')

elif opcao == 3:
    tensao = int(input('Informe a Tensão:'))
    resistencia = int(input('Informe a Resistência:'))
    print(f'Corrente:{tensao / resistencia}A')
else:
    print('How?')
