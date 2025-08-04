json.extract! post, :id, :text, :like_count, :created_at, :updated_at 
json.author do
  json.extract! post.user, :id, :name, :image_url, :arroba
  # json.arroba post.user.name.camelize.delete(" ")
end