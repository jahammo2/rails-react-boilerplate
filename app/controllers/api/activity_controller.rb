class Api::ActivityController < ApplicationController
  def get_last_activity
    render_params = {
      json: {foo: "bar"},
      status: 200,
      include: "**"
    }

    render render_params.compact
  end
end
