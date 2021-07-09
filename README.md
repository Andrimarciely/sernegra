X SERNEGRA
---

O modelo original era tão caótico que realmente se perderia mais tempo
tentando remendá-lo do que fazendo algo novo. Este novo modelo utiliza
apenas o [Bootstrap](https://getbootstrap.com/) (versão 5.0.2, CSS e
JS) e o leiaute é baseado no tema de exemplo
[Carousel](https://getbootstrap.com/docs/5.0/examples/carousel/).

Ainda faz uso do
[Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables).
para a criação de tabelas dinâmicas com paginação e filtragem.

# Estrutura do projeto
Os arquivos estão organizados da seguinte forma:
- `assets/` : Recursos usados no projeto.
    - `data/` : Arquivos de dados para carregamento dinâmico.
    - `dist/` : Arquivos de distribuição, não dá pra editar.
        - `css/`
        - `js/`
- `css/` : Os arquivos CSS do projeto.
- `feirafro/` : A listagem de empreendedores.
- `images/`
    - `carousel/` : Imagens de fundo do carrossel.
    - `social/` : Imagens para as redes sociais.
- `js/` : Os arquivos JavaScript do projeto.
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

---
Bom trabalho para vocês!