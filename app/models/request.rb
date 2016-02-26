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

class Request < ActiveRecord::Base
  STATUS = ['pending', 'approved', 'denied', 'canceled by host', 'canceled by guest']

  belongs_to :car
  belongs_to :user

  validates :car_id, :user_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: STATUS
  validate :does_not_over_lapping_approve_request
  validate :start_day_must_before_end_date

  def pending?
    self.status == 'pending'
  end

  def approved?
    self.status == 'approved'
  end

  def approved!
    raise 'Not a pending request' unless self.status == 'pending'
    self.status = 'approved'
    self.save!

    #TODO: deny other requests
  end

  def denied?
    self.status == 'denied'
  end

  def denied!
    self.status = 'denied'
    self.save!
  end

  def canceled_by_host!
    self.status = 'canceled by host'
    self.save!
  end

  def canceled_by_requester!
    self.status = 'canceled by guest'
    self.save!
  end

  def car_owner

  end

  private

  def overlapping_requests
    # ======================================
    #
    # Ranges can overlap in several ways:
    #
    #   |-----|       |-----|     |---|
    #       |-----|   |-----|   |-------|
    #     (2x)                    (2x)
    #
    # ======================================
    #
    # However, it is easier to think of the
    # two cases where they do not overlap:
    #
    #    [Case 1]
    #
    #        A              B
    #    |-------|      |-------|
    #    A(s)    A(e)   B(s)    B(e)
    #
    # The start point of B comes after the
    # end point of A. Thus: B(s) > A(e)
    #
    #
    #    [Case 2]
    #
    #        B              A
    #    |-------|      |-------|
    #    B(s)    B(e)   A(s)    A(e)
    #
    # The start point of A comes after the
    # end point of B. Thus: A(s) > B(e)
    #
    # ======================================
    #
    # Taking those two cases, we can say
    # there's no overlap when:
    #
    #   B(s) > A(e) || A(s) > B(e)
    #
    # ======================================
    #
    # We can negate this to get all cases
    # where there must be overlap:
    #
    #   !( B(s) > A(e) || A(s) > B(e) )
    #
    #
    # In order for overlap to occur, the
    # other range cannot be entirely before
    # it or entirely after it.
    #
    # ======================================

    # Want:
    # 1. A different request
    # 2. That is for the same car.
    # 3. That overlaps.

    Request
      .where("(:id IS NULL) OR (id != :id)", id: self.id)
      .where(car_id: self.car_id)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
       NOT( (start_date > :end_date) OR (end_date < :start_date) )
SQL
  end

  def overlapping_approved_requests
    overlapping_requests.where("status = 'approved'")
  end

  def overlapping_pending_requests
    overlapping_requests.where("status = 'pending'")
  end

  def does_not_over_lapping_approve_request
    # A denied request doesn't need to be checked. A pending request
    # should be checked; users shouldn't be able to make requests for
    # periods during which a car has already been spoken for.
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] <<
      "Request conflicts with existing approved request"
    end
  end

  def start_day_must_before_end_date
    return unless start_date && end_date
    errors[:start_date] << "must come before end date" if start_date > end_date
  end

end
