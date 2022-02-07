# Box model (modelo de caja) 📦
### Alan Peña Ortiz 19100234

---


## Introducción. ¿A qué se refiere el modelo de caja?  📑
<p style="text-align: justify;">
Cuando trabajamos con HTML, generalmente utilizamos etiquetas que son  
interpretadas por el navegador, mostrándolas al usuario de forma visual.  
Por lo general se sigue algo llamado modelo de caja o más conocido en inglés  
como box model. Todas las etiquetas en un documento de HTML pueden ser vistos  
como cajas, ya que la mayoría de las páginas web siguen este modelo, que no es más  
que un término que se utiliza cuando se habla de diseño y layouts.  
Estos modelos de caja se encuentran en todos lados, desde redes sociales, páginas  
informativas, noticieros web, etc.  
</p>

## ¿Qué elementos conforman el box model? ❓  
<p style="text-align: justify;">
El box model está conformado por cuatro partes limitantes escenciales: el límite del contenido,  
el límite del padding, el límite del borde y el límite del margen.  
</p>


<img src="https://miro.medium.com/max/816/1*sKnLrT1TtqWDZg7GWoBCow.png"/>  

1. [Content](#content-contenido)
2. [Padding](#padding-relleno)
3. [Border](#border-borde)
4. [Margin](#margin-margen)


### Content (contenido)
<p style="text-align: justify;">
Su contenido es el final del documento, el real, lo que el usuario puede visualizar directamente  
en el navegador, por ejemplo textos, títulos, imágenes, canvas, entre otros.  
Las dimensiones que maneja son el ancho y la altura.  
</p>

### Padding (relleno)
<p style="text-align: justify;">
Es un espacio que se encuentra entre el contenido y el borde, hace como un área limitada alrededor  
del contenido. Cabe destacar que el padding es transparente, y se puede llegar a confundir a veces  
con el border, que este sí puede tener color. El padding esta delimitado por el border.  
Una de las funciones que tiene el padding es hacer que el contenido no se pegue al borde.  
</p>

### Border (borde)
<p style="text-align: justify;">
Es una línea/borde que esta por encima del padding y el content, es decir, engloba a los dos anteriores  
mencionados. El borde puede tener color, y generalmente se le da un grosor, ya que puede ser más delgado  
o más grueso, según sea el caso. El borde también puede tener distintos estilos, entre los que destacan  
principalmente  
</p>

- none (ningun borde)
- dotted (punteado)
- dashed (similar a dotted pero con lineas)
- solid (un borde sólido)
- double (doble borde sólido)
- groove (similar a un marco de fotografía)
- ridge (similar a solid pero con "raspaduras" en las orillas)
- inset y outset (comúnmente utilizados para "Neumorphism" en CSS)  

<p style="text-align: justify;">
Cabe destacar que los borders pueden ser combinados, es decir, en los cuatro lados del elemento, podrían variar  
y ser combinados.
</p>

### Margin (margen)
<p style="text-align: justify;">
Siendo jerárquico, es el último elemento (o el elemento más superficial) del box model, y hace una separación  
entre el borde del elemento y los elementos vecinos. El margen es opcional, que exista una separación no es  
nada más que la función que tiene el margen, es decir, podrían estar los elementos juntos con un margen de  
valor cero. Al igual que el padding, el margin sigue siendo transparente.Debido a que el margin y el padding son transparentes, 
el color del espacio que llegasen a ocupar dentro del box model, será adoptado por el color del elemento padre próximo.  
</p>

## ¿Qué funcion tiene el box model dentro de la programación web? 🧰 
<p style="text-align: justify;">
Permite al desarrollador web estructurar una página web, sin importar si la página será de uso informativo o dinámico,  
de manera ordenada, de forma que todos los elementos dentro de la misma puedan ser tratados de la misma forma, sin  
importar si se trata de elementos completamente distintos. Permite generar un espaciado correcto, margenes correctos,  
y por supuesto, un aspecto importante del box model es que ofrece un aspecto visual ordenado al usuario, se nota que es más  
limpio. Sin embargo, el box model generalmente no es opcional, es decir, como programadores web nos veremos obligados a seguir  
estas normas durante el proceso del desarrollo de nuestras páginas web.  
</p>

## Navegadores que soportan el box model
<p style="text-align: justify;">
A pesar de que pueda sonar raro, el navegador que se esté utilizando tiene que soportar el diseño con box model; en muchos  
casos, como es el de Google Chrome o IE, asignan sus propios valores cuando alguna propiedad en el elemento no es declarada.  
Hay que tener cuidado con este aspecto, pues a pesar de que nosotros tengamos preferencia hacia un cierto editor, hay muchos  
usuarios que utilizan múltiples navegadores (me incluyo).  
</p>

- [x] Google Chrome
- [x] Internet Explorer y Microsoft Edge
- [x] Firefox
- [x] Opera
- [x] Safari

<p style="text-align: justify;">
Si dedicamos tiempo a las distintas lecturas de la documentación de algun método de Javascript, incluso podemos darnos cuenta de  
que en algunos navegadores, ciertas características no son soportadas por el mismo.
</p>

## Ejemplo de box model 💻
<img src="/Primer%20parcial/ModeloCaja/Box%20model.png"/>

---

### Referencias electrónicas 🌐
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model