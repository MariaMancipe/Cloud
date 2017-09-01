class Concurso
  include Mongoid::Document

  field :nombre, type: String
  field :url, type: String
  field :fechaInicio, type: DateTime
  field :fechaFin, type: DateTime
  field :descripcion, type: String
  field :rutaBanner, type: String

  embeds_many :videos
  
  embedded_in :usuarios

end
