class Api::V1::GamesController < ApplicationController
  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def update
    @game = Game.find(params[:id])
    new_state = Game.popBubble(@game.state, params[:bubbleToPop])
    if @game.update_attributes({ state: new_state })
      ActionCable.server.broadcast 'games',
        game_id: @game.id,
        state: @game.state
      head :ok
    end
  end
end
