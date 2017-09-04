class AddOriginalToVideos < ActiveRecord::Migration[5.1]
  def change
    add_column :videos, :original, :string
  end
end
