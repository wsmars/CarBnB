class CarsController < ApplicationController
  before_filter :require_signed_in, only: [:create, :edit, :update, :destroy]

  def index
    @cars = Car.all
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
      flash.now[:errors] = @car.errors.full_messages
      render :index
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
