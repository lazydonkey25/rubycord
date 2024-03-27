# config/routes.rb

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  resources :conversations do
    resources :messages, only: [:index]
  end
  
  # Defines the root path route ("/")
  root "home#index"
  post '/register', to: 'users#create'
  get '/register', to: 'users#new'
  delete '/logout', to: 'sessions#destroy'
  post 'index', to: 'home#create'
end