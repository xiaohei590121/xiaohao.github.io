# Reading Time and Word Count Filters for Jekyll
# Calculates reading time and word count for posts

module Jekyll
  module ReadingTimeFilter
    # Calculate word count
    def word_count(input)
      return 0 if input.nil?
      words = input.split.length
      words
    end

    # Calculate reading time in minutes
    def reading_time(input, wpm = nil)
      return 0 if input.nil?

      # Get words per minute from config or use default
      wpm ||= @context.registers[:site].config['reading_speed'] || 200

      words = input.split.length
      minutes = (words / wpm.to_f).ceil

      # Minimum 1 minute
      minutes < 1 ? 1 : minutes
    end

    # Human readable reading time
    def reading_time_text(input)
      minutes = reading_time(input)
      if minutes == 1
        "1 min read"
      else
        "#{minutes} min read"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReadingTimeFilter)
