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
    if !params[:car]
      @cars = Car.all
    elsif params[:car][:city]
      @cars = Car.where(city: params[:car][:city], status: 'available')
    elsif params[:car][:bounds]
      ne = params[:car][:bounds][:northEast]
      sw = params[:car][:bounds][:southWest]
      @cars = Car.where(lat: sw[:lat].to_f..ne[:lat].to_f).where(lng: sw[:lng].to_f..ne[:lng].to_f)
    end
  end

  def show
    @car = Car.find(params[:id])
  end

  def create
    @car = current_user.cars.new(car_params)
    if @car.save
      render :show
    else
      render json: {message: @car.errors.full_messages}, status: 422
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
      render json: {message: @car.errors.full_messages}, status: 422
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
                                :street, :city, :state, :zip_code, :car_type,
                                :user_id, :lat, :lng)
  end
end
