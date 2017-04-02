class HelloWorld
	def self.hello(person = 'World')
		@person = person
		'Hello, ' + person + '!'
	end
end