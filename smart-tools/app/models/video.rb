class Video < ApplicationRecord
  belongs_to :concurso
  #validates_presence_of :nombre, :duracion, :codec, :fecha_carga, :nombre_concursante, :apellido_concursante, :correo_concursante
  mount_uploader :video, VideoUploader
  after_create :set_ruta_convertida

  def set_ruta_convertida

  end
end
