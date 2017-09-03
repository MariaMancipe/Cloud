Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :concursos do
    resources :videos
  end

  resources :usuarios
end
