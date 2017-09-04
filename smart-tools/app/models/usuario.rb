class Usuario < ApplicationRecord
  validates_presence_of :nombre, :apellido, :empresa, :correo, :clave
end
