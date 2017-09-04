require 'streamio-ffmpeg'

def convert_to_mp4(path)
  puts "convert to mp4 #{path}"
  movie = FFMPEG::Movie.new(path)
  options = {strict: "experimental", video_codec:"h264", audio_codec:"aac"}
  new_path = path[0,path.length-5]
  movie.transcode("#{new_path}.mp4",options)
end

def search_files
  Dir.entries("./video").select {|f| !File.directory? puts f}
  puts "search files"
  path="./video/Stromae - Ave Cesaria (Live on KEXP).avi"
  convert_to_mp4(path)
end

search_files
