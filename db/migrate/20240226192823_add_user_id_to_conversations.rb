class AddUserIdToConversations < ActiveRecord::Migration[6.0]
  def up
    add_reference :conversations, :user, null: true, foreign_key: true

    # Delete all existing conversations
    Conversation.delete_all

    change_column_null :conversations, :user_id, false
  end

  def down
    remove_reference :conversations, :user
  end
end