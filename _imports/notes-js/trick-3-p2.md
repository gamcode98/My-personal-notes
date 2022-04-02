```javascript
"Muchos      espacios".replace(/\s+/g, " ");
// → 'Muchos espacios'
// ' ' → Es un espacio vacio

// Explicación de la Regex /\s+/g
// \s → cualquier carácter que sea un espacio (\r \n \t \f \v)
// + → busca el token anterior una o tantas veces posibles
// g → global. Busca todas las ocurrencias (no para en el primero).
```
