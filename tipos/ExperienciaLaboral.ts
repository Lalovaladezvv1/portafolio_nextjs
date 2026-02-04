export interface ExperienciaLaboral {
  id: number;
  puesto: string;
  empresa: string;
  fechaInicio: string;
  fechaFin?: string;
  lugar: string;
  modalidad: string;
  descripcion?: string;
  urlLogoEmpresa?: string;
  activo: boolean;
}
