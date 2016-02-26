class Api::SessionsController < ApplicationController
  before_action :not_logged_in, only: [:create, :new]

  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
    else
      render json: {error: "Username or Password is invalid"}
    end
  end

  def destroy
    sign_out
    render json: ["You have logged out"]
  end
end
