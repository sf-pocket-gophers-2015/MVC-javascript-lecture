get '/' do
  @events = Event.all.order(created_at: :desc)
  erb :index
end

get '/events/new' do
  @event = Event.new
end

post '/events/create' do
  event = Event.new(name: params[:name], date: params[:date])
    event.save
  if event.save
    event.to_json
  else
    status 400
    event.to_json
  end
end