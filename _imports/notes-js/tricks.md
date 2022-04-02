## Trucos

### Encontrar el mayor y menor de un array de números sin loop

```javascript
 const numbers = [2, 4, 8, 15, 99]

  // ❌ ¡¡Demasiado complicado !!
  numbers.reduce(Cacc, val) = {
  return acc > val ? acc : val
  }) // → 99

  // ✅ Simple y fácil de entender
  Math.max(... numbers) // → 99

  // Para buscar el mínimo
  Math.min(... numbers) // → 2
```

### Generar un ID único sin dependencias

```javascript
// 😏 el método de toda la vida
Math.random().toString(36).slice(2);
// → 'i00g7fadr7p'

// 🦾 el recomendado hoy en día
crypto.randomUUID();
// → 'a6d451dc-e073-41df-908e-04cc6b4ff8b9
```

### Eliminando espacios en Javascript

Un espacio en blanco puede ser un salto de línea, una tabulación o el mismo espacio en blanco

```javascript
const nombre = "   Gabriel    ";
// quitamos los espacios de ambos lados
nombre.trim(); // → "Gabriel"

// quitamos los espacios de inicio
nombre.trimStart(); // → "Gabriel    "

// quitamos los espacios finales
nombre.trimEnd(); // → "    Gabriel"
```

Usando Regex tambíen se puede buscar espacios repetidos para convertirlos en sólo uno.

```javascript
"Muchos      espacios".replace(/\s+/g, " ");
// → 'Muchos espacios'
// ' ' → Es un espacio vacio

// Explicación de la Regex /\s+/g
// \s → cualquier carácter que sea un espacio (\r \n \t \f \v)
// + → busca el token anterior una o tantas veces posibles
// g → global. Busca todas las ocurrencias (no para en el primero).
```

El método replace de String hace que lo que encuentra lo sustituya por lo que le pasamos.

Con el mismo código podríamos eliminar todos los espacios del String.

```javascript
"Muchos     espacios   ".replace(/\s/g, "");
// '' → Es un String vacio
// → 'Muchosespacios'
```
