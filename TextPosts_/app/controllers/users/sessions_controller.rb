class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    yield resource if block_given?
    respond_with resource
  end

  private

  def respond_with(resource, _opts = {})
    render json: { user: resource, token: request.env['warden-jwt_auth.token'] }, status: :ok
  end

  def respond_to_on_destroy
    head :no_content
  end
end
