<!-- 

	El siguiente codigo es un archivo SFC (Single File Component) , en donde encapsula el estilo, logica y el template html de una vista en vue, en ella encontraras los bloques <template> , <script> y <style> 

/***PRUEBA CSS ****///

Escribir el código CSS necesario en el template html de vue para:


Todos los textos del body estén centrados


El div contenedor tenga un ancho fijo de 600px

El div contenedor esté centrado horizontalmente

El div contenedor debe tener un margen interno (padding) de 10px y un margin abajo de 10px

Agregar un borde de 1px (dotted o dashed) gris al contenedor.



(Lo que se especifica DENTRO del contenedor no debe afectar a los que están fuera, salvo que diga expresamente dentro y fuera)

El bloque 1 dentro del contenedor debe tener un ancho de 100px y un margen arriba de 70px

El bloque 2 dentro del contenedor debe tener un ancho de 100px



Los bloques dentro del contenedor deben flotar hacia la izquierda y tener un margen de 5px en todas las direcciones.

Los bloques fuera del contenedor no deben flotar





Agregar un div dentro del código html que utilice la clase "clear" ya definida para asegurar que el primer conjunto de bloques 1 y 2 queden dentro del borde del contenedor



Los bloques 1 (dentro y fuera) deben tener fondo rojo, texto blanco

Los bloques 2 (dentro y fuera) deben tener fondo amarillo, texto negro



El  párrafo (<p></p>) del bloque1 dentro del contenedor debe aparecer en itálica.

El  párrafo (<p></p>) del bloque2 dentro y fuera del contenedor debe aparecer en negrita.

Todos los párrafos (<p></p>) deben tener un margen interno de 10px (padding)



Debe verse "virtualmente" igual en IE, Firefox y Safari o Chrome

Se debe tratar de aprovechar la herencia.


/*PRUEVA VUE Js  */

- En el template html dentro del div con la clase 'v-container', generar un listado de divs con la data  del arreglo(array) 'myarray', que esta vacio, 
 editar el array para que contenga 5 objetos, cada objeto con la siguientes propiedades : 'id' tipo entero, name: tipo string, roles: tipo array de enteros(minimo dos numeros en el array). 
 Ej de objeto : {id:1, name:'Carlos', roles: [1,2]}

- En cada div generado imprimir la siguiente salida Nombre: "nombre del elemento" , roles : "string de los numeros de roles separados por comas",
- En cada div que sea de un elemento con indice impar agregarle un background gris  #e6e6e6, con binds de style o class  y ocultar los elementos con índice par.

- En el div con class btn , agregar un evento click de vue con una funcion que al hacer click genere una salida, en el dato output que es un string , en este string se edite , 
y se imprima en el div de clase 'output' de la siguiente manera 'el total de listado es: 'total', el resultado en total debe ser ser un dato o variable computada.

-->


<template>
    <html>
        <head> </head>

        <body>
            <div id="contenedor">
                <div class="bloque1">
                    <p>Este es el Bloque 1 dentro del contenedor.</p>
                </div>

                <div class="bloque2">
                    <p>
                        Este es el contenido del Bloque 2 dentro del contenedor,
                        este contiene mas texto, por eso debe ser mas largo.
                    </p>
                </div>
                <div class="clear"></div>
            </div>

            <div class="bloque1">
                <p>Este es el Bloque 1 fuera del contenedor.</p>
            </div>

            <div class="bloque2">
                <p>Este es el Bloque 2 fuera del contenedor.</p>
            </div>

            <div class="v-container">
                <div
                    v-for="(item, index) in myArray"
                    :key="item.id"
                    :class="{
                        hidden: index % 2 === 0,
                        grayBg: index % 2 !== 0,
                    }"
                >
                    <strong>Nombre: </strong>{{ item.name }},
                    <strong>Roles: </strong> {{ item.roles.join(", ") }}
                </div>
            </div>
            <div class="btn" @click="generateOutput">Generar</div>
            <div class="output">
                {{ output }}
            </div>
        </body>
    </html>
</template>

<script>
import myArray from "./myArray.js";
export default myArray;
</script>

<style type="text/css">
@import "./styles.css";
</style>

