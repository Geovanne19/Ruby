class CreateProdutos < ActiveRecord::Migration[7.1]
  def change
    create_table :produtos do |t|
      t.string :nome
      t.decimal :preco, precision: 10, scale: 2
      t.string :img

      t.timestamps
    end
  end
end
