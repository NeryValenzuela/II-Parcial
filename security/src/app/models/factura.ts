export class Factura {
  constructor(
    public id: number,
    public total: number,
    public creado: Date,
    public empleado: string,
    public estado: string
    ) {}

}
