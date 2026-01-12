module Users
  class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
      build_resource(sign_up_params)
      name = params.dig(:user, :name)

      ActiveRecord::Base.transaction do
        resource.save!
        resource.create_user_profile!(name: name)
      end

      sign_up(resource_name, resource)
      render json: { ok: true, user: { name: name } }
    rescue ActiveRecord::RecordInvalid
      errors = resource.errors.full_messages
      if resource.user_profile
        errors += resource.user_profile.errors.full_messages
      elsif name.blank?
        errors << "お名前を入力してください。"
      end

      render json: { ok: false, errors: errors.uniq }, status: :unprocessable_entity
    end

    protected

    def sign_up_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end
end
