class Game < ApplicationRecord
  def self.popBubble(state, index)
    ary = state.split('')
    ary[index] = 'x'
    ary.join('')
  end
end
