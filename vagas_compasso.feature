#Language: pt

Funcionalidade: Vagas existentes para automação de testes
    Como usuario na CompassoUOL 
    Quero conferir as vagas para automação de testes

    Cenario: Validar se existem vagas para automação de testes
        Dado que esteja na pagina Home 
        Quando acessar a aba 'Cultura'
        E acessar o 'Confira as nossas vagas'
        E acessar o link para a gupy de Transformação de negócios e Desenvolvimento Ágil
        Então deverá validar se a URL foi redirecionada
        E deverá validar se existem vagas para 'automação de testes'