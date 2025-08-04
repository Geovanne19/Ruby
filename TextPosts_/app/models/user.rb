class User < ApplicationRecord
  devise(
    :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable,
    :jwt_authenticatable,
    jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null
  )
  validates :name, presence: true
  validates :arroba, presence: true, uniqueness: true
  validates :image_url, presence: true
  has_many :posts, dependent: :destroy
end
