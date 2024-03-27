class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|

      t.timestamps
      t.string :name
      t.string :email
      t.string :password_digest
      

    end
  end
end
