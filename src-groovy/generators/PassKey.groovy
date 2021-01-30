package generators

def static generatePassword(Integer length){
	
	def allChars = [ 'A'..'Z', 'a'..'z', '0'..'9' ].flatten() - [ 'O', '0', 'l', '1', 'I' ]
	def generatePassword = { passlength ->
		(0..<passlength).collect { allChars[ new Random().nextInt( allChars.size() ) ] }.join()
	}   

	return generatePassword(length)
}