from math import sqrt

a = float(input('Informe o valor de A:'))
b = float(input('Informe o valor de B:'))
c = float(input('Informe o valor de C:'))

resultado_positivo = (-b + sqrt(b**2 - 4*a*c))/2*a
resultado_negativo = (-b - sqrt(b**2 - 4*a*c))/2*a

print(f'Equação de segundo grau positiva:{resultado_positivo}')
print(f'Equação de segundo grau negativo:{resultado_negativo}')

# Essa questão está faltando um pedaço, logo é inconclusivo se está correto.