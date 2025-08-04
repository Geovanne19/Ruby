class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :text, null: false, default: ''
      t.integer :like_count, null: false, default: 0
      t.string :client_nome
      t.timestamps
    end
  end
end
