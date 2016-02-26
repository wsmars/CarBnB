Rails.application.routes.draw do
  root to: 'static_pages#index'
  # resource :home, only: [:index]
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resources :cars
    resource :session, only: [:new, :create, :destroy]
  end
end
