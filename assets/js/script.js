let formulario = document.getElementById('form-client');
let contador = 0;
const contenido = document.getElementById("body");
let registro = "";

formulario.addEventListener("submit",function(e){
    e.preventDefault()
    // el cliente es maytor de edad
    const edadCliente = edad.value;
    if (edadCliente >= 18) {
        contador++ ;
        registro +=`  
        <tr>
          <th scope="row">1</th>
          <td>${contador}</td>
          <td>${nombre.value}</td>
          <td>${apellido.value}</td>
          <td>${rut.value}</td>
          <td>${edad.value}</td>
        </tr>
        `;
        contenido.innerHTML = registro;
        formulario.reset();
    } else {
        alert('El cliente debe ser mayor de edad')
    }

});



