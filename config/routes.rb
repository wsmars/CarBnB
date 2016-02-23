Rails.application.routes.draw do
  root to: redirect("/users")

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
