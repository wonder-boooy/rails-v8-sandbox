module Users
  class SessionsController < Devise::SessionsController
    respond_to :json

    def create
      self.resource = warden.authenticate(auth_options)

      if resource
        sign_in(resource_name, resource)
        render json: { ok: true, user: { name: resource.user_profile&.name } }
      else
        render json: { ok: false, errors: [ "メールアドレスまたはパスワードが正しくありません。" ] },
               status: :unprocessable_entity
      end
    end

    def destroy
      sign_out(resource_name)
      render json: { ok: true }
    end
  end
end
