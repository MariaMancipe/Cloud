class Video
  include Mongoid::Document
  field :nombre , type: String
  field :duracion, type: BigDecimal
  field :rutaOriginal, type: String
  field :rutaConvertida, type: String
  field :codec, type: String
  field :fechaCarga, type: Date
  #El estado es 0 si está sin convertir, 1 si está en proceso de conversión y 2 si ya está convertido
  field :estado, type: Integer

  embedded_in :concurso
end
