class Post < ApplicationRecord
  # attr_accessor :client_email
  # def client_email
  #   "teste"
  # end

  # def self.nome
  #   Post.class.name
  # end

  belongs_to :user
  
  validates :text, presence: true
end
