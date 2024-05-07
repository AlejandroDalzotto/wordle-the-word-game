# Stack

- NextJS | Framework principal
- TailwindCSS | Styling
- Zustand | Manejo de estado

## ¿Cómo jugar a Wordle?

---
El objetivo del juego es simple, adivinar la palabra oculta. La palabra tiene 5 letras y tienes 6 intentos para adivinarla.

Cada intento debe ser una palabra válida. En cada ronda el juego pinta cada letra de un color indicando si esa letra se encuentra o no en la palabra y si se encuentra en la posición correcta.
- VERDE significa que la letra está en la palabra y en la posición CORRECTA.
- AMARILLO significa que la letra está presente en la palabra pero en la posición INCORRECTA.
- GRIS OSCURO significa que la letra NO está presente en la palabra.

### Letras repetidas
La palabra oculta puede tener letras repetidas. En ese caso, las pistas son independientes para cada letra y tienen prioridad (verde es mayor a amarillo).