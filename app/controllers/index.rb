get '/' do
  @events = Event.all
  erb :index
end

get '/events/new' do
  @event = Event.new
end

post '/events/create' do
  event = Event.new(name: params[:name], date: params[:date])
  event.save
  redirect '/'
end