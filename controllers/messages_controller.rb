class MessagesController < ApplicationController
  def index
    begin
      @conversation = Conversation.find(params[:conversation_id])
      @messages = @conversation.messages
      respond_to do |format|
        format.json { render json: @messages }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: e.message }, status: :not_found
    end
  end
end