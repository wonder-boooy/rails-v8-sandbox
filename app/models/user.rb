class User < ApplicationRecord
  # Include default devise modules.
  # Others available is :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :confirmable,
         :lockable,
         :timeoutable,
         :trackable

  validates :email,
            format: { with: Devise.email_regexp },
            presence: true,
            uniqueness: { case_sensitive: false }
end
