class VideosController < ApplicationController
  before_action :set_concurso
  before_action :set_concurso_video, only: [:show, :update, :destroy]

  # GET /videos
  def all
    @videos = Video.all
    json_response(@videos)
  end

  # GET /videos/byConcurso/:concurso_id
  def index
    json_response(@concurso.videos)
  end

  # GET /videos/:id
  def show
    json_response(@video)
  end

  # POST /videos/:id/concurso/:concurso_id
  def create
    @concurso.videos.create!(video_params)
    json_response(@concurso, :created)
  end

  # PUT /concursos/:concurso_id/videos/:id
  def update
    @video.update(video_params)
    head :no_content
  end

  #GET /videos/codec/:codec
  def codec
    search_codec
    json_response(@videos_codec)
  end

  #GET /videos/estado/:estado
  def estado
    search_estado
    json_response(@videos_estado)
  end


  private

  def video_params
    params.require(:video).permit(:nombre, :duracion, :codec, :nombre_concursante, :apellido_concursante, :correo_concursante, :fecha_carga, :video, :estado)
  end

  def set_concurso
    @concurso = Todo.find(params[:concurso_id])
  end

  def search_codec
    @videos_codec = Video.find(params[:codec])
  end

  def search_estado
    @videos_estado = Video.find(params[:estado])
  end

  def set_concurso_video
    @video = @concurso.videos.find_by!(id: params[:id]) if @concurso
  end
end
