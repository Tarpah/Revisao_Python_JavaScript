num = float(input('Digite um valor:'))
if num == 0:
    print('Zero não é válido!')
elif num % 2 == 0:
    if num < 0:
        print(f'{num} ao quadrado é: {-(num**2)}')
    else:
        print(f'{num} ao quadrado é: {num**2}')
else:
    print(f'{num} ao cubo é: {num**3}')

