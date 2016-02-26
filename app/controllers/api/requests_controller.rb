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

  def create
    @request = Request.new(request_params)
    @request.user_id = current_user.id
    if @request.save
      redirect_to car_url(current_car)
    else
      flash.now[:errors] = @request.errors.full_messages
      #TODO: render
    end
  end

  private
  def request_params
    params.require(:request).permit(:start_date, :end_date)
  end

  def current_car
    @current_car = Car.find_by_id(@request.car_id)
  end
end
