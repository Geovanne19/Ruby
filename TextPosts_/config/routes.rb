Rails.application.routes.draw do
  # devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  # 
  
  # get "posts+custom", controller: :posts, action: :index, as: :posts_custom                                               #forma padrão

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create], deafaults: { format: :json } 
    end
  end

  devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'cadastro',
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }

  

  # Teste de usuário logado
  get "/me", to: "users#me"
end
