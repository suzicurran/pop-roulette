class Game < ApplicationRecord
  def self.popBubble(state, index)
    ary = state.split('')
    ary[index] = 'x'
    ary.join('')
  end

  def resetState()
    self.update_attributes({state: "0000000000000000"})
  end

end
