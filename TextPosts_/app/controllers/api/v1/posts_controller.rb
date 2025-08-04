module Api
  module V1
    class PostsController < ActionController::API
      respond_to :json
      before_action :authenticate_user!, only: [:create]

      def index
        @posts = Post.includes(:user).order(created_at: :desc)
      end

      def create
        @post = current_user.posts.build(post_params)
        if @post.save
          render "create", status: :created
        else
          render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def post_params
        params.require(:post).permit(:text, :user_id)
      end
    end
  end
end
