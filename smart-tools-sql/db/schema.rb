# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170903041534) do

  create_table "concursos", force: :cascade do |t|
    t.string "nombre"
    t.string "url"
    t.datetime "fecha_inicio"
    t.datetime "fecha_fin"
    t.string "descripcion"
    t.string "banner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "nombre"
    t.string "apellido"
    t.string "correo"
    t.string "empresa"
    t.string "rol"
    t.string "clave"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "videos", force: :cascade do |t|
    t.string "nombre"
    t.integer "duracion"
    t.string "ruta_original"
    t.string "ruta_convertido"
    t.string "codec"
    t.datetime "fecha_carga"
    t.integer "estado"
    t.string "nombre_concursante"
    t.string "apellido_concursante"
    t.string "correo_concursante"
    t.string "mensaje_concursante"
    t.integer "concurso_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["concurso_id"], name: "index_videos_on_concurso_id"
  end

end
