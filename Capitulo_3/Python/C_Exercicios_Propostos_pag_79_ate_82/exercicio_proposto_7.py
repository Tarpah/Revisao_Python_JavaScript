estatura_1 = int(input('Digite a 1° estatura:'))
estatura_2 = int(input('Digite a 2° estatura:'))
estatura_3 = int(input('Digite a 3° estatura:'))

if estatura_1 == estatura_2 or estatura_1 == estatura_3 or estatura_2 == estatura_3:
    print('Há pelo menos 2 pessoas com a mesma estatura.')
else:
    if estatura_1 > estatura_2 and estatura_1 > estatura_3:
        print(f'Maior estatura é a 1°: {estatura_1}')
    else:
        if estatura_2 > estatura_1 and estatura_2 > estatura_3:
            print(f'Maior estatura é a 2°: {estatura_2}')
        else:
            print(f'Maior estatura é a 3°: {estatura_3}')
