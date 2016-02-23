Rails.application.routes.draw do
  root to: 'home#index'
  # resource :home, only: [:index]
  resources :users, only: [:new, :create] do
    resources :cars, only: [:index]
  end
  resource :session, only: [:new, :create, :destroy]
end
