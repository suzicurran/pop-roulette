class Game < ApplicationRecord
  def self.popBubble(state, index)
    ary = state.split('')
    ary[index] = 1
    ary.join('')
  end
end
