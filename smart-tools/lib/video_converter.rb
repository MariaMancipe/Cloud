require 'streamio-ffmpeg'

def move_upload_to_original(path)
  new_path = File.basename(path)
  File.rename(path, "./video/original/#{new_path}")
end

def convert_to_mp4(path)
  puts "convert to mp4 #{path}"
  movie = FFMPEG::Movie.new(path)
  converted = "./video/converted/"
  new_path = File.basename(path)
  new_path = converted+ new_path[0,new_path.length-4]

  movie.transcode("#{new_path}.mp4", %w(-acodec aac -vcodec h264 -strict -2 -threads 10 -threads 10))
  move_upload_to_original(path)
end

def search_files

  original = "./video/original"
  converted = "./video/converted"
  upload = "./video/upload/"
  Dir.mkdir(original) unless File.exist?(original)
  Dir.mkdir(converted) unless File.exist?(converted)
  inicio = Time.now
  Dir.entries(upload).select {|f| convert_to_mp4(upload+f) unless File.directory?(f)}
  fin = Time.now
  puts "Miliseconds used to convert 1 video #{(fin-inicio)*1000} with 10 threads"

  puts "search files"
  # convert_to_mp4(path)
end

search_files
