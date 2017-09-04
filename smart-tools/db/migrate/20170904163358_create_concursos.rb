class CreateConcursos < ActiveRecord::Migration[5.1]
  def change
    create_table :concursos do |t|
      t.string :nombre
      t.datetime :fecha_inicio
      t.datetime :fecha_fin
      t.string :url
      t.string :descripcion

      t.timestamps
    end
  end
end
