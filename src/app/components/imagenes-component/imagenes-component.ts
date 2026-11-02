import { Component } from '@angular/core';
import { ServiceEmpleado } from '../../services/service-empleado';

@Component({
  selector: 'app-imagenes-component',
  standalone: false,
  styleUrl: './imagenes-component.css',
  templateUrl: './imagenes-component.html',
})
export class ImagenesComponent {

  constructor(
    private _serviceEmpleado: ServiceEmpleado
  ){}

  subirImagen(input: HTMLInputElement): void {
    // 1. Cogemos el archivo que seleccionó el usuario
    let file = input.files![0];

    // 2. Preparamos el lector de archivos de JavaScript
    let reader = new FileReader();
    reader.readAsDataURL(file);

    // 3. Cuando termina de leer la imagen, extraemos el base64 y llamamos al servicio
    reader.onload = () => {
      let base64 = (reader.result as string).split(',')[1];

      // 4. Enviamos los datos a tu servicio
      this._serviceEmpleado.subirArchivo(file.name, base64).subscribe((response) => {
        console.log('¡Subido!', response);
      });
    };
  }
}
