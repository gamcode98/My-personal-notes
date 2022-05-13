## Directivas

### ¿Qué es una directiva?

Las directivas son como atributos que pueden cambiar la apariencia o el comportamiento del DOM element.

### Tipos de directivas

- Estructurales
- De atributos
- Directivas Customs
- Componentes - Son directivas con template

### \*ngFor - Directiva estructural

```typescript
cities = ["Barcelona", "Madrid", "Lima"];
```

```html
<ul>
  <li *ngFor="let city of cities">{{city}}</li>
</ul>
```

### \*ngIf - Directiva estructural

```typescript
//app.component.ts
//También puede ser cualquier otro componente el archivo
  name!: string;
```

```html
<!--app.component.html-->
<p *ngIf="name ">El nombre es: {{name}}</p>
<input type="text" [(ngModel)]="name" />
```
