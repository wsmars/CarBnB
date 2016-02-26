# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#

class Api::UsersController < ApplicationController
  before_action :not_logged_in, only: [:create, :new]

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: @user
    else
      # flash.now[:errors] = @user.errors.full_messages
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :email)
  end
end
