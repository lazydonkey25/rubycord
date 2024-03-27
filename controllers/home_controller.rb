class HomeController < ApplicationController
  def index
    @conversation = Conversation.new
    @conversations = current_user.conversations if current_user
  end

  def create
    @name = params[:conversation][:title]
    @user = User.find_by('lower(name) = ?', @name)
    if @user
      @conversation = current_user.conversations.new(conversation_params)
      if @conversation.save
        redirect_to root_path
      else
        @conversations = Conversation.all
        @conversation = Conversation.new
        render 'index'
      end
    else
      @conversations = Conversation.all
      @conversation = Conversation.new
      flash[:alert] = "User not found"
      render 'index'
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(:title)
  end
end