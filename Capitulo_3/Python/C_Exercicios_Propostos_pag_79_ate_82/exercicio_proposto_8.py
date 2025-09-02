from math import sqrt

a = int(input('Digite o valor de a:'))
b = int(input('Digite o valor de b:'))
c = int(input('Digite o valor de c:'))

descriminante = (b**2) - (4*a*c)


if descriminante < 0:
    print('Não existem raízes reais.')
else:
    x_positivo = (-b + sqrt(descriminante)) / (2*a)
    x_negativo = (-b - sqrt(descriminante)) / (2*a)

    print(f'*** Raízes reais da equação ***\n'
          f'X positivo:{x_positivo}\n'
          f'X negativo:{x_negativo}')
    
    print(f'Descriminante:{descriminante}') # Coloquei só para ver o valor, não era necessário.

