class Video < ApplicationRecord
  belongs_to :concurso

  validates_presence_of :nombre, :duracion, :codec, :fecha_carga, :ruta_original, :nombre_concursante, :apellido_concursante, :correo_concursante
  mount_uploader :original, VideoUploader
end
