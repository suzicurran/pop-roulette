class Api::V1::GamesController < ApplicationController
  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def update
    @game = Game.find(params[:id])
    new_state = Game.popBubble(@game.state, params[:bubbleToPop])
    if @game.update_attributes({ state: new_state })
    end
  end
end
