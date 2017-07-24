class Game < ApplicationRecord
  def self.popBubble(state, index)
    ary = state.split('')
    ary[index] = '1'
    ary.join('')
  end

  def resetState(length=16)
    self.update_attributes({state: "0" * length})
  end

end
