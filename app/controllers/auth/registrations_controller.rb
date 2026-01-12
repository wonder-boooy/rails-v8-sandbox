module Auth
  class RegistrationsController < ApplicationController
    def create
      user = User.new(user_params)

      if user.save
        session[:user_id] = user.id
        render json: { ok: true, user: { name: user.name } }
      else
        render json: { ok: false, errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
  end
end
