get '/' do
  @events = Event.all
  erb :index
end

get '/events/new' do
  @event = Event.new
end

post '/events/create' do
  p params
  event = Event.new(name: params[:name], date: params[:date])
  event.save
  event.to_json
end