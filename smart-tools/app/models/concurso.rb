class Concurso < ApplicationRecord
  has_many :videos, dependent: :destroy
  validates_presence_of :nombre, :fecha_inicio, :fecha_fin, :url, :descripcion
  mount_uploader :picture, PictureUploader
end
