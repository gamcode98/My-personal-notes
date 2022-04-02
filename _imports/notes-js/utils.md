## Utilidades

### Crear un modal nativo con html

```html
<dialog>
  <h1>¿Sabías abrir modales así?</h1>
  <p>¡Y es totalmente nativo!</p>
  <button id="cancel">Cerrar</button>
</dialog>

<button id="show">Abrir modal</button>
```

```javascript
const d = document;
const $dialog = d.querySelector("dialog");
const $show = d.querySelector('#show')
const $cancel d.querySelector('#cancel')

$show.addEventListener('click', () = $dialog.showModal())
$cancel.addEventListener('click', () = $dialog.close())
```

Ver ejemplo en la documentación de MDN: [modal](https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog)

### Recuperar los datos de un formulario

```html
<form>
  <input type="email" placeholder="Ingresa tu correo" required />
  <br />
  <input type="password" placeholder="Ingresa tu contraseña" required />
  <br />
  <input type="submit" value="Enviar" />
</form>
```

```javascript
const d = document;
d.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  alert(JSON.stringify(data));
});
```
