Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #USUARIOS
  get '/usuarios' => 'usuarios#index'
  get '/usuarios/:id' => 'usuarios#show'
  post '/usuarios' => 'usuarios#create'

  #CONCURSOS
  get '/concursos' => 'concursos#index'
  get '/concursos/:id' => 'concursos#show'
  post '/concursos' => 'concursos#index'
  patch '/concursos/:id' => 'concursos#update'
  delete '/concursos/:id' => 'concursos#destroy'

  #VIDEO

  get '/videos' => 'videos#all'
  get '/videos/:id' => 'videos#show'
  get '/videos/byConcurso/:idConcurso' => 'videos#index'
  post '/videos/:id/concurso/:idConcurso'=>'videos#create'
  get '/videos/:codec' => 'videos#codec'
  get 'videos/:estado' => 'videos#estado'

end
