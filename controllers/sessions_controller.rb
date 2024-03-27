class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, notice: "Logged in!"
      puts session.inspect
    else
      flash.now[:alert] = "Email or password is invalid"
      render "new"
      puts session.inspect
    end
  end

  def destroy
    reset_session
    redirect_to root_url, notice: "Logged out!"
  end
end