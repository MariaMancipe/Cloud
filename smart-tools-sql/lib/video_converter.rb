require 'streamio-ffmpeg'

def move_upload_to_original(path)
  new_path = File.basename(path)
  File.rename(path, "./video/original/#{new_path}")
end

def convert_to_mp4(path)
  puts "convert to mp4 #{path}"
  movie = FFMPEG::Movie.new(path)
  new_path = File.basename(path)
  new_path = "./video/converted/"+ new_path[0,new_path.length-4]
  movie.transcode("#{new_path}.mp4", %w(-acodec aac -vcodec h264 -strict -2))
  move_upload_to_original(path)
end

def search_files
  #Dir.entries("./video/upload").select {|f| !File.directory? puts f}
  puts "search files"
  path="./video/upload/Stromae - Ave Cesaria (Live on KEXP).avi"
  convert_to_mp4(path)
end

search_files
