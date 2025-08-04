class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller? 

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: { user: resource }, status: :ok
    else
      render json: {
        status: { code: 422, message: 'Erro ao criar usuário.', errors: resource.errors.full_messages }
      }, status: :unprocessable_entity
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
