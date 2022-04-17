## Básicos

### Listar ramas existentes: `git branch`

Ejemplo:

```console
git branch
* main
  feature
```

### Cambiar de rama: `git checkout <rama_existente>`

Ejemplo:

```console
git checkout feature
Switched to branch 'feature'
```

### Crear rama y luego cambiarse a ella con `git checkout`

Se debe usar la opción **-b**.

```console
git checkout -b bug-fixes
Switched to a new branch 'bug-fixes'
```

### Otra manera de cambiar de rama: `git switch`

Ejemplo:

```console
git switch feature
Switched to branch 'feature'
```

### Crear rama y luego cambiarse a ella con `git switch`

Se debe usar la opción **-c**.

```console
git switch -c new-feature
Switched to a new branch 'new-feature'
```
