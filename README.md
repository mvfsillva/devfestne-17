![Devfest image](devfest.png)

_Progressive Web App oficial da 4º edição do GDG Devfest Nordeste 2017._

___

## Setup
Esta aplicação usa o template do [`VueJS`](https://vuejs.org/) para [PWA](https://github.com/vuejs-templates/pwa). Siga as instruções abaixo para instalar e executar este projeto localmente em seu computador.

1. Antes de tudo instale o [`NodeJS`](https://nodejs.org/) na versão 4 ou superior.
2. :point_right: [`Fork`](https://github.com/mvfsillva/devfestne-17/fork) este repositório e clone localmente.

``` bash
git clone https://github.com/mvfsillva/devfestne-17.git && cd devfestne-17
```

#### Dependências

Os comandos abaixos são excutados via `npm`, mas você pode usar se preferir o [`yarn`](https://yarnpkg.com/pt-BR/).

``` bash
# instalando dependências
npm install
```

Tudo pronto! Basta agora executar o projeto.

``` bash
# inicia o servidor de desenvolvimento no endereço localhost:8080
npm run dev
```

#### Build

``` bash
# build para produção com minificação dos arquivos
npm run build
```

## Atualizar o fork

Use o `git` para atualizar seu fork para a versão mais recente da master.

``` bash
git remote add upstream https://github.com/mvfsillva/devfestne-17.git
git fetch upstream
git merge upstream/master # OU git merge upstream/develop
# resolva os conflitos de merge no seu editor
git add . -u
git commit -m 'Updated to the latest version'
```

## Contribuindo

Este projeto está aberto para contribuições. Você deve sempre acompanhar as nossas [issues](https://github.com/mvfsillva/devfestne-17/issues). Sinta-se à vontade para enviar PR. Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato.

#### workflow geral

1. Fork este repositório
2. Crie a brach para sua feature (git checkout -b my-new-feature)
3. Faça suas mudanças, novas implementações
4. Commit suas modificações (git commit -am 'Added some feature')
6. Faça o Push para sua branch (git push origin my-new-feature)
7. Crie um novo Pull Request

**Mantenedores:** [Jader Gomes](https://github.com/jjaderg) e [Marcus Silva](https://github.com/mvfsillva)
