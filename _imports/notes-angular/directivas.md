## Directivas

### ¿Qué es una directiva?

Las directivas son como atributos que pueden cambiar la apariencia o el comportamiento del DOM element.

### Tipos de directivas

- Estructurales
- De atributos
- Directivas Customs
- Componentes - Son directivas con template

### \*NgFor - Directiva estructural

```typescript
cities = ["Barcelona", "Madrid", "Lima"];
```

```html
<ul *ngFor="let city of cities">
  <li>{{city}}</li>
</ul>
```

### \*NgIf - Directiva estructural

```typescript
//app.component.ts
//También puede ser cualquier otro componente el archivo
  name!: string;
```

```html
<!--app.component.html-->
<p>El nombre es: {{name}}</p>
<input type="text" [(ngModel)]="name" />
```
