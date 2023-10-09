const dadosPessoais = [
        {
            nome: "cpf",
            conteudo: "123.456.789-10"
        },
        {
            nome: "Nascimento",
            conteudo: "01/01/2000"
        }, {
            nome: "e-mail",
            conteudo: "vendramel@fatec.sp.gov.br"
        }, {
            nome: "perfil",
            conteudo: "Aluno"
        }
    ]

const dadosAcademicos = [{
        nome: "curso",
        conteudo: "Engenharia de Software"
    }, {
        nome: "Período",
        conteudo: "Manhã"
    }, {
        nome: "Ingresso",
        conteudo: "2021"
    }, {
        nome: "RA",
        conteudo: "100100200"
    }
    ]

const lista = [
        {
          id: 1,
          title: 'Dados Pessoais',
          icon: 'user'
        },
        {
          id: 2,
          title: 'Dados Acadêmicos',
          icon: 'book'
        },
        {
          id: 3,
          title: 'Segurança e privacidade',
          icon: 'shield'
        },
        {
          id: 4,
          title: 'Informar um problema',
          icon: 'alert-circle'
        }
      ];

export { dadosPessoais, dadosAcademicos, lista}