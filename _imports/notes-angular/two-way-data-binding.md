## Two way data binding

### Enlace de datos bidireccional

Se hace uso de **NgModel** quien crea una instancia del form-control, entonces se lo importa en el archivo **app.module.ts**

```typescript
//app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
})
```

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
