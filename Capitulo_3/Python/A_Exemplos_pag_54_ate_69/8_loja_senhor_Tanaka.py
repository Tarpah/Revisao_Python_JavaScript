numeroCamisas = int(input("Quantidade de camisas: "))
valorCamisa = 12.50
valorFinal = numeroCamisas * valorCamisa

if numeroCamisas <= 5:
    valorFinal = valorFinal * (1 - 3/100)
else:
    if numeroCamisas <= 10:
        valorFinal = valorFinal * (1 - 5/100)
    else:
        valorFinal = valorFinal * (1 - 7/100)

print(f"Valor final: R$ {valorFinal:.2f}")

# pag 68