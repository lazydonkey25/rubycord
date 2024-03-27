class ApplicationController < ActionController::Base
    before_action :current_user
    helper_method :current_user

  private

def current_user
  @current_user ||= User.find_by(id: session[:user_id])

  @current_user
end
end