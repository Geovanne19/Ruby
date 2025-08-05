class RenameProdutosToCategorias < ActiveRecord::Migration[7.1]
  def change
    rename_table :produtos, :categorias
  end
end
