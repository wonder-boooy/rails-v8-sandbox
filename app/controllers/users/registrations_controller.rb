module Users
  class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
      build_resource(sign_up_params)
      resource.save

      if resource.persisted?
        sign_up(resource_name, resource)
        render json: { ok: true, user: { name: resource.name } }
      else
        render json: { ok: false, errors: resource.errors.full_messages },
               status: :unprocessable_entity
      end
    end

    protected

    def sign_up_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
  end
end
