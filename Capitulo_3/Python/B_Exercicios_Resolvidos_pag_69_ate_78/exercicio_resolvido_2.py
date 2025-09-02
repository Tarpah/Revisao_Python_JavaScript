from math import sqrt
# ponto1
x1 = int(input('Informe o valor de x1:'))
y1 = int(input('Informe o valor de y1:'))
# ponto2
x2 = int(input('Informe o valor de x2:'))
y2 = int(input('Informe o valor de y2:'))
# ponto3
x3 = int(input('Informe o valor de x3:'))
y3 = int(input('Informe o valor de y3:'))

#lados
lado1 = sqrt(((x2-x1)**2) + ((y2-y1) **2)) #lado p1 - p2
lado2 = sqrt(((x3-x1)**2) + ((y3-y1) **2)) #lado p1 - p3
lado3 = sqrt(((x3-x2)**2) + ((y3-y2) **2)) #lado p2 - p3

condicao1=False
condicao2=False
condicao3=False

if lado1>0 and lado2>0 and lado3>0: # condição 1 algum lado menor ou igual a 0
    condicao1=True

if (lado1 < (lado2 + lado3)) and  (lado2 < (lado1 + lado3)) and (lado3 < (lado1 + lado2)) : # condição 2 algum lado for maior que os outros dois somados
    condicao2=True

if lado1 > abs(lado2 - lado3) and lado2 > abs(lado1 - lado3) and lado3 > abs(lado1 - lado2): # condição 3 algum lado for maior que a diferença dos outros dois
    condicao3=True


if condicao1 and condicao2 and condicao3:
    print('Formou Triangulo')
    # Categorização
    if lado1 == lado2 and lado2 == lado3:
        print('Triangulo Equilátero.')
    elif ((lado1 == lado2) and (lado1 != lado3)) or ((lado2 == lado3) and (lado2 != lado1)) or (lado3 == lado1 and lado3 != lado2):
        print('Triangulo Isósceles')
    else:
        print('Triangulo Escaleno')
else: 
    print('Nenhum triângulo formado com os pontos informados')
