# Flexbox :package:
### Alan Peña Ortiz 19100234
----


## ¿Qué es flexbox? :question:
<p style="text-align: justify;">
Flexbox es una abreviación de "Flexible box", conocido
en español como módulo de caja flexible, es un "layout" de CSS con el objetivo 
de otorgar una manera eficiente de organizar los elementos en un sitio
web, de manera que se pueden crear diseños altamente adaptativos.  
</p>

## ¿Para qué sirve flexbox? :question:
<p style="text-align: justify;">
Flexbox tiene la finalidad de distribuir el espacio entre los items de
las mismas cajas que nosotros diseñamos con el modelo de caja (box model). 
Flexbox lo que hace es manejar un "array" de una sola dimension, que maneja
el layout en esa dirección nada más; en general puede ser por filas o por columnas. Flexbox es pionero en el diseño responsive, y es casi seguro que lo podemos encontrar en librerías o en diseños responsive. 
</p>

## ¿Cómo funciona flexbox? :question:
<p style="text-align: justify;">
Si bien, "en el pasado" muchos desarrolladores utilizaban otros métodos de
agrupación de elementos por contenedores, era "díficil" poder establecer
un comportamiento adecuado para estos sin complicaciones en el camino. Es aquí
donde flexbox nace. Flexbox funciona de manera sencilla: existe un contenedor,
al que se le llama flex-container, flex-padre, contenedor padre, en general es el contenedor que tiene todos los hijos, que se les llama flex-item, o hijos flex, también conocidos como items o elementos del contenedor.
</p>

## Ejes en flexbox :heavy_exclamation_mark: :crossed_swords:
<p style="text-align: justify;">
Todo lo que hacemos en flexbox esta relacionado a dos simples ejes, el principal y el cruzado o transversal. El eje principal está definido por la propiedad flex-direction, y el eje cruzado es el que está perpendicular a este. El eje principal posee cuatro posibles valores: row, row-reverse, column o column-reverse. Cuando se elige row, el eje principal corre a lo largo de la fila según la dirección de la línea. Cuando se hace column o column-reverse, el eje principal corre en bloque desde el borde superior hasta el final; en pocas palabras, o se colocan al lado o uno encima de otro. Mientras que el eje cruzado va perpendicular al principal, entonces, si el del eje principal es row, el eje cruzado va por columnas.
</p>

<img src="https://habrastorage.org/webt/tk/02/c0/tk02c0vhsgae76m8m5ajulen3nm.png"/>

---

### Ejemplo de flex-container y flex-items

<img src="https://spaceninja.com/content/images/2015/07/flex-intro.svg"/>

---

## Flex-container: propiedades

| Propiedad | Descripción | Valores que puede tomar | Default si aplica
| -- | -- | -- | -- |
| display | Define un contenedor flexbox | flex, inline-flex | 
| flex-wrap | Indica si puede existir un cambio de línea (wrap) | wrap, no-wrap, wrap-reverse | no-wrap
| align-items | Indica cómo se colocan los elementos en la caja relativo al eje transversal | flex-start, flex-end, stretch, center, baseline | stretch
| justify-content | Nos dice cómo se colocan los elementos en una caja flex cuando los elementos no ocupan toda la caja | flex-start, flex-end, center, space-between, space-around | flex-start
| align-content | Indica la alineación de los elementos de la caja flex cuando los elementos no usan todo el espacio disponible en el eje transversal | flex-start, flex-end, center, space-between, space-around, stretch | stretch
| flex-flow | Abreviatura para las propiedades flex-direction y flex-wrap | Primero flex-direction y luego flex-wrap | row no-wrap
| flex-direction | Define la dirección del eje principal (de los elementos flex) | row, row-reverse, column, column-reverse | row

---

## Flex-items: propiedades

| Propiedad | Descripción | Valores que puede tomar | Default si aplica
| -- | -- | -- | -- |
| flex | Es la abreviatura de flex-grow, flex-shrink y flex-basis | Primero flex-grow, después flex-shrink y flex-basis | 0 1 auto
| align-self | Coloca los elementos relativo al eje transversal, que fueron posicionados por la propiedad aling-items del container | flex-start, flex-end, center, stretch, baseline
| flex-shrink | Contrario a flex-grow, nos dice cuanto puede disminuir un elemento en el container | valor + initial o inherit | 1
| flex-grow | Nos indica cuanto puede llegar a crecer un elemento en el container | valor + initial o inherit | 0
| flex-basis | Da el valor inicial del tamaño de un elemento | valor + auto, initial o inherit | auto
| order | Cambia el orden en el que aparecen los elementos individuales | valor + initial o inherit

---

## Referencias :globe_with_meridians:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox  
https://flexboxfroggy.com/ :video_game: