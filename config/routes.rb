Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  root 'static_pages#index'
  namespace :api do
    namespace :v1 do
      resources :games, only: [:show, :update]
    end
  end
end
