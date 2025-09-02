sobrenome = input('Digite sobrenome do apresentador:').upper()

if sobrenome == 'PINHEIRO' or sobrenome == 'ARAUJO' or sobrenome == 'CARLA':
    print('Jornal: Bom Dia Nação.')
elif sobrenome == 'BONNER' or sobrenome == 'VASCONCELOS':
    print('Jornal: Jornal Brasileiro.')
else:
    print('Apresenta-dor(a) desconhecido(a).')
