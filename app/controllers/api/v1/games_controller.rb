class Api::V1::GamesController < ApplicationController
  def show
    render json: game
  end

  def update
    new_state = Game.popBubble(game.state, params[:bubbleToPop])
    if game.update_attributes({ state: new_state })
      ActionCable.server.broadcast 'games',
        game_id: game.id,
        state: game.state
      head :ok
    end
  end

  def destroy
    game.resetState 100
  end

  def game
    @game = Game.find(params[:id])
  end
end
