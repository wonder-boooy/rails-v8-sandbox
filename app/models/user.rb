class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable

  has_one :user_profile, dependent: :destroy
end
