class TestChannel < ApplicationCable::Channel
  def subscribed
    stream_from "direct_message_#{params[:user1_id]}_#{params[:user2_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
