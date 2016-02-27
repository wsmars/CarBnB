class Api::SessionsController < ApplicationController
  before_action :not_logged_in, only: [:create, :new]

  def new
  end

  def show
    if current_user
      @user = current_user
    else
      render json: nil
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render :show
    else
      render json: {message: ["Username or Password is invalid"]}, status: 422
    end
  end

  def destroy
    sign_out
    render json: {message: "You have logged out"}
  end
end
