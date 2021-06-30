![](images/sernegra_marca.png)

X SERNEGRA
---

O modelo original era tão caótico que realmente se perderia mais tempo
tentando remendá-lo do que fazendo algo novo. Este novo modelo utiliza
apenas o [Bootstrap](https://getbootstrap.com/) (versão 5.0.2) e o
leiaute é baseado no tema de exemplo
[Carousel](https://getbootstrap.com/docs/5.0/examples/carousel/).

# Estrutura do projeto
Os arquivos estão organizados da seguinte forma:
- `assets` : Recursos usados no projeto.
    - `data` : Arquivos de dados para carregamento dinâmico.
    - `dist` : Arquivos de distribuição, não dá pra editar.
        - `css`
            - `bootstrap.min.css` : Parte CSS do **Bootstrap** já minificado.
            - `bootstrap.min.css.map` : Arquivo de mapa do CSS do **Bootstrap**.
            - `simple-datatables.css` : Parte CSS do [Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables).
        - `js`
            - `bootstrap.bundle.min.js` : Parte JavaScript do **Bootstrap** já minificado.
            - `bootstrap.bundle.min.js.map` : Arquivo de mapa do JS do **Bootstrap**.
            - `simple-datatables.js` : Parte JavaScript do [Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables).
    - `carousel.css` : A parte CSS do exemplo usado no **carousel**.
- `css` : Os arquivos CSS do projeto.
    - `style.css` : O arquivo de CSS específico do projeto.
- `feirafro` : A listagem de empreendedores.
    - `index.html` : A página HTML propriamente dita.
- `images`
    - `carousel` : Imagens de fundo do carrossel.
    - `social` : Imagens para as redes sociais.
    - `sernegra_marca.png` : A imagem usada neste arquivo.
    - `sernegra_logo_and_slogan_v2.png` : Arte do evento com o _slogan_.
- `js` : Os arquivos JavaScript do projeto.
- `index.html` : A página HTML propriamente dita.
- `favicon.png` : Ícone para favorito.
- `README.md` : Este arquivo.

Estou usando o [Editorconfig](https://editorconfig.org) para forçar a
a formatação dos arquivos, alguns editores
[suportam por padrão](https://editorconfig.org/#pre-installed) e outros
precisam do [plugin](https://editorconfig.org/#download).

# Como editar
Abra os arquivos no seu editor de textos preferido para alterá-los e use
um navegador web para verificar o estado do trabalho. Uma alternativa para
visualizar a página como se ela já estivesse num servidor é usar o servidor
HTTP embutido do Python e acessá-la em http://localhost:8000

```
python -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
127.0.0.1 - - [27/Jun/2021 12:30:58] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [27/Jun/2021 12:30:58] "GET /assets/dist/css/bootstrap.min.css HTTP/1.1" 200 -
127.0.0.1 - - [27/Jun/2021 12:30:58] "GET /css/style.css HTTP/1.1" 200 -
127.0.0.1 - - [27/Jun/2021 12:30:58] "GET /assets/dist/js/bootstrap.bundle.min.js HTTP/1.1" 200 -
127.0.0.1 - - [27/Jun/2021 12:30:58] "GET /assets/dist/carousel.css HTTP/1.1" 200 -
127.0.0.1 - - [27/Jun/2021 12:30:58] code 404, message File not found
127.0.0.1 - - [27/Jun/2021 12:30:58] "GET /favicon.ico HTTP/1.1" 404 -
```

O arquivo "favicon.ico" não existe, logo o erro de não ter sido encontrado.

# O que falta fazer
A parte mais importante, o que falta:
- ~Faltam todas as imagens~ (agora falta menos);
- ~Falta editar o carrossel colocando as chamadas necessárias (eu incluí
  a feirafro como exemplo)~;
- ~Cores dos links e das outras coisas~ (mudem apenas no "style.css", vejam
  que criei um padrão ao invés de redefinir o CSS do Bootstrap);
- Os dados dos palestrantes;
- Incluí parte do conteúdo que já está na Even3 mas valeria a pena que
  fosse feita uma validação/atualização;
- Os dados do IFAM lá no final;
- Remover os comentários do HTML;
- O botão de "Realizar Inscrição" apontar pro Even3 e
- Colocar o relógio, posso ver o que precisa ser feito (ou podemos escrever
  um?).

---
Bom trabalho para vocês!