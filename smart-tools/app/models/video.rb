class Video
  include Mongoid::Document
  field :nombre , type: String
  field :duracion, type: BigDecimal
  field :rutaOriginal, type: String
  field :rutaConvertida, type: String
  field :codec, type: String
  field :fechaCarga, type: Date
end
