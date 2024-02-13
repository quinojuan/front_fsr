// types

export type Publisher = {
  id: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento: string;
  fecha_bautismo: string;
  anciano: number | boolean;
  siervo_ministerial: number | boolean;
  precursor_regular: number | boolean;
  precursor_especial: number | boolean;
  misionero: number | boolean;
  hombre: boolean;
  mujer: boolean;
  otras_ovejas: number | boolean;
  ungido: number | boolean;
  _grupo: number;
  _celular: string;
  is_active: number | boolean;
};

export type Informe = {
  id: number;
  publicador_id: number;
  anio_de_servicio: string;
  mes: string;
  participacion_en_el_ministerio: number;
  cursos_biblicos: number;
  precursor_auxiliar: number;
  horas: number;
  notas: string | null;
};

// interfaces