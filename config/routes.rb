Rails.application.routes.draw do
  get "/", to: "pages#index"
  root "pages#index"

  namespace :api do
    get "/last_activity", to: "activity#get_last_activity"
  end
end
