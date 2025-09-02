estatura_1 = int(input('Altura da primeiro pessoa:'))
estatura_2 = int(input('Altura da segundo pessoa:'))
estatura_3 = int(input('Altura da terceiro pessoa:'))

if estatura_1 > estatura_2 and estatura_1 > estatura_3: # estatura 1 é o maior
    maior, segundo, terceiro  = estatura_1, estatura_2, estatura_3
elif estatura_2 > estatura_3:
    maior, segundo, terceiro = estatura_2, estatura_3, estatura_1
else:
    maior, segundo, terceiro = estatura_3, estatura_2, estatura_1
if terceiro > segundo:
    segundo , terceiro = terceiro, segundo 

print(f'Primeiro: {maior}\nSegundo: {segundo}\nTerceiro: {terceiro}\n')


# O código abaixo é o primeiro código que me veio na cabeça, o de cima foi depois de pensar bastante... hehe
# estatura_1 = int(input('Altura da primeiro pessoa:'))
# estatura_2 = int(input('Altura da segundo pessoa:'))
# estatura_3 = int(input('Altura da terceiro pessoa:'))

# # estatura 1 maior
# if estatura_1 > estatura_2 and estatura_1 > estatura_3:
#     maior = estatura_1
#     if estatura_2 > estatura_3:
#         segundo = estatura_2
#         terceiro = estatura_3

#     else:
#         segundo = estatura_3
#         terceiro = estatura_2

# # estatura 2 maior
# elif estatura_2 > estatura_1 and estatura_2 > estatura_3:
#     maior = estatura_2
#     if estatura_1 > estatura_3:
#         segundo = estatura_1
#         terceiro = estatura_3

#     else:
#         segundo = estatura_3
#         terceiro = estatura_1

# # estatura 3 maior
# elif estatura_3 > estatura_1 and estatura_3 > estatura_2:
#     maior = estatura_3
#     if estatura_1 > estatura_2:
#         segundo = estatura_1
#         terceiro = estatura_2

#     else:
#         segundo = estatura_2
#         terceiro = estatura_1


# print(f'Primeiro: {maior}\n'
#       f'Segundo: {segundo}\n'
#       f'Terceiro: {terceiro}\n')


# # fiz de uma forma a respeitar os limites até o momento mostrados no livro, sem usar de listas ou loops