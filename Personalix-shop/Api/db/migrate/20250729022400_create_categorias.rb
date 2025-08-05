class CreateCategorias < ActiveRecord::Migration[7.1]
  def change
    create_table :categorias do |t|
      t.string :nome
      t.decimal :preco, precision: 10, scale: 2
      t.string :img

      t.timestamps
    end
  end
end
