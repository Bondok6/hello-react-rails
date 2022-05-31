module Api
  # GreetingsController
  class GreetingsController < ApplicationController
    def index
      greetings = Greeting.find(Random.new.rand(1..10))
      render json: greetings
    end
  end
end
