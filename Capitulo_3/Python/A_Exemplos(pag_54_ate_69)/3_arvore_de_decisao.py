# Fiz uma correção no código, no código original quando um if ocorre, seu else não mantem a identação para os próximas condicionais,
# o programa apenas continua, provocando erro por não ter entrado no else anterior, onde o input é feito.
# A falta do input provoca erro por variavel não definida, ao invéz do programa apenas finalizar.

print("## Programa de empréstimos ##. Responda: (0 - Não e 1 - Sim) ")

nomeNegativado = int(input("Possui nome negativado? "))
if nomeNegativado == 1:
    print("Não pode realizar empréstimo")
else:
    carteiraAssinada = int(input("Possui carteira assinada? "))
    if carteiraAssinada == 0:
        print("Não pode realizar empréstimo ")
    else:
        possuiCasaPropria = int(input("Possui casa própria? "))
        if possuiCasaPropria == 0:
            print("Não pode realizar empréstimo")
        else:
            print("Conceder empréstimo")

# pag 57

# outra correção: na pág 60 existe um exemplo dizendo que o operador 'and' tendo os boleanos 'True and False' resultaria em 'True', o que está errado.
print(bool(True and False)) # Resulta em False