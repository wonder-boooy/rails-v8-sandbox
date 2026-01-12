module Auth
  class SessionsController < ApplicationController
    def create
      user = User.find_by(email: params[:email]&.downcase)

      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: { ok: true, user: { name: user.name } }
      else
        render json: { ok: false, errors: ["メールアドレスまたはパスワードが正しくありません。"] },
               status: :unprocessable_entity
      end
    end

    def destroy
      reset_session
      render json: { ok: true }
    end
  end
end
