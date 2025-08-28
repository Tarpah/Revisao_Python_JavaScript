nota1 = int(input("Informe a nota do bimestre 1 (0-100): "))
nota2 = int(input("Informe a nota do bimestre 2 (0-100): "))
media = (nota1 + nota2) / 2
estado_Aprovacao = media >= 60

print(estado_Aprovacao)