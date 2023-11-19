import typescript from '../../assets/imagens/cursos/typescript.png'
import css from '../../assets/imagens/cursos/css.png'
import git from '../../assets/imagens/cursos/git.png'
import javascript from '../../assets/imagens/cursos/javascript.png'
import java from '../../assets/imagens/cursos/java.png'
import logica from '../../assets/imagens/cursos/logica.jpg'
import algebra from '../../assets/imagens/cursos/algebra.jpg'
import matematica_basica from '../../assets/imagens/cursos/matematica_basica.jpg'
import financeira from '../../assets/imagens/cursos/financeira.jpg'
import pre_calculo from '../../assets/imagens/cursos/pre_calculo.jpg'
import excel from '../../assets/imagens/cursos/excel.jpg'
import bi from '../../assets/imagens/cursos/bi.jpg'
import soft_skills from '../../assets/imagens/cursos/soft_skills.jpg'
import entrevista from '../../assets/imagens/cursos/entrevista.jpg'
import quimica from '../../assets/imagens/cursos/quimica.jpg'



export const listaCursos = [
    {
        cursoId: 1,
        titulo: "Introdução ao Typescript",
        descricao: 
            "O curso de Typescript para iniciantes tem como objetivo proporcionar aos " +
            "estudantes uma compreensão clara e profunda dos conceitos fundamentais " + 
            "dessa linguagem de programação. Durante o curso, serão abordados desde " +
            "os conceitos básicos, como tipos de dados, interfaces, classes e funções, "+
            "até tópicos mais avançados, como generics, decorators e namespaces.",
        cargaHoraria: "20 horas",
        dataAtualizacao: "15/08/2023",
        mediaAvaliacao: "0",
        categoria: "Desenvolvimento de Software",
        imagem: typescript,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 2,
        titulo: "Pare de chutar CSS",
        descricao: 
            "Este curso tem o objetivo explorar o mundo do CSS explicando " +
            "suas propriedades e conceitos. Além disso, o curso também " + 
            "busca desenvolver a habilidade dos estudantes em estilizar " +
            "páginas web de forma mais precisa e consciente, deixando de, "+
            "lado o chute de valores na hora de aplicar estilos. Para isso, "+
            "serão apresentadas técnicas e estratégias que ajudam a "+
            "entender melhor como as propriedades do CSS funcionam e "+
            "como elas podem ser usadas de forma mais eficiente.",
        cargaHoraria: "10 horas",
        dataAtualizacao: "02/04/2023",
        mediaAvaliacao: "0",
        categoria: "Desenvolvimento de Software",
        imagem: css,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 3,
        titulo: "Git e Github na vida real",
        descricao: 
            "O curso de Git e Github no mundo real tem como objetivo preparar " + 
            "os estudantes para o uso dessas ferramentas de controle de versionamento "+ 
            "de código em um ambiente de desenvolvimento profissional. "+ 
            "Durante o curso, serão abordados desde os conceitos básicos do Git, " + 
            "como commits, branches e merges, até tópicos mais avançados, como a " + 
            "integração com outras ferramentas de desenvolvimento e a " + 
            "colaboração em projetos com múltiplos desenvolvedores.",
        cargaHoraria: "10 horas",
        dataAtualizacao: "02/04/2023",
        mediaAvaliacao: "0",
        categoria: "Desenvolvimento de Software",
        imagem: git,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 4,
        titulo: "Javascript",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Desenvolvimento de Software",
        imagem: javascript,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 5,
        titulo: "Java",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Desenvolvimento de Software",
        imagem: java,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
        
    },
    {
        cursoId: 6,
        titulo: "Lógica de Programação",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Desenvolvimento de Software",
        imagem: logica,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 7,
        titulo: "Algebra",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Matemática",
        imagem: algebra,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 8,
        titulo: "Matemática Básica",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Matemática",
        imagem: matematica_basica,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 9,
        titulo: "Matemática Financeira",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Matemática",
        imagem: financeira,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 10,
        titulo: "Excel",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Negócios",
        imagem: excel,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 11,
        titulo: "Power BI",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Negócios",
        imagem: bi,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 12,
        titulo: "Química Básica",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Química",
        imagem: quimica,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 13,
        titulo: "Desenvolvendo minhas Soft Skills",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Negócios",
        imagem: soft_skills,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },
    {
        cursoId: 14,
        titulo: "Preparação para entrevistas",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Negócios",
        imagem: entrevista,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },  
    {
        cursoId: 15,
        titulo: "Pré-cálculo",
        descricao: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lorem imperdiet tincidunt elementum " + 
            "Ut ornare sapien a felis feugiat sollicitudin. Pellentesque vitae turpis risus. "+ 
            "Quisque eu accumsan est. Mauris a enim at arcu placerat lacinia. "+ 
            "Phasellus vulputate, metus sed ultricies tincidunt, enim diam sagittis sapien, ut porta libero nunc vel massa. " + 
            "Integer purus arcu, suscipit vel rhoncus non, fermentum rutrum felis. " +
            "Maecenas leo est, accumsan ut tincidunt et, lobortis at nibh.", 
        cargaHoraria: "20 horas",
        dataAtualizacao: "09/11/2023",
        mediaAvaliacao: "0",
        categoria: "Matemática",
        imagem: pre_calculo,
        aulas: [
            {
                aula_id: 1 ,
                titulo: "Aula 01 - Introdução ao tema",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 2 ,
                titulo: "Aula 02 - Ambientação",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 3 ,
                titulo: "Aula 03 - Primeiros passsos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 4 ,
                titulo: "Aula 04 - Praticando",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 5 ,
                titulo: "Aula 05 - Mais exemplos",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 6 ,
                titulo: "Aula 06 - Boas práticas",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 7 ,
                titulo: "Aula 07 - Tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 8 ,
                titulo: "Aula 08 - Praticando tópicos avançados",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 9 ,
                titulo: "Aula 09 - Projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            },
            {
                aula_id: 10 ,
                titulo: "Aula 10 - Finalizando o projeto",
                conteudo: "Conteúdo da Aula" , 
                video: "https://www.youtube.com/watch?v=e41QFmkqaEY", 
            }
        ],
        exercicios: [
            {
                id: 1,
                titulo: "01 - Exercicio de Fixação",
            },
            {
                id: 2,
                titulo: "02 - Faça você mesmo ...",
            },
            {
                id: 3,
                titulo: "Teste de conhecimento",
            },
            {
                id: 4,
                titulo: "Desafio final",
            }
        ],
        materiais:[
            {
                id: 1,
                titulo: "Material 01 - Guia Federal de Requisitos e Obrigações de Segurança da Informação",
                tipo: "PDF",
                link: "https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_requisitos_obrigacoes.pdf"
            },
            {
                id: 2,
                titulo: "Material 02 - LGPD - Lei Geral de Proteção de Dados Pessoais",
                tipo: "Link",
                link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            }
        ]
    },  
]


export const cursosAndamento = [
    {
        id: 1,
        titulo: "Javascript",
        progresso: 25,
    },
    {
        id: 2,
        titulo: "Preparação para entrevistas",
        progresso: 60,
    },
    {
        id: 3,
        titulo: "Matemática Financeira",
        progresso: 16,
    },
    {
        id: 4,
        titulo: "Typescript",
        progresso: 50,
    },
    {
        id: 5,
        titulo: "Git e GitHub na vida real",
        progresso: 90,
    },
    {
        id: 6,
        titulo: "Java",
        progresso: 90,
    },
    {
        id: 7,
        titulo: "Excel",
        progresso: 20,
    }
    
    
]

export const cursoConquistas = [
    {
        id: 1,
        titulo: "React",
        sigla: "R",
        data_finalizacao: "10/11/2023"
    },
    {
        id: 2,
        titulo: "Angular",
        sigla: "A",
        data_finalizacao: "10/10/2022"
    },
    {
        id: 3,
        titulo: "Comunicação Interpessoal",
        sigla: "CI",
        data_finalizacao: "09/09/2023"
    },
    {
        id: 4,
        titulo: "Canva",
        sigla: "C",
        data_finalizacao: "08/08/2023"
    },
    {
        id: 5,
        titulo: "Power BI",
        sigla: "BI",
        data_finalizacao: "20/04/2022"
    },
    {
        id: 6,
        titulo: "Spring Boot",
        sigla: "SB",
        data_finalizacao: "23/09/2023"
    }
]

export const cursosFavoritos = [
    {
        id: 1,
        titulo: "Excel",
        modulos: 3,
        aulas: 12,
        exercicios: 5
    },
    {
        id: 2,
        titulo: "Desenvolvendo minhas soft skills",
        modulos: 1,
        aulas: 12,
        exercicios: 12
    }
]