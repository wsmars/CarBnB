# == Schema Information
#
# Table name: cars
#
#  id          :integer          not null, primary key
#  make        :string           not null
#  model       :string           not null
#  year        :integer          not null
#  milage      :integer          not null
#  price       :float            not null
#  car_type    :string           not null
#  description :text             not null
#  status      :string           default("available"), not null
#  street      :string           not null
#  city        :string           not null
#  state       :string           not null
#  zip_code    :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Api::CarsController < ApplicationController
  before_filter :require_signed_in, only: [:create, :edit, :update, :destroy]

  def index
    @cars = Car.where(city: params[:car][:city], status: 'available').to_a
  end

  def show
    @car = Car.find(params[:id])
  end

  def create
    @car = current_user.cars.new(car_params)
    @car.user_id = current_user.id
    if @car.save
      redirect_to car_url(@car)
    else
      render json: {errors: @car.errors.full_messages}
    end
  end

  def edit
    @car = current_user.cars.find(params[:id])
  end

  def update
    @car = current_user.cars.find(params[:id])
    if @car.update_attributes(car_params)
      redirect_to car_url(@car)
    else
      flash.now[:errors] = @car.errors.full_messages
      render :edit
    end
  end

  def destroy
    @car = Car.find(params[:id])
    @car.destroy
    redirect_to cars_url
  end

  private
  def car_params
    params.require(:car).permit(:make, :model, :year, :milage, :price, :description,
                                :street, :city, :state, :zip_code, :car_type)
  end
end
