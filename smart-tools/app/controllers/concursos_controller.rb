class ConcursosController < ApplicationController
  before_action :set_concurso, only: [:show, :update, :destroy]

  #GET /concursos

  def index
    @concursos = Concurso.all
    json_response(@concursos)
  end

  #POST /concursos
  def create
    @concursos = Concurso.create!(concurso_params)
    json_response(@concurso, :created)
  end

  #GET /concursos/:id
  def show
    json_response(@concurso)
  end

  #PUT /concursos/:id
  def update
    @concurso.update(concurso_params)
    head :no_content
  end

  #DELETE /concursos/:id
  def destroy
    @concurso.destroy
    head :no_content
  end

  private

  def concurso_params
    params.permit(:nombre, :url, :fecha_inicio, :fecha_fin, :descripcion, :picture)
    #params.require(:concurso).permit(:nombre, :url, :fecha_inicio, :fecha_fin, :descripcion, :picture)
  end

  def set_concurso
    @concurso = Concurso.find(params[:id])
  end
end
