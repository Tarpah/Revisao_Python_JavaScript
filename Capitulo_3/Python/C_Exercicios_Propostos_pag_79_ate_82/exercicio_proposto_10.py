altura = int(input('Digite sua altura:(ex 170)'))
peso = int(input('Digite seu peso:(ex:65)'))

imc = (peso / (altura**2))*10000

if imc < 18.5:
    print(f'IMC: {imc:.2f} | Situação: Abaixo do peso!')
elif imc > 18.5 and imc < 25:
    print(f'IMC: {imc:.2f} | Situação: Peso normal.')
elif imc > 25 and imc < 30:
    print(f'IMC: {imc:.2f} | Situação: Sobrepeso!.')
elif imc > 30 and imc < 35:
    print(f'IMC: {imc:.2f} | Obesidade Grau 1.')
elif imc > 35 and imc < 40:
    print(f'IMC: {imc:.2f} | Obesidade Grau 2.')
else:
    print(f'IMC: {imc:.2f} | Obesidade Grau 3.')