#Language: pt

Funcionalidade: Validar o nome do primeiro livro da lista de resultados
    Como usuário da Amazon
    Quero pesquisar um livro 
    Para validar o nome do primeiro livro da lista 

    Contexto: Estar na página home
        Dado que esteja na página Home
    
    Esquema do Cenario: pesquisar um livro e validar se o primeiro resultado possui a palavra "Syllabus" em seu nome
        Quando acessar a aba 'livros'
        E pesquisar por 'ISTQB'
        Entao deverá validar se o nome do primeiro livro da lista de resultados contem a palavra "Syllabus"
