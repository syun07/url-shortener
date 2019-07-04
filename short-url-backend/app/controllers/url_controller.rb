class UrlController < ApplicationController
    def index
        @urls = Url.all
        render json: @urls, status: :ok
    end

    # def new
    #     @url = Url.new(url_params)
    # end

    # def create
    #     @url = Url.new(url_params)
    #     if @url.save
    #         render json: @url, status: :created
    #     else
    #         render json: @eurl.errors.full_messages, status: :unprocessable_entity
    #     end
    # end
    
    def redirect 
        byebug
        # @short_url = request.headers['short_url']
        # @long_url = request.headers['long_url']
    end

    private

    def url_params
        params.permit(:short_url, :long_url)
    end
end
