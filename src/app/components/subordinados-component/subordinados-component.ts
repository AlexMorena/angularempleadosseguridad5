import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleado } from '../../services/service-empleado';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit{
  public subordinados!: Array<Empleado>;

  constructor(
    private _serviceEmpleados: ServiceEmpleado,
    private _cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this._serviceEmpleados.cargarSubordinados().subscribe(response => {
      this.subordinados = response;
      this._cdr.detectChanges();
    })
  }
}
