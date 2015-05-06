require 'faker'
100.times do
  Event.create(name: Faker::Lorem.sentence, date: Faker::Time.forward(31))
end