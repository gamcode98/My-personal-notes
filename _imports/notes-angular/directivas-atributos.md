## Directivas de atributos

### Formas de agregar estilos con ngClass, ngStyle

```css
.selected {
  background-color: rebeccapurple;
  color: white;
  padding: 1rem;
}

.unSelected {
  background-color: white;
  color: black;
}

.red {
  color: red;
}
```

```html
<ul *ngFor="let city of cities">
  <!-- ngClass -->
  <!-- Primer forma -->
  <li [ngClass]="['selected','red']">{{city}}</li>
  <!-- Segunda forma -->
  <li [ngClass]="'selected red'">{{city}}</li>
  <!-- Tercer forma -->
  <li [ngClass]="{'selected':true}">{{city}}</li>
  <!-- Con un poco de dinamismo -->
  <li [ngClass]="{'selected':city === 'Lima', 'red':city !== 'Barcelona'}">
    {{city}}
  </li>
  <!-- ngStyle -->
  <li [ngStyle]="{'color':'red', 'background':city==='Madrid'? 'blue':'green'}">
    {{city}}
  </li>
  <!-- Es como poner estilos en línea, no muy recomendado -->
</ul>
```
