#Language: pt

Funcionalidade: Validar o número total de visualizações 
    Como usuário da plataforma 
    Quero pesquisar um canal
    Para validar o número total de visualizações

    Contexto: Estar na página home
        Dado que esteja na página Home

    Esquema do Cenário: Pesquisar por Compasso UOL e validar se o número total de visualizações é maior que 30k
        Quando pesquisar por 'Compasso Uol'
        E acessar o canal da Compasso Uol
        E acessar a aba 'sobre'
        Então deverá validar se o número total de visualizações é maior que 30k
