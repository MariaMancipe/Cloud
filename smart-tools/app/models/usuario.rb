class Usuario
  include Mongoid::Document
  field :nombre, type: String
  field :apellido, type: String
  field :correo, type: String
  field :empresa, type: String
  field :rol, type: String
  field :clave, type: String

  embeds_many :concursos
end
