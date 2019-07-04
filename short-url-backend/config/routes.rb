Rails.application.routes.draw do
  resources :url
    get '/redirect', to: 'url#redirect'
end
