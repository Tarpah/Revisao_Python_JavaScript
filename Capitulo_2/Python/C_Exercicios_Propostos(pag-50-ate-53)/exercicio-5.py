from math import sqrt

x1 = float(input('Digite o ponto X1:'))
y1 = float(input('Digite o ponto Y1:'))
x2 = float(input('Digite o ponto X2:'))
y2 = float(input('Digite o ponto Y2:'))

d = sqrt((x2-x1)**2+(y2-y1)**2)

print(f'A ditancia entre os pontos P1 e P2:{d}')