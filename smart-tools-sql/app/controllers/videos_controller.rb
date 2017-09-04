class VideosController < ApplicationController

  def video_params
    params.require(:video).permit(:original)
  end
end
