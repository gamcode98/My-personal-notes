## Básicos

### Configurar quien soy

```console
git config --global user.name "Michi"
git config --global user.email "michi@gmail.com"
```

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

### Seleccionar que agregar o no

Se puede usar:

```console
git add -p
```

### Ver el historial de cambios

```console
git log
```

### Agregar todo lo modificado

```console
git add -A
```

Otra manera:

```console
git add .
```

### Cambiar a un commit particular

Primero se realiza un `git log` para elegir el commit al que se quiere ir. Luego se ingresa el siguiente comando
Donde **\<commit>** es el elegido del comando anterior.

```console
git checkout <commit>
```

### Borrar un archivo

Donde **\<archivo>** es el archivo a eliminar.

```console
git rm <archivo>
```

### Restaurar un archivo eliminado

Primero:

```console
git reset HEAD <archivo>
```

Segundo:

```console
git checkout <archivo>
```
