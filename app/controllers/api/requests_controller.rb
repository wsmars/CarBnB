# == Schema Information
#
# Table name: requests
#
#  id         :integer          not null, primary key
#  car_id     :integer          not null
#  user_id    :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("pending"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::RequestsController < ApplicationController
  before_filter :require_owner, only:[:approve, :deny, :cancel_by_host]
  before_filter :require_requester, only: [:cancel_by_requester]

  def approve

  end

  def deny

  end

  def cancel_by_host

  end

  def cancel_by_requester

  end

  def show
    @request = Request.find(params[:id])
    @requester = @request.user
    @owner = @request.owner
  end

  def create
    @request = Request.new(request_params)
    if @request.save
      @requester = @request.user
      @owner = @request.owner
      render :show
    else
      render json: {message: @request.errors.full_messages}, status: 422
    end
  end

  private
  def request_params
    params.require(:request).permit(:start_date, :end_date, :car_id, :user_id)
  end
end
