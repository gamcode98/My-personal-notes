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
<ul>
  <!-- ngClass -->
  <!-- Primer forma -->
  <li *ngFor="let city of cities" [ngClass]="['selected','red']">{{city}}</li>
  <!-- Segunda forma -->
  <li *ngFor="let city of cities" [ngClass]="'selected red'">{{city}}</li>
  <!-- Tercer forma -->
  <li *ngFor="let city of cities" [ngClass]="{'selected':true}">{{city}}</li>
  <!-- Con un poco de dinamismo -->
  <li
    *ngFor="let city of cities"
    [ngClass]="{'selected':city === 'Lima', 'red':city !== 'Barcelona'}"
  >
    {{city}}
  </li>
  <!-- ngStyle -->
  <li
    *ngFor="let city of cities"
    [ngStyle]="{'color':'red', 'background':city==='Madrid'? 'blue':'green'}"
  >
    {{city}}
  </li>
  <!-- Es como poner estilos en línea, no muy recomendado -->
</ul>
```
