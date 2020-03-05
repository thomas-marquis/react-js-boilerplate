# Reactjs boilerplate

## counfigurer les linters

### installation

**eslint**

pour l'installer et avoir une bonne config de base pour react :

`npm install --save-dev eslint babel-eslint eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react`

penser à créer le fichier `.eslintrc` (ou `.eslintrc.json`, c'est pareil)

pour ne plus autoriser les let ou les var :

`npm i -D eslint-plugin-functional`

doc et installation : https://github.com/jonaskello/eslint-plugin-functional

puis ajouter la règle `"functional/no-let": 2` dans les `rules` de .eslintrc

**prettier**

`npm i -D prettier eslint-config-prettier pretty-quick`

### configurer VScode

extensions vscode requis :

- eslint
- prettier

**attention**, penser à supprimer les autres extensions de formattage s'il y en a (risque de conflit avec l'extension prettier)

aller dans les settings puis chercher 'format on save'. S'assurer que l'option est cochée

S'assurer également que l'option 'enable eslint' est bien cochée
