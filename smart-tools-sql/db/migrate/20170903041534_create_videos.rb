class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :nombre
      t.integer :duracion
      t.string :ruta_original
      t.string :ruta_convertido
      t.string :codec
      t.datetime :fecha_carga
      t.integer :estado
      t.string :nombre_concursante
      t.string :apellido_concursante
      t.string :correo_concursante
      t.string :mensaje_concursante
      t.references :concurso, foreign_key: true

      t.timestamps
    end
  end
end
