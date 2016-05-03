class Product < ActiveRecord::Base
  enum status: [:active, :pending, :inactive]
end
